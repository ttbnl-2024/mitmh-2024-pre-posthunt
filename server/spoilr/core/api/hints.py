"""Config for hint management."""

from spoilr.core.models import HuntSetting

from .cache import memoized_cache

HINTS_CACHE_BUCKET = "hints"
HINTS_REF = "hints"


@memoized_cache(HINTS_CACHE_BUCKET)
def get_hints_enabled(site_ref: str = HINTS_REF) -> bool:
    setting, _ = HuntSetting.objects.get_or_create(
        id=7, name=f"spoilr.{site_ref}.enabled"
    )
    return setting.boolean_value or False


@memoized_cache(HINTS_CACHE_BUCKET)
def get_max_open_hints(site_ref: str = HINTS_REF) -> int:
    setting, _ = HuntSetting.objects.get_or_create(
        id=4, name=f"spoilr.{site_ref}.max_open_hints"
    )
    return int(setting.text_value or 1)


@memoized_cache(HINTS_CACHE_BUCKET)
def get_solves_before_hint_unlock(site_ref: str = HINTS_REF) -> int:
    """The number of teams that need to solve the puzzle before hints open for that puzzle."""
    setting, _ = HuntSetting.objects.get_or_create(
        id=5, name=f"spoilr.{site_ref}.solves_before_hint_unlock"
    )
    return int(setting.text_value or 100)
