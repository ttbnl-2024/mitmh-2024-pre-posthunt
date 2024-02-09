import datetime
from typing import NotRequired, TypedDict

from django.utils import timezone

from puzzles.models import Puzzle, PuzzleSubmission, Team, build_guess_data
from puzzles.rounds.utils import SKIP_ROUNDS

# This is not ideal, but our answer handling is a bit hunt specific.
# In the future, consider hooking into spoilr properly.
from spoilr.core.api.answer import (
    submit_puzzle_answer,
)
from spoilr.core.api.hunt import get_site_end_time


class RatelimitData(TypedDict):
    shouldLimit: bool
    guessesMade: list[str]
    secondsToWait: NotRequired[float]
    justLimited: NotRequired[bool]


def get_ratelimit(
    puzzle: Puzzle, team: Team, puzzle_submissions: list[PuzzleSubmission] | None = None
):
    from puzzles.rounds import CUSTOM_RATE_LIMITERS

    if puzzle_submissions is None:
        puzzle_submissions = list(
            PuzzleSubmission.objects.filter(
                team_id=team.id,
                puzzle_id=puzzle.id,
            )
        )
    assert all(
        submission.team_id == team.id and submission.puzzle_id == puzzle.id
        for submission in puzzle_submissions
    )
    curr_time = timezone.now()
    guesses_made = sorted(
        puzzle_submissions,
        key=lambda submission: submission.timestamp,
    )

    rate_limit = CUSTOM_RATE_LIMITERS.get(
        puzzle.round.slug, lambda i: datetime.timedelta(minutes=i**2 / 1.5)
    )
    expiration = max(
        (
            submission.timestamp + rate_limit(i)
            for i, submission in enumerate(
                guess
                for guess in reversed(guesses_made)
                # Only incorrect guesses count towards ratelimit
                if guess.incorrect
            )
        ),
        default=None,
    )

    should_limit = expiration is not None and expiration >= curr_time
    data: RatelimitData = {
        "shouldLimit": should_limit,
        "guessesMade": [g.answer for g in guesses_made],
    }
    if expiration and should_limit:
        # Adding a small buffer to the submit time. This should guarantee that
        # by the time countdown expires, the server will be ready to respond to
        # guesses.
        data["secondsToWait"] = (
            expiration + datetime.timedelta(seconds=1) - timezone.now()
        ).total_seconds()
    return data


def submit_answer(
    puzzle: Puzzle,
    team: Team,
    guess: str = "",
    guesses_remaining: int | None = None,
    puzzle_submissions: list[PuzzleSubmission] | None = None,
    submission_time: datetime.datetime | None = None,
    used_free_answer: bool = False,
):
    if not guesses_remaining:
        guesses_remaining = team.guesses_remaining(puzzle)
    if not puzzle_submissions:
        puzzle_submissions = team.puzzle_submissions(puzzle)
    if not submission_time:
        submission_time = timezone.now()

    normalized_guess = puzzle.normalize_answer(guess)
    guess_data = None
    error_msg = ""
    ratelimit_data = get_ratelimit(puzzle, team)
    http_status = 200

    if not used_free_answer:
        if ratelimit_data["shouldLimit"]:
            # Client writes custom error message so we don't need one here
            # (This shouldn't really happen anyway since client stops teams from
            # submitting if they're rate-limited)
            http_status = 429
        elif guesses_remaining <= 0:
            error_msg = "You have no more guesses for this puzzle!"
            http_status = 400

        if http_status != 200:
            return guess_data, http_status, error_msg, ratelimit_data

    response = submit_puzzle_answer(
        puzzle,
        team,
        normalized_guess,
        [ps.spoilr_submission for ps in puzzle_submissions],
        guarantee_correct=used_free_answer,
    )
    if response.error == "already-solved":
        error_msg = "You've already solved this puzzle!"
        http_status = 400
    if response.error == "blank":
        error_msg = "Sorry, your submission was invalid. Please try again."
        http_status = 400
    if response.error == "too-long":
        error_msg = "Please limit your guess to 500 characters maximum."
        http_status = 400
    elif response.error == "duplicate":
        error_msg = (
            f'You\'ve already tried calling in the answer "{normalized_guess}" for'
            " this puzzle."
        )
        http_status = 400

    if http_status != 200:
        return guess_data, http_status, error_msg, ratelimit_data

    # Yay, a legitimate guess
    submission = response.submission
    assert submission is not None
    tph_submission = PuzzleSubmission(
        spoilr_submission=submission, used_free_answer=used_free_answer
    )
    tph_submission.__dict__.update(submission.__dict__)
    # https://stackoverflow.com/a/69537811
    tph_submission.save_base(raw=True)

    if response.dummy_submission:
        PuzzleSubmission(
            spoilr_submission=response.dummy_submission,
            used_free_answer=used_free_answer,
        ).save_base(raw=True)

    if tph_submission.pseudo:
        puzzle.on_pseudo(tph_submission.answer, team)

    if tph_submission.correct or (
        response.dummy_submission and response.dummy_submission.correct
    ):
        puzzle.on_solved(team)

        if submission_time < get_site_end_time():
            team.last_solve_time = submission_time
            team.save()

        # Check if any puzzles unlocked
        # Because deep has likely changed, we can't use any cached values.
        team.unlock_puzzles(team.compute_deep(team.correct_puzzle_submissions()))

    guess_data = build_guess_data(tph_submission)

    if not guess_data["isCorrect"]:
        ratelimit_data = get_ratelimit(puzzle, team)
    if ratelimit_data["shouldLimit"]:
        # Was a valid guess, but now we are limited.
        ratelimit_data["justLimited"] = True
        http_status = 429

    return guess_data, http_status, error_msg, ratelimit_data


# TODO: come back to update this
def get_allowed_free_puzzles(request):
    # Ignore solved puzzles
    slugs_to_exclude = {
        submission.puzzle.slug
        for submission in request.context.correct_puzzle_submissions
    }

    rounds_to_exclude = {*SKIP_ROUNDS}
    return [
        puzzle
        for puzzle in request.context.puzzle_unlocks
        if puzzle.slug not in slugs_to_exclude
        and puzzle.round.slug not in rounds_to_exclude
        and not puzzle.is_meta
        # 2024: must be first round for weak reward
        and puzzle.round.act == 1
    ]


def get_allowed_a3_free_puzzles(request):
    # Poorly named - works on anything aside from a few crazy things
    # Ignore solved puzzles
    slugs_to_exclude = {
        submission.puzzle.slug
        for submission in request.context.correct_puzzle_submissions
    }
    rounds_to_exclude = {*SKIP_ROUNDS, "hell"}
    return [
        puzzle
        for puzzle in request.context.puzzle_unlocks
        if puzzle.slug not in slugs_to_exclude
        and puzzle.round.slug not in rounds_to_exclude
        and not puzzle.is_meta
    ]
