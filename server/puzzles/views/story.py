import functools
import logging
import re

from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_POST

from puzzles.assets import get_hashed_url
from puzzles.models.interactive import Session
from puzzles.models.story import StoryCard, StoryCardAccess, StoryState
from puzzles.story.dialogue_tree import get_dialogue_tree, get_next_state
from puzzles.utils import get_encryption_keys
from puzzles.views.auth import restrict_access
from puzzles.views.views import has_overworld
from spoilr.utils import generate_url

logger = logging.getLogger(__name__)


def story_card_data(story_card, show_title=False):
    # logger.error(story_card.audio_url)
    data = {
        "text": story_card.text,
        "slug": story_card.slug,
        "imageUrl": story_card.image_url,
        "puzzleUrl": story_card.puzzle_url,
        "url": story_card.url,
        "audioUrl": story_card.audio_url,
    }
    if show_title:
        data["title"] = story_card.title
    if story_card.act > 1:
        data["act"] = story_card.act
    return data


def _get_oracle_name(request):
    team = request.context.team
    oracle_name = "Delphi"
    if settings.IS_POSTHUNT or (
        team and any(round.act > 1 for round in team.unlocked_rounds())
    ):
        oracle_name = "Philadelphia"
    return oracle_name


@require_GET
def oracle_name(request):
    return JsonResponse({"oracleName": _get_oracle_name(request)})


@require_GET
def story_cards(request):
    team = request.context.team
    overworld = False
    if not settings.IS_POSTHUNT and not team:
        intro = StoryCard.objects.filter(slug="intro").first()
        if intro:
            return JsonResponse({"story": [story_card_data(intro)]})
        else:
            return JsonResponse({"story": []})

    if settings.IS_POSTHUNT:
        story_cards = StoryCard.objects.order_by("order")
        overworld = True
    else:
        story_cards = team.unlock_story_cards(request.context.deep)
        overworld = has_overworld(request, team)

    # special processing for 2024:
    # solver must've unlocked hydra
    # if the solver has solved the scavenger hunt, show the hydra-with-sword message
    # if the solver has not solved the scavenger hunt, show the hydra-without-sword message
    solved_scav = any(
        submission.puzzle.slug != "herc-u-lease"
        for submission in team.correct_puzzle_submissions()
    )
    if solved_scav:
        story_cards = [
            story_card
            for story_card in story_cards
            if story_card.slug != "everglades-unlock-without-sword"
        ]
    else:
        story_cards = [
            story_card
            for story_card in story_cards
            if story_card.slug != "everglades-unlock-with-sword"
        ]

    data = {
        "story": [
            story_card_data(story_card, show_title=True) for story_card in story_cards
        ],
        "overworld": overworld,
        "cryptKeys": get_encryption_keys(
            [story_card.slug for story_card in story_cards]
        ),
    }

    return JsonResponse(data)


@require_GET
def shade_cards(request):
    team = request.context.team

    if not settings.IS_POSTHUNT and not team:
        return JsonResponse({"story": []})

    if settings.IS_POSTHUNT:
        story_cards = StoryCard.objects.order_by("order").filter(
            act=2, slug__endswith="-shade"
        )
        oracle_cards = StoryCard.objects.order_by("order").filter(
            slug__startswith="oracle-"
        )
    else:
        story_cards = team.unlock_story_cards(request.context.deep)
        oracle_cards = [
            story_card
            for story_card in story_cards
            if story_card.slug.startswith("oracle-")
        ]
        if any(round.act > 1 for round in team.unlocked_rounds()):
            story_cards = [
                story_card
                for story_card in story_cards
                if story_card.act == 2 and story_card.slug.endswith("-shade")
            ]
        else:
            story_cards = [
                story_card
                for story_card in story_cards
                if story_card.act == 1 and story_card.slug.endswith("-shade-b")
            ]

    oracle_name = _get_oracle_name(request)
    data = {
        "story": [
            story_card_data(story_card, show_title=True) for story_card in story_cards
        ],
        "oracle": [
            story_card_data(oracle_card, show_title=True)
            for oracle_card in oracle_cards
        ],
        "oracleName": oracle_name,
        "sectionTitle": "?????" if oracle_name == "Delphi" else "Shades of Pluto",
        "cryptKeys": get_encryption_keys(
            [story_card.slug for story_card in story_cards]
        ),
    }

    return JsonResponse(data)


@require_GET
def story_card(request, slug):
    team = request.context.team
    if not team:
        return JsonResponse({}, status=404)

    story_card = StoryCard.objects.filter(slug=slug).first()
    if not (
        story_card
        and (
            team.is_internal
            or StoryCardAccess.objects.filter(team=team, story_card=story_card).exists()
        )
    ):
        return JsonResponse({}, status=404)

    return JsonResponse(story_card_data(story_card))


@require_GET
def get_dialogue_status(request, slug):
    team = request.context.team
    if not team:
        return JsonResponse({}, status=404)

    # Make sure story card with this slug is unlocked
    try:
        story_card = next(
            story
            for story in team.unlock_story_cards(request.context.deep)
            if story.slug == slug
        )
    except StopIteration:
        return JsonResponse({}, status=404)

    # Check if team has completed this session yet
    session = Session.objects.filter(team=team, storycard=story_card).first()
    is_complete = bool(session and session.is_complete)
    # FIXME: Look up sprite for this interaction
    sprite = None
    return JsonResponse(
        {
            "complete": is_complete,
            "sprite": sprite,
            "bg": get_hashed_url(f"Story/Interactions/{slug}.png"),
        }
    )


@require_GET
def get_dialogue(request, slug):
    team = request.context.team
    if not team:
        return JsonResponse({}, status=404)

    # Make sure story card with this slug is unlocked
    try:
        next(
            story
            for story in team.unlock_story_cards(request.context.deep)
            if story.slug == slug
        )
    except StopIteration:
        return JsonResponse({}, status=404)

    try:
        tree = get_dialogue_tree(slug)
    except Exception:
        logger.exception("Failed to get dialogue tree for slug %s", slug)
        return JsonResponse({}, status=404)

    state = request.GET.get("state") or "start"
    try:
        return JsonResponse(get_next_state(slug, tree, team, state))
    except (KeyError, ValueError):
        logger.exception(
            "Failed to get next state for slug %s, team %s, state %s",
            slug,
            str(team),
            state,
        )
        return JsonResponse({}, status=404)


@require_POST
@restrict_access(after_hunt_end=True)
def update_story_state(request):
    # Allow updating story state manually - only accessible after hunt ends
    team = request.context.team
    if not team:
        return JsonResponse({}, status=404)

    new_state = int(request.POST.get("state"))
    StoryState.set_state(team, new_state)
    return JsonResponse({}, status=201)
