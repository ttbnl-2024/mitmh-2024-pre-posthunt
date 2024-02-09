"""tph URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from collections.abc import Callable, Mapping

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import include, path, re_path
from django.views.generic.base import RedirectView

from puzzles.views import auth, hunt, interactions, puzzles, stats, story, team, views
from puzzles.views.puzzles import (
    a_trip_down_memory_lane,
    connecting_connections,
    do_you_like_wordle,
    enneagram,
    infinity_book,
    mandalay_bay,
    marathon_block_pushing_game,
    schrodingers_maze,
    sumantle,
    temporary_name,
    triangles,
    von_schweetzs_big_question,
)

# A map from slug to list of endpoint tuples (endpoint url, API handler)
PUZZLE_SPECIFIC_ENDPOINTS: Mapping[str, list[tuple[str, Callable]]] = {
    "a-trip-down-memory-lane": [
        ("found-pin-location", a_trip_down_memory_lane.found_pin_location),
    ],
    "connecting-connections": [
        ("guess", connecting_connections.make_guess),
    ],
    "do-you-like-wordle": [
        ("newgame", do_you_like_wordle.new_game),
        ("makeguess", do_you_like_wordle.make_guess),
    ],
    "enneagram": [
        ("guess", enneagram.make_guess),
    ],
    "mandalay-bay": [
        ("spin", mandalay_bay.spin_handler),
    ],
    "marathon-block-pushing-game": [
        ("sokoban", marathon_block_pushing_game.check_sokoban),
    ],
    "schrodingers-maze": [
        ("guess", schrodingers_maze.make_guess),
    ],
    "sumantle": [
        ("guess", sumantle.make_guess),
    ],
    "temporary-name": [
        ("guess", temporary_name.make_guess),
    ],
    "triangles": [
        ("click", triangles.click),
    ],
    "von-schweetzs-big-question": [
        ("table_guess", von_schweetzs_big_question.make_guess),
        ("racer_guess", von_schweetzs_big_question.racer_guess),
    ],
}

urlpatterns = list(
    filter(
        None,
        [
            not settings.IS_PYODIDE and path("", include("django_prometheus.urls")),
            not settings.IS_PYODIDE
            and re_path(r"^impersonate/", include("impersonate.urls")),
            # urls for password reset: request_reset, validate_token, and reset_password
            path("api/", include("pwreset.urls")),
            # Puzzle-specific endpoints
            *[
                path(f"api/puzzle/{slug}/{endpoint_url}", api_handler, {"slug": slug})
                for slug, endpoints in PUZZLE_SPECIFIC_ENDPOINTS.items()
                for endpoint_url, api_handler in endpoints
            ],
            path("api/infinity-book/encode", infinity_book.encode),
            path("api/infinity-book/page", infinity_book.get_page),
            path("api/events", hunt.get_events),
            path("api/unlock_everything", team.unlock_everything),
            path("api/hunt_info", views.get_hunt_info),
            path("api/hunt_site", views.get_hunt_site),
            path("api/login", auth.log_in),
            path("api/logout", auth.log_out),
            # TODO: This can be deduped into a single endpoint for creating/reading/updating. See auth.register_individual
            path(r"api/register", auth.register),
            not settings.IS_POSTHUNT
            and re_path(r"^api/register/(?P<slug>[^//]+)$", auth.registration),
            path("api/register_individual", auth.register_individual),
            path("api/registration_teams", team.registration_teams),
            path("api/rounds", puzzles.get_rounds),
            path("api/underworld_rounds", puzzles.underworld_rounds),
            path("api/overworld_rounds", puzzles.overworld_rounds),
            path("api/opt-into-time-unlock", puzzles.opt_into_time_unlock),
            re_path(r"^api/rounds/(?P<round_slug>[^//]+)$", puzzles.puzzles_by_round),
            path("api/puzzles", puzzles.puzzles_by_round),
            path("api/puzzle_list", puzzles.get_puzzles_team_api),
            path("api/story_state", story.update_story_state),
            re_path(r"^api/story/(?P<slug>[^//]+)$", story.story_card),
            path("api/story", story.story_cards),
            path("api/shades", story.shade_cards),
            path("api/oracle_name", story.oracle_name),
            re_path(
                r"^api/dialogue/(?P<slug>[^//]+)/status$", story.get_dialogue_status
            ),
            re_path(r"^api/dialogue/(?P<slug>[^//]+)$", story.get_dialogue),
            path("api/unsubscribe", team.unsubscribe),
            re_path(r"^api/solve/(?P<slug>[^//]+)$", puzzles.solve),
            re_path(r"^api/puzzle/(?P<slug>[^//]+)/hint$", puzzles.request_hint),
            re_path(r"^api/puzzle/(?P<slug>[^//]+)$", puzzles.puzzle_data),
            path(r"api/free_answer", puzzles.get_puzzles_for_free_answers),
            re_path(r"^api/free_answer/(?P<slug>[^//]+)$", puzzles.free_answer),
            path(r"api/free_a3_answer", puzzles.get_puzzles_for_free_a3_answers),
            re_path(r"^api/free_a3_answer/(?P<slug>[^//]+)$", puzzles.free_a3_answer),
            path(r"api/free_unlock", puzzles.get_rounds_for_free_unlock),
            re_path(r"^api/free_unlock/(?P<slug>[^//]+)$", puzzles.free_unlock),
            re_path(r"^api/stats/(?P<slug>[^//]+)$", stats.stats_public),
            re_path(r"^api/position/(?P<slug>[^//]+)$", puzzles.update_position),
            re_path(
                r"^api/interaction/(?P<slug>[^//]+)$", interactions.request_interaction
            ),
            path("api/guess_log", stats.public_activity_csv),
            path("api/server.zip", views.server_zip),
            path("api/reset_local_database", views.reset_pyodide_db),
            path("authorize", auth.authorize_view, name="authorize"),
            # special path only for Caddy to check whether the client should be allowed
            # access to the requested resource based on progression
            re_path(
                r"^check/(?P<original_path>.*)$",
                auth.check_access_allowed,
            ),
        ],
    )
)

if settings.SILK_ENABLED:
    urlpatterns.append(
        re_path(r"^internal/silk/", include("silk.urls", namespace="silk"))
    )

# serves media files in dev. Otherwise, Caddy serves them
urlpatterns.extend(static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT))

if settings.DEBUG:
    urlpatterns.append(path("robots.txt", views.robots))
else:
    handler404 = "puzzles.views.views.handler404"

urlpatterns.extend(
    [
        path("admin/", admin.site.urls),
        path("spoilr/", include("spoilr.urls")),
    ]
)
