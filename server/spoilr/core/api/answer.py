import logging
import re
from dataclasses import dataclass
from typing import Literal

from django.conf import settings
from django.utils.timezone import now

from spoilr.core import models as m
from spoilr.core.models import (
    Puzzle,
    PuzzleAccess,
    PuzzleSubmission,
)

from .events import HuntEvent, dispatch

INCORRECT_ATTEMPT_ALERT_THRESHOLD = 10
MAX_NORM_GUESS_LENGTH = 500

logger = logging.getLogger(__name__)

_PUZZLE_ANSWER_INVALID_LETTERS = re.compile(r"[^A-Z0-9]")


def is_magic_answer(answer: str):
    """
    Test whether the submitted answer is the 'magic answer' for admin teams to
    auto-solve the puzzle.
    """
    answer = _PUZZLE_ANSWER_INVALID_LETTERS.sub("", answer)
    return answer == settings.SPOILR_ADMIN_MAGIC_ANSWER


GuessError = Literal["already-solved", "blank", "too-long", "duplicate"]


@dataclass
class GuessResponse:
    accepted: bool = True
    submission: m.PuzzleSubmission | None = None
    dummy_submission: m.PuzzleSubmission | None = None
    error: GuessError | None = None

    @staticmethod
    def for_error(err: GuessError):
        return GuessResponse(accepted=False, error=err)


def submit_puzzle_answer(
    puzzle: m.Puzzle,
    team: m.Team,
    guess: str,
    previous_guesses: list[m.PuzzleSubmission],
    *,
    noop_submission: bool = False,
    guarantee_correct: bool = False,
) -> GuessResponse:
    """
    Submits an answer to the puzzle for the team. If `noop_submission` is True,
    then the submission won't create new PuzzleSubmission rows or trigger events.

    `previous_guesses` by the team for the puzzle are used to determine when
    multi-answer puzzles are complete, and drive business logic in case of an
    incorrect answer (in triggered events).

    Returns a GuessResponse.
    """

    norm_guess = puzzle.normalize_answer(guess)

    # Pretend that admin team submitted the right answer
    if (team.is_admin and is_magic_answer(guess)) or guarantee_correct:
        logger.info(f"admin team {team} used magic answer to solve {puzzle}")
        norm_guess = puzzle.answer

    if any(subm.correct for subm in previous_guesses):
        return GuessResponse.for_error("already-solved")
    if not norm_guess:
        return GuessResponse.for_error("blank")
    if len(norm_guess) > MAX_NORM_GUESS_LENGTH:
        return GuessResponse.for_error("too-long")
    if any(norm_guess == subm.answer for subm in previous_guesses):
        return GuessResponse.for_error("duplicate")

    status = "incorrect"
    message: str = ""
    dummy_correct_submission = None

    if not puzzle.is_multi_answer:
        if puzzle.is_correct(norm_guess):
            status = "correct"
            norm_guess = puzzle.answer
    elif puzzle.is_multi_answer and norm_guess == puzzle.answer:
        status = "correct"
    # Dupe-checked earlier
    elif puzzle.is_multi_answer and any(
        puzzle.compare_answers(partial, guess) for partial in puzzle.all_answers
    ):
        status = "partial"
        if len([g for g in previous_guesses if g.status == "partial"]) + 1 == len(
            puzzle.all_answers
        ):
            dummy_correct_submission = PuzzleSubmission(
                team=team,
                puzzle=puzzle,
                raw_answer=guess,
                answer=puzzle.answer,
                response=message,
                status="correct",
            )
    if status == "incorrect":
        for pseudo in puzzle.pseudoanswer_set.all():
            if puzzle.compare_answers(pseudo.answer, guess):
                status = "pseudo"
                message = pseudo.response
                break

    answer_submission = PuzzleSubmission(
        team=team,
        puzzle=puzzle,
        raw_answer=guess,
        answer=norm_guess,
        response=message,
        status=status,
    )

    # Don't save for public team on live website (shared state)
    if not (team.is_public and not settings.IS_PYODIDE) and not noop_submission:
        answer_submission.save()
        if dummy_correct_submission:
            dummy_correct_submission.save()

    # Dispatch events per status
    if status == "correct":
        _handle_puzzle_correct_answer(team, puzzle, noop_submission)
    elif status == "incorrect":
        _handle_puzzle_incorrect_answer(
            team, puzzle, guess, previous_guesses=previous_guesses
        )
    else:
        _handle_puzzle_non_answer(team, puzzle, guess, status)

    if dummy_correct_submission:
        _handle_puzzle_correct_answer(team, puzzle, noop_submission)

    return GuessResponse(
        submission=answer_submission, dummy_submission=dummy_correct_submission
    )


def _handle_puzzle_correct_answer(maybe_team, puzzle, noop_submission=False):
    if not noop_submission and maybe_team:
        # A team might not have access if it was an admin team.
        try:
            puzzle_access = PuzzleAccess.objects.get(team=maybe_team, puzzle=puzzle)
            if not puzzle_access.solved:
                puzzle_access.solved = True
                puzzle_access.solved_time = now()
                puzzle_access.save()
        except PuzzleAccess.DoesNotExist:
            pass

    dispatch(
        HuntEvent.METAPUZZLE_SOLVED if puzzle.is_meta else HuntEvent.PUZZLE_SOLVED,
        team=maybe_team,
        puzzle=puzzle,
        object_id=puzzle.slug,
        noop_submission=noop_submission,
        message=f"Solved {puzzle}",
    )


def _handle_puzzle_incorrect_answer(maybe_team, puzzle, answer, previous_guesses=None):
    threshold_message = ""
    if (
        previous_guesses is not None
        and len(previous_guesses) >= INCORRECT_ATTEMPT_ALERT_THRESHOLD
    ):
        threshold_message = f" *** THIS IS WRONG GUESS #{len(previous_guesses)} ***"
    dispatch(
        (
            HuntEvent.METAPUZZLE_INCORRECTLY_ATTEMPTED
            if puzzle.is_meta
            else HuntEvent.PUZZLE_INCORRECTLY_ATTEMPTED
        ),
        team=maybe_team,
        puzzle=puzzle,
        object_id=puzzle.slug,
        answer=answer,
        previous_guesses=previous_guesses,
        message=f"Incorrect answer “{answer}” for {puzzle}{threshold_message}",
    )


def _handle_puzzle_non_answer(maybe_team, puzzle, answer, status):
    kind = "pseudoanswer" if status == "pseudo" else "partial answer"
    dispatch(
        (
            HuntEvent.METAPUZZLE_ATTEMPTED
            if puzzle.is_meta
            else HuntEvent.PUZZLE_ATTEMPTED
        ),
        team=maybe_team,
        puzzle=puzzle,
        object_id=puzzle.slug,
        message=f"Submitted {kind} {answer}",
    )


# TODO: Add back minipuzzle submission logic, pending whether we have sufficient
# minipuzzles that a separate flow from pseudoanswers makes sense.
# Minipuzzles should be made consistent with PuzzleAccess (?)
