from typing import Any

from django.conf import settings
from django.http import HttpRequest

from spoilr.core.api.cache import delete_memoized_cache_entry, memoized_cache
from spoilr.core.api.events import HuntEvent, register
from spoilr.core.models import Team, User

IMPERSONATE_SESSION_KEY = "impersonated-team"
TEAM_CACHE_USERNAME_BUCKET = "spoilr:team_username"
TEAM_CACHE_ID_BUCKET = "spoilr:team_id"
PUBLIC_USER_BUCKET = "spoilr:public_user"


def get_shared_account_username(team_username: str) -> str:
    return f"{team_username}__shared"


def impersonate(request: HttpRequest, team: Team) -> None:
    request.session[IMPERSONATE_SESSION_KEY] = team.username
    request.session.save()


def end_impersonate(request: HttpRequest) -> None:
    del request.session[IMPERSONATE_SESSION_KEY]
    request.session.save()


def get_impersonated_team(request: HttpRequest) -> Team | None:
    if IMPERSONATE_SESSION_KEY in request.session:
        return get_team_by_username(request.session[IMPERSONATE_SESSION_KEY])
    return None


@memoized_cache(TEAM_CACHE_USERNAME_BUCKET)
def get_team_by_username(team_username: str) -> Team:
    # Optimization: Make sure we select_related the users when we fetch
    # the team, so `shared_account` is cheap.
    return Team.objects.prefetch_related("user_set").get(username=team_username)


@memoized_cache(TEAM_CACHE_ID_BUCKET)
def get_team_by_id(team_id: int) -> Team:
    # Optimization: Make sure we select_related the users when we fetch
    # the team, so `shared_account` is cheap.
    return Team.objects.prefetch_related("user_set").get(id=team_id)


def _on_team_changed(team: Team, **kwargs: Any) -> None:
    delete_memoized_cache_entry(
        get_team_by_username, TEAM_CACHE_USERNAME_BUCKET, team.username
    )
    delete_memoized_cache_entry(get_team_by_id, TEAM_CACHE_ID_BUCKET, team.id)


@memoized_cache(PUBLIC_USER_BUCKET)
def get_public_user() -> User:
    assert settings.HUNT_PUBLIC_TEAM_NAME
    return User.objects.prefetch_related("team").get(
        username=get_shared_account_username(settings.HUNT_PUBLIC_TEAM_NAME)
    )


register(HuntEvent.TEAM_UPDATED, _on_team_changed)
register(HuntEvent.TEAM_REGISTERED, _on_team_changed)
