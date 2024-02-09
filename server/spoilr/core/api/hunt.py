"""Business logic for querying or updating the hunt state."""

import datetime
import logging
from collections.abc import Collection
from functools import cache
from typing import TypeVar

from django.conf import settings
from django.utils.timezone import now

from puzzles.models.story import StoryCard, StoryCardAccess
from spoilr.core.models import (
    HuntSetting,
    Interaction,
    Puzzle,
    PuzzleAccess,
    Round,
    RoundAccess,
    Team,
    TeamInteraction,
)
from spoilr.hq.models import Task

from .cache import clear_memoized_cache, memoized_cache
from .events import HuntEvent, dispatch

logger = logging.getLogger(__name__)

CONFIG_CACHE_BUCKET = "config"
HUNT_REF = "hunt"

TEAM_VISIT_INTERACTION_SLUG_FORMAT = "team-visit-{}"

ModelT = TypeVar("ModelT", Puzzle, Round, Interaction)
AccessModelT = TypeVar("AccessModelT", PuzzleAccess, RoundAccess, TeamInteraction)


@memoized_cache(CONFIG_CACHE_BUCKET)
def get_site_launch_time(site_ref: str = HUNT_REF) -> datetime.datetime:
    setting, _ = HuntSetting.objects.get_or_create(
        id=1, name=f"spoilr.{site_ref}.launch_time"
    )
    return setting.date_value  # type: ignore


@memoized_cache(CONFIG_CACHE_BUCKET)
def get_site_end_time(site_ref: str = HUNT_REF) -> datetime.datetime:
    setting, _ = HuntSetting.objects.get_or_create(
        id=2, name=f"spoilr.{site_ref}.end_time"
    )
    return setting.date_value  # type: ignore


@memoized_cache(CONFIG_CACHE_BUCKET)
def get_site_close_time(site_ref: str = HUNT_REF) -> datetime.datetime:
    setting, _ = HuntSetting.objects.get_or_create(
        id=3, name=f"spoilr.{site_ref}.close_time"
    )
    return setting.date_value  # type: ignore


def is_site_launched(site_ref: str = HUNT_REF) -> bool:
    site_launch_time = get_site_launch_time(site_ref)
    return bool(site_launch_time and site_launch_time <= now())


def is_site_over(site_ref: str = HUNT_REF) -> bool:
    end_time = get_site_end_time(site_ref)
    return bool(end_time and end_time <= now())


def is_site_closed(site_ref: str = HUNT_REF) -> bool:
    close_time = get_site_close_time(site_ref)
    return not settings.IS_POSTHUNT and bool(close_time and close_time <= now())


@clear_memoized_cache(CONFIG_CACHE_BUCKET)
def launch_site(site_ref: str = HUNT_REF) -> None:
    setting, _ = HuntSetting.objects.get_or_create(
        id=1, name=f"spoilr.{site_ref}.launch_time"
    )
    if setting.date_value is None:
        setting.date_value = now()
        setting.save()
    dispatch(
        HuntEvent.HUNT_SITE_LAUNCHED,
        site_ref=site_ref,
        message=f"Launched site {site_ref} at {setting.date_value}",
    )


@memoized_cache(CONFIG_CACHE_BUCKET)
def is_site_solutions_published(site_ref: str = HUNT_REF) -> bool:
    setting, _ = HuntSetting.objects.get_or_create(
        id=9,
        name=f"spoilr.{site_ref}.solutions_released",
    )
    if setting.boolean_value is None:
        setting.boolean_value = False
        setting.save()
    return setting.boolean_value


def release_round(team: Team, round: Round) -> None:
    """Release a round to a team, including superrounds."""
    if round.superround:
        release_rounds(team, [round, round.superround])
    round_access, created = RoundAccess.objects.get_or_create(team=team, round=round)
    if created:
        logger.info("released %s/round/%s", team.username, round.slug)
        dispatch(
            HuntEvent.ROUND_RELEASED,
            team=team,
            round=round,
            object_id=round.slug,
            round_access=round_access,
            message=f'Released round "{round}"',
        )

    # unlock story cards for round unlock
    # hack hack hack
    if round.slug == "everglades":
        StoryCard.objects.filter(slug=round.slug + "-unlock-with-sword").first()
        StoryCard.objects.filter(slug=round.slug + "-unlock-without-sword").first()
    else:
        story_card = StoryCard.objects.filter(slug=round.slug + "-unlock").first()
        if story_card:
            story_card_access, story_card_access_created = (
                StoryCardAccess.objects.get_or_create(team=team, story_card=story_card)
            )
            if story_card_access_created:
                logger.info("released %s/story_card/%s", team.username, story_card.slug)
        else:
            logger.error("story card not found")

        # special case for round unlockables with different names
        special_story_cards = [
            # oracle videos
            ("the-throne-room", "oracle-1"),
            ("minneapolis-st-paul", "oracle-2"),
            ("newport", "oracle-3"),
            ("road-trip-redux", "oracle-4"),
            # herc-u-lease unlock
            ("the-throne-room", "herculease-unlock"),
        ]
        for special_story_card in special_story_cards:
            if round.slug == special_story_card[0]:
                story_card = StoryCard.objects.filter(
                    slug=special_story_card[1]
                ).first()
                if story_card:
                    story_card_access, story_card_access_created = (
                        StoryCardAccess.objects.get_or_create(
                            team=team, story_card=story_card
                        )
                    )
                    if story_card_access_created:
                        logger.info(
                            "released %s/story_card/%s", team.username, story_card.slug
                        )


def release_rounds(team: Team, rounds: list[Round]) -> None:
    """Release many rounds to a team."""
    # We need to verify that all superrounds are included in the release call, since the _release_many code
    # is agnostic to the model.
    all_rounds = set(rounds)
    for round in rounds:
        if round.superround and round.superround not in all_rounds:
            all_rounds.add(round.superround)
    _release_many(
        team,
        all_rounds,
        "round",
        RoundAccess,
        HuntEvent.ROUND_RELEASED,
    )


def release_puzzle(team: Team, puzzle: Puzzle) -> None:
    """Release a puzzle to a team."""
    puzzle_access, created = PuzzleAccess.objects.get_or_create(
        team=team, puzzle=puzzle
    )
    if created:
        logger.info("released %s/puzzle/%s", team.username, puzzle.slug)
        dispatch(
            (
                HuntEvent.METAPUZZLE_RELEASED
                if puzzle.is_meta
                else HuntEvent.PUZZLE_RELEASED
            ),
            team=team,
            puzzle=puzzle,
            puzzle_access=puzzle_access,
            object_id=puzzle.slug,
            message=f"Released {puzzle}",
        )


def release_puzzle_all_teams(puzzle: Puzzle) -> None:
    """Release a puzzle to every team."""
    _release_many_teams(puzzle, "puzzle", PuzzleAccess, HuntEvent.PUZZLE_RELEASED)


def release_puzzles(team: Team, puzzles: list[Puzzle]) -> None:
    """Release many puzzles to a team."""
    _release_many(team, puzzles, "puzzle", PuzzleAccess, HuntEvent.PUZZLE_RELEASED)


def release_interaction(
    team: Team,
    interaction: Interaction,
    *,
    reopen: bool = False,
    request_comments: str = "",
) -> TeamInteraction:
    """Release an interaction to a team, or update comments if it exists already."""
    team_interaction, created = TeamInteraction.objects.update_or_create(
        team=team,
        interaction=interaction,
        defaults={"request_comments": request_comments},
    )
    if created:
        logger.info("released %s/interaction/%s", team.username, interaction.slug)
        dispatch(
            HuntEvent.INTERACTION_RELEASED,
            team=team,
            interaction=interaction,
            team_interaction=team_interaction,
            object_id=interaction.slug,
            message=f'Released interaction "{interaction}"',
        )
    elif not created and reopen:
        team_interaction.accomplished = False
        team_interaction.accomplished_time = None
        team_interaction.save()
        logger.info("reopened %s/interaction/%s", team.username, interaction.slug)
        dispatch(
            HuntEvent.INTERACTION_REOPENED,
            team=team,
            interaction=interaction,
            team_interaction=team_interaction,
            object_id=interaction.slug,
            message=f'Reopened interaction "{interaction}"',
        )
    return team_interaction


def release_interactions(team: Team, interactions: list[Interaction]) -> None:
    """Release many interactions to a team."""
    _release_many(
        team,
        interactions,
        "interaction",
        TeamInteraction,
        HuntEvent.INTERACTION_RELEASED,
    )


def accomplish_interaction(
    *,
    task: Task | None = None,
    team_interaction: TeamInteraction | None = None,
    team: Team | None = None,
    interaction: Interaction | None = None,
) -> None:
    """Mark an interaction as completed by a team."""
    if not team_interaction:
        assert team and interaction
        team_interaction = TeamInteraction.objects.get(
            team=team, interaction=interaction
        )
    team = team_interaction.team
    interaction = team_interaction.interaction

    # Some _weird_ stuff
    if not task:
        task = team_interaction.task

    if team_interaction.accomplished:
        return

    team_interaction.accomplished = True
    team_interaction.accomplished_time = now()
    team_interaction.save()

    logger.info(
        "accomplished interaction %s/interaction/%s", team.username, interaction.slug
    )
    dispatch(
        HuntEvent.INTERACTION_ACCOMPLISHED,
        team=team,
        interaction=interaction,
        task=task,
        team_interaction=team_interaction,
        object_id=interaction.slug,
        message=f'Accomplished interaction "{interaction}"',
    )


def _release_many_teams(
    model: ModelT,
    model_name: str,
    AccessModel: type[AccessModelT],
    event_type: HuntEvent,
) -> None:
    existing_ids = {
        access.team_id for access in AccessModel.objects.filter(**{model_name: model})
    }

    missing_accesses = [
        AccessModel(team=team, **{model_name: model})
        for team in Team.objects.exclude(id__in=existing_ids)
    ]
    AccessModel.objects.bulk_create(missing_accesses)  # type: ignore

    for access in missing_accesses:
        logger.info(f"released {access.team.username}/{model_name}/{model.slug}")
        dispatch(
            event_type,
            team=access.team,
            **{model_name: model, f"{model_name}_access": access},
            object_id=model.slug,
            message=f'Released {model_name} "{model}"',
        )


def _release_many(
    team: Team,
    models: Collection[ModelT],
    model_name: str,
    AccessModel: type[AccessModelT],
    event_type: HuntEvent,
) -> None:
    existing_ids = {
        getattr(access, f"{model_name}_id")
        for access in AccessModel.objects.filter(
            team=team, **{f"{model_name}__in": models}
        )
    }

    missing_accesses = [
        AccessModel(team=team, **{model_name: model})
        for model in models
        if model.id not in existing_ids
    ]
    AccessModel.objects.bulk_create(missing_accesses)  # type: ignore

    for access in missing_accesses:
        model: ModelT = getattr(access, model_name)
        logger.info(f"released {team.username}/{model_name}/{model.slug}")
        dispatch(
            event_type,
            team=team,
            **{model_name: model, f"{model_name}_access": access},
            object_id=model.slug,
            message=f'Released {model_name} "{model}"',
        )


@cache
def _get_team_visit_interaction(visit_num: int) -> Interaction:
    slug = TEAM_VISIT_INTERACTION_SLUG_FORMAT.format(visit_num)
    return Interaction.objects.get(slug=slug)


def release_team_visit_interactions(visit_num: int) -> list[str]:
    teams_with_at_least_one_solved = Team.objects.exclude(
        team__last_solve_time__isnull=True
    )
    interaction = _get_team_visit_interaction(visit_num)
    for team in teams_with_at_least_one_solved:
        release_interaction(team, interaction)

    return [team.name for team in teams_with_at_least_one_solved]
