"""
Business logic for unsafe operations on the hunt state.

*Warning*: This module should only be called by commands, or by admin team members.
"""

from django.conf import settings
from django.core.cache import caches

from spoilr.core.models import (
    HuntSetting,
    PuzzleAccess,
    PuzzleSubmission,
    RoundAccess,
    SystemLog,
    TeamInteraction,
)
from spoilr.hints.models import Hint

from .events import HuntEvent, dispatch


def reset_hunt_activity() -> None:
    """Resets the hunt and clears all team activity."""
    HuntSetting.objects.filter(name__startswith="spoilr.").delete()
    caches[settings.SPOILR_CACHE_NAME].clear()

    PuzzleAccess.objects.all().delete()
    RoundAccess.objects.all().delete()
    TeamInteraction.objects.all().delete()

    PuzzleSubmission.objects.all().delete()
    Hint.objects.all().delete()

    dispatch(HuntEvent.HUNT_ACTIVITY_RESET, message="Reset hunt activity")


def reset_hunt_log() -> None:
    """Resets the hunt system log."""
    SystemLog.objects.all().delete()
