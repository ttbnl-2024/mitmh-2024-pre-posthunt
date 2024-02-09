import datetime
import inspect
import types
from typing import TYPE_CHECKING, NotRequired, TypedDict

from django.db import transaction

from puzzles.models import Puzzle, PuzzleSubmission, Team
from spoilr.hints.models import Hint

if TYPE_CHECKING:
    from puzzles.context import ContextHttpRequest
    from spoilr.core.models import User


class ShortcutData(TypedDict):
    name: str | None
    action: NotRequired[types.FunctionType]


def get_shortcuts(context):
    heading = None
    for action, callback in Shortcuts.__dict__.items():
        if action.startswith("__"):
            continue
        if isinstance(callback, types.FunctionType):
            params = set(inspect.getfullargspec(callback).args)
            if "puzzle" in params and not context.puzzle:
                continue
            if "team" in params and not context.team:
                continue
            if "user" in params and context.team:
                continue
            if heading is not None:
                yield {"name": heading}
                heading = None
            yield {"action": action, "name": callback.__doc__}
        else:
            heading = callback


def dispatch_shortcut(request: "ContextHttpRequest"):
    action = request.POST.get("action")
    assert action, "Missing action"
    callback = getattr(Shortcuts, action, None)
    assert isinstance(callback, types.FunctionType), "Invalid action %r" % action
    params = dict.fromkeys(inspect.getfullargspec(callback).args)
    if "puzzle" in params:
        slug = request.POST.get("puzzle")
        assert slug, "Missing puzzle"
        puzzle = Puzzle.objects.filter(slug=slug).first()
        assert puzzle, "Invalid puzzle %r" % slug
        params["puzzle"] = puzzle
    if "team" in params:
        assert request.context.team, "Not on a team"
        params["team"] = request.context.team
    if "user" in params:
        assert not request.context.team, "Already on a team"
        params["user"] = request.user
    if "now" in params:
        params["now"] = request.context.now
    callback(**params)


# This namespace holds convenience functions for modifying an admin team's
# state for testing purposes. Feel free to add anything you think would be
# convenient to have in development. These will be rendered in order
# (hopefully...) in a menu, with the strings as headings.


class Shortcuts:
    @staticmethod
    def create_team(user: "User") -> None:
        """Create team"""
        Team(
            name=user.username,
            is_hidden=True,
        ).save()

    @staticmethod
    def prerelease_testsolver(team: Team) -> None:
        """Toggle testsolver"""
        team.is_prerelease_testsolver ^= True
        team.save()

    HINTS = "Hints (my team)"

    @staticmethod
    def hint_1(team: Team) -> None:
        """+1"""
        team.total_hints_awarded += 1
        team.save()

    @staticmethod
    def hint_5(team: Team) -> None:
        """+5"""
        team.total_hints_awarded += 5
        team.save()

    @staticmethod
    def hint_0(team: Team) -> None:
        """=0"""
        team.total_hints_awarded = 0
        team.save()

    @staticmethod
    def reset_hints(team: Team) -> None:
        """Reset"""
        team.total_hints_awarded = 0
        team.save()

    PUZZLE = "This puzzle"

    @staticmethod
    def show_answer(puzzle: Puzzle) -> None:
        """Show answer"""
        raise Exception(puzzle.answer)

    @staticmethod
    def show_deep(puzzle: Puzzle) -> None:
        """Show deep"""
        raise Exception(puzzle.deep)

    SOLVE = "Solve this puzzle"

    @staticmethod
    def solve(puzzle: Puzzle, team: Team) -> None:
        """Solve"""
        if not team.puzzlesubmission_set.filter(
            puzzle__puzzle=puzzle, status="correct"
        ).exists():
            PuzzleSubmission.objects.create(
                puzzle=puzzle,
                answer=puzzle.normalized_answer,
                status="correct",
                used_free_answer=False,
                team=team,
            )

    @staticmethod
    def free_answer(puzzle: Puzzle, team: Team) -> None:
        """Free"""
        if not team.puzzlesubmission_set.filter(
            puzzle__puzzle=puzzle, status="correct"
        ).exists():
            PuzzleSubmission.objects.create(
                puzzle=puzzle,
                answer=puzzle.normalized_answer,
                status="correct",
                used_free_answer=True,
                team=team,
            )

    @staticmethod
    def unsolve(puzzle: Puzzle, team: Team) -> None:
        """Unsolve"""
        team.puzzlesubmission_set.filter(
            puzzle__puzzle=puzzle, status="correct"
        ).delete()

    PUZZLE_HINTS = "Request hint on this puzzle"

    @staticmethod
    def unanswered_hint(puzzle: Puzzle, team: Team) -> Hint:
        """Unanswered"""
        return team.hint_set.create(
            puzzle=puzzle,
            text_content="Halp",
        )

    @staticmethod
    def answered_hint(puzzle: Puzzle, team: Team, now: datetime.datetime) -> None:
        """Answered"""
        hint_request = Shortcuts.unanswered_hint(puzzle, team)
        hint_response = hint_request.get_or_populate_response()
        hint_request.response = hint_response
        hint_request.status = Hint.ANSWERED
        hint_response.timestamp = now
        hint_response.text_content = "Ok"
        with transaction.atomic():
            hint_request.save(update_fields=("status", "response"))
            hint_response.save()

    DELETE = "Delete all my (on this puzzle)"

    @staticmethod
    def delete_hints(puzzle: Puzzle, team: Team) -> None:
        """Hints"""
        team.hint_set.filter(puzzle=puzzle).delete()

    @staticmethod
    def delete_guesses(puzzle: Puzzle, team: Team) -> None:
        """Guesses"""
        team.puzzlesubmission_set.filter(puzzle__puzzle=puzzle).delete()
