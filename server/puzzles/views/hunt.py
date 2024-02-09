from typing import Any

from django.http import JsonResponse
from django.views.decorators.http import require_GET

from spoilr.events.models import Event


@require_GET
def get_events(request):
    events = Event.objects.all().order_by("expected_start_time")
    data: dict[str, Any] = {
        "events": [
            {
                "slug": event.slug if event.status == "post" else "",
                "name": event.name,
                "location": event.location,
                "expected_start_time": event.expected_start_time.isoformat(),
                "min_participants": event.min_participants,
                "max_participants": event.max_participants,
                "description": event.description,
                "status": event.status,
            }
            for event in events
        ]
    }

    unlocked_overworld = False
    rewards_per_puzzle = 1
    rewards_str = "reward"
    team = request.context.team
    if team:
        data["currency"] = request.context.num_event_rewards
        data["strongCurrency"] = request.context.num_a3_event_rewards
        unlocked_overworld = any(round.act >= 2 for round in team.unlocked_rounds())
        rewards_per_puzzle = request.context.num_event_rewards_per_puzzle
        rewards_str = "rewards" if rewards_per_puzzle > 1 else "reward"

    data["weakInfo"] = (
        "Each regular reward may be redeemed for a non-meta answer in the "
        f"{'Underworld' if unlocked_overworld else 'initial rounds'}. "
        f"The Nightclub Event gives {rewards_per_puzzle} regular {rewards_str}."
    )
    if data.get("strongCurrency", 0) > 0:
        data["strongInfo"] = (
            "Each strong reward may be redeemed for a non-meta answer anywhere. "
            f"Each other event gives {rewards_per_puzzle} strong {rewards_str}."
        )

    return JsonResponse(data)
