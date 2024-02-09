from typing import TYPE_CHECKING

from django.db import transaction

from puzzles.utils import HintVisibility, hint_availability
from spoilr.hints.models import Hint

if TYPE_CHECKING:
    from puzzles.models import Puzzle, Team


def maybe_create_hint(
    request,
    puzzle: "Puzzle",
    team: "Team",
    hint_text: str,
    thread_id: int | None = None,
    notify_emails: str = "all",
) -> tuple[int, str]:
    """
    Adds a new hint to the database.
    If thread_id is None, creates new hint thread.
    Returns status code and error message
    """
    if puzzle.canonical_puzzle:
        puzzle = puzzle.canonical_puzzle
        if puzzle.canonical_puzzle:
            msg = f"Canonical puzzle chain longer than 2: {puzzle.slug}"
            raise RuntimeError(msg)

    # First check if hint is part of a thread
    if thread_id is not None:
        original_request = Hint.objects.filter(pk=thread_id).first()
        if (
            original_request is None
            or original_request.team_id != team.pk
            or original_request.puzzle_id != puzzle.pk
        ):
            return 400, "Invalid hint request."

    # In tph-site, this validity check depends on the thread_id, but this only matters if
    # there is a limited number of hints, which is not true for this MH.
    hint_visibility, hint_reason = hint_availability(request, puzzle, team)
    if hint_visibility is not HintVisibility.CAN_REQUEST:
        return 400, hint_reason

    # This checks against double-sends, but shouldn't be possible if we cap open hints at 1.
    if Hint.objects.filter(
        is_request=True,
        team=team,
        puzzle=puzzle,
        text_content=hint_text,
    ).exists():
        return 400, "You've already asked the exact same hint question!"

    with transaction.atomic():
        hint = Hint(
            team=team,
            puzzle=puzzle,
            text_content=hint_text,
            notify_emails=notify_emails,
            root_ancestor_request_id=thread_id,
        )
        hint.save()

    return (
        200,
        (
            "Your request for a hint has been submitted and HQ has been notified -- we"
            " will respond to it soon!"
        ),
    )
