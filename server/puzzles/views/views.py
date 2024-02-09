import functools
import io
import os
import subprocess
import tempfile
import zipfile
from pathlib import Path

from django.conf import settings
from django.http import FileResponse, HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from django.utils import timezone
from django.utils.html import escape
from django.views.decorators.http import require_GET, require_POST

from puzzles.models import (
    Puzzle,
    PuzzleAccess,
    PuzzleSubmission,
    Team,
)
from puzzles.rounds.utils import rounds_by_act
from puzzles.shortcuts import dispatch_shortcut
from puzzles.views.auth import restrict_access
from spoilr.core.api.hunt import (
    get_site_close_time,
    get_site_end_time,
    is_site_launched,
)
from spoilr.utils import generate_url, json
from tph.utils import staticfiles_storage


def get_navbar_rounds(request, team):
    """Returns which rounds to display in the navbar, grouped by act."""
    visible_acts = rounds_by_act(team.unlocked_rounds())

    return [
        [
            {
                "act": puzzle_round.act,
                "slug": puzzle_round.slug,
                "name": puzzle_round.name,
                "url": puzzle_round.url,
            }
            for puzzle_round in act
        ]
        for act in visible_acts
    ]


def has_overworld(request, team):
    return any(
        round["act"] == 2 for act in get_navbar_rounds(request, team) for round in act
    )


@require_GET
def get_hunt_info(request):
    def get_team_info_for_header():
        if request.user.is_authenticated:
            team_info = None
            team = request.context.team
            if team:
                navbar_rounds = get_navbar_rounds(request, team)
                team_info = {
                    "name": team.name,
                    "slug": team.slug,
                    "rounds": navbar_rounds,
                    # hackish hack for deciding if we show the overworld round
                    "overworld": any(
                        round["act"] == 2 for act in navbar_rounds for round in act
                    ),
                    "isBeingTimeUnlocked": team.is_being_time_unlocked,
                }
                # Serialize the team's hunt story progress.
                story_state = request.context.story_state
                team_info["state"] = story_state.value

            team_info = {
                "teamInfo": team_info,
            }
            if request.context.is_staff:
                team_info["staff"] = True
            elif team and team.is_public:
                team_info["public"] = True
            if hasattr(request.user, "is_impersonate") and request.user.is_impersonate:
                team_info["isImpersonate"] = True

            return team_info

        return None

    if request.context.start_time:
        seconds_to_start = max(
            0, (request.context.start_time - timezone.now()).total_seconds()
        )
    else:
        seconds_to_start = 1000

    hunt_info = {
        "startTime": request.context.start_time,
        "secondsToStartTime": seconds_to_start,
        "endTime": get_site_end_time(),
        "closeTime": get_site_close_time(),
        "hintReleaseTime": request.context.hint_time,
    }
    if request.context.site:
        hunt_info["site"] = request.context.site

    return JsonResponse(
        {
            "huntInfo": hunt_info,
            "userInfo": get_team_info_for_header(),
        }
    )


@require_GET
def get_hunt_site(request):
    # For use in the registration page to redirect to the registration homepage until start time
    if not is_site_launched():
        return JsonResponse({"huntSite": "/"})
    else:
        return JsonResponse({"huntSite": generate_url("hunt", "/")})


def sort_puzzle(puzzle):
    """Sorting for internal use only."""
    return (puzzle.is_meta, puzzle.deep, puzzle.slug)


@require_POST
@restrict_access()
def shortcuts(request):
    response = HttpResponse(content_type="text/html")
    try:
        dispatch_shortcut(request)
    except Exception as e:
        response.write(
            "<script>top.toastr.error(%s)</script>"
            % (json.dumps("<br>".join(escape(str(part)) for part in e.args)))
        )
    else:
        response.write("<script>top.location.reload()</script>")
    return response


def robots(request):
    response = HttpResponse(content_type="text/plain")
    response.write("User-agent: *\nDisallow: /\n")
    return response


def handler404(request, exception):
    # Redirect to nextjs
    return redirect("/404")


@functools.lru_cache(maxsize=1)
def _get_server_zip():
    server_dir = Path(__file__).parents[2]
    fileobj = io.BytesIO()
    with zipfile.ZipFile(fileobj, mode="w", compression=zipfile.ZIP_DEFLATED) as zipf:
        # store resource files
        for parent, _dirs, filenames in os.walk(server_dir):
            for filename in filenames:
                path = os.path.join(parent, filename)
                relpath = os.path.relpath(path, server_dir)
                if any(
                    (
                        relpath.startswith("fixtures/"),
                        relpath.startswith("puzzles/migrations"),
                        relpath.startswith("puzzles/static"),
                        relpath.startswith("static/"),
                        relpath.startswith("tph/secrets.py"),
                        relpath.endswith(".npz"),
                        relpath.endswith(".pyc"),
                    )
                ):
                    continue
                zipf.write(path, relpath)

        # store staticfiles mapping
        staticfiles_bytes = json.dumps(_get_staticfiles()).encode()
        zipf.writestr("tph/staticfiles_mapping.json", staticfiles_bytes)

        # store media files mapping
        if os.path.exists(settings.ASSET_MAPPING):
            zipf.write(settings.ASSET_MAPPING, "tph/media_mapping.yaml")

        # create and store sqlite database
        with tempfile.TemporaryDirectory() as tmp:
            fname = "db.sqlite3"
            subprocess.run(
                [
                    f"{server_dir}/create_pyodide_database.py",
                    f"{tmp}/{fname}",
                    f"{server_dir}/tph/fixtures/posthunt/team.yaml",
                    f"{server_dir}/tph/fixtures/posthunt/dump.yaml",
                    f"{server_dir}/tph/fixtures/posthunt/access.yaml",
                ],
                check=True,
            )
            zipf.write(f"{tmp}/{fname}", fname)
    fileobj.seek(0)
    return fileobj.read()


@require_GET
@restrict_access(after_hunt_end=True)
def server_zip(request):
    return FileResponse(io.BytesIO(_get_server_zip()))


@functools.lru_cache(maxsize=1)
def _get_staticfiles():
    server_dir = Path(__file__).parents[2]
    static_directory = os.path.join(server_dir, "puzzles/static")
    staticmap = {}
    for parent, _dirs, filenames in os.walk(static_directory):
        for filename in filenames:
            path = os.path.join(parent, filename)
            relpath = os.path.relpath(path, static_directory)
            staticmap[relpath] = staticfiles_storage.url(relpath)
    return staticmap


@require_POST
def reset_pyodide_db(request):
    if settings.IS_PYODIDE:
        from tph.utils import reset_db

        reset_db()
        return JsonResponse({})
    else:
        return JsonResponse({}, status=404)
