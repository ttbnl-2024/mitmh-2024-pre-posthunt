import datetime
import typing
from collections.abc import Callable

from puzzles.rounds import (
    hell,
    hera,
    hydra,
    minneapolis_st_paul,
    nashville,
    oahu,
    olympic,
    rivers,
    texas,
    yellowstone,
)

if typing.TYPE_CHECKING:
    from puzzles.context import ContextHttpRequest
    from puzzles.models import Puzzle, Team

# TODO: Ideally all of these one-off methods would be refactored into a class
# implementing each of normalization, validation, answer checking, etc.
# But we don't have time for that, so one-off methods will have to do.

# The flow of an guess is:
# - Validate: check if the guess is "ok" to be processed
# - Normalize: convert the guess into the form in which it will be stored and displayed
#              to solvers (in the guess log and as the correct answer)
# - Check: test whether the guess is correct. Typically this uses normalization, but
#          sometimes we have extra-special rounds that need comparison beyond
#          normalization (i.e., ABCDEFG _ship feeders + metameta)

# MITMH2024 has no plans to use these, but is leaving them in place.

# Mapping from round slug to custom answer validator.
# A validator checks if the answer is "ok" to be processed.
# CUSTOM_ROUND_VALIDATORS: dict[
#     str, Callable[[str, list["PuzzleSubmission"], str], str]
# ] = {}

# Mapping from round slug to custom normalizer.
# CUSTOM_ROUND_NORMALIZERS: dict[str, Callable[[str, "spoilr_models.Puzzle"], str]] = {}

# Mapping from round slug to custom answer checker.
# Answer checkers happen AFTER normalization. In most cases you should use normalization
# first to transform what the output solvers will see, but in some cases we want
# to be extra lenient (but not show them the transformation unless it's correct).
# CUSTOM_ROUND_CHECKERS: dict[str, Callable[[str, "spoilr_models.Puzzle"], bool]] = {}

# Mapping from round slug to callback when a puzzle is solved.
CUSTOM_ROUND_SOLVE_CALLBACKS: dict[str, Callable[[str, "Team"], None]] = {}

# Mapping from round slug to custom rate limit.
CUSTOM_RATE_LIMITERS: dict[str, Callable[[int], datetime.timedelta]] = {}


CUSTOM_ROUND_DATA: dict[
    str,
    Callable[["ContextHttpRequest", "dict[str, typing.Any]", "Puzzle | None"], None],
] = {
    "everglades": hydra.custom_round_data,
    "hell": hell.custom_round_data,
    "minneapolis-st-paul": minneapolis_st_paul.custom_round_data,
    "nashville": nashville.custom_round_data,
    "oahu": oahu.custom_round_data,
    "olympic": olympic.custom_round_data,
    "rivers-of-the-dead": rivers.custom_round_data,
    "texas": texas.custom_round_data,
    "the-hole-in-the-ceiling-of-hades": hera.custom_round_data,
    "yellowstone": yellowstone.custom_round_data,
}
