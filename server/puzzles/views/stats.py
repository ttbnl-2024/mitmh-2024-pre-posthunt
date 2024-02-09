import datetime
from collections import Counter, defaultdict
from typing import Any, TypedDict

from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_GET

import spoilr.core.models as spoilr_models
from puzzles.context import ContextHttpRequestWithPuzzle
from puzzles.views.auth import restrict_access, validate_puzzle
from spoilr.core.api.hunt import (
    get_site_end_time,
)
from tph.utils import load_file


def get_puzzle_stats(
    puzzle: spoilr_models.Puzzle, team: spoilr_models.Team | None
) -> dict[str, Any]:
    q = Q(team__team__is_hidden=False)
    if team:
        q |= Q(team__id=team.id)
    puzzle_submissions = (
        puzzle.puzzlesubmission_set.filter(q, timestamp__lt=get_site_end_time())
        .order_by("timestamp")
        .select_related("team", "tph_puzzlesubmission")
    )

    solve_time_map: dict[int, datetime.datetime] = {}
    total_guesses_map: dict[int, int] = defaultdict(int)
    solvers_map: dict[int, spoilr_models.Team] = {}
    free_answer_map: dict[int, bool] = defaultdict(lambda: False)
    free_solves = 0
    unlock_time_map: dict[int, datetime.datetime] = {
        unlock.team_id: unlock.timestamp for unlock in puzzle.puzzleaccess_set.all()
    }
    incorrect_guesses: Counter[str] = Counter()
    guess_time_map = {}
    for submission in puzzle_submissions:
        team_id = submission.team_id
        total_guesses_map[team_id] += 1
        if submission.correct:
            solve_time_map[team_id] = submission.timestamp
            solvers_map[team_id] = submission.team
            if submission.tph_puzzlesubmission.used_free_answer:
                free_answer_map[team_id] = True
                total_guesses_map[team_id] -= 1
                free_solves += 1
        else:
            incorrect_guesses[submission.answer] += 1
            guess_time_map[team_id, submission.answer] = submission.timestamp
    wrong = "(?)"
    if incorrect_guesses:
        ((wrong, _),) = incorrect_guesses.most_common(1)

    class SolverData(TypedDict):
        team: spoilr_models.Team
        is_current: bool
        unlock_time: datetime.datetime | None
        solve_time: datetime.datetime
        wrong_duration: float | None
        open_duration: float | None
        total_guesses: int
        used_free_answer: bool

    solvers: list[SolverData] = [
        {
            "team": solver,
            "is_current": solver == team,
            "unlock_time": unlock_time_map.get(solver.id),
            "solve_time": solve_time_map[solver.id],
            "wrong_duration": (
                (
                    solve_time_map[solver.id] - guess_time_map[solver.id, wrong]
                ).total_seconds()
                if (solver.id, wrong) in guess_time_map
                else None
            ),
            "open_duration": (
                (solve_time_map[solver.id] - unlock_time_map[solver.id]).total_seconds()
                if solver.id in unlock_time_map
                else None
            ),
            "total_guesses": max(total_guesses_map[solver.id] - 1, 0),
            "used_free_answer": free_answer_map[solver.id],
        }
        for solver in solvers_map.values()
    ]
    solvers.sort(key=lambda d: d["solve_time"])
    return {
        "solvers": solvers,
        "solves": len(solvers_map),
        "free_solves": free_solves,
        "guesses": sum(total_guesses_map.values()),
        "answers_tried": incorrect_guesses.most_common(),
        "wrong": wrong,
    }


@require_GET
@validate_puzzle()
@restrict_access(after_hunt_end=True)
def stats_public(request: ContextHttpRequestWithPuzzle):
    stats_dict = get_puzzle_stats(request.context.puzzle, request.context.team)
    # Change some objects to be a better fit for JSON
    solvers = []
    for solver in stats_dict["solvers"]:
        team = solver["team"]
        solver["team"] = team.name
        solver["slug"] = team.slug
        solvers.append(solver)
    stats_dict["solvers"] = solvers
    stats_dict["answers_tried"] = [
        {"wrong_answer": pair[0], "count": pair[1]}
        for pair in stats_dict["answers_tried"]
    ]
    # Manually populate puzzle data that's normally already in the Django call.
    stats_dict["puzzle_name"] = request.context.puzzle.name
    stats_dict["puzzle_answer"] = request.context.puzzle.normalized_answer
    stats_dict["puzzle_url"] = request.context.puzzle.url
    return JsonResponse(stats_dict)


@require_GET
@restrict_access(after_hunt_end=True)
def public_activity_csv(request):
    # Downloads a static version of the CSV generated earlier.
    with load_file(
        "views/teammate_hunt_submit_log.csv", base_module="puzzles"
    ).open() as f:
        content = f.read()
        response = HttpResponse(content, content_type="text/csv")
        response["Content-Disposition"] = (
            'attachment; filename="teammate_hunt_submit_log.csv"'
        )
        return response
