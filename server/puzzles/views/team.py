from django.conf import settings
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.views.decorators.http import require_GET

from puzzles.context import ContextHttpRequest
from puzzles.forms import UnsubscribeEmailForm
from puzzles.views.auth import restrict_access
from spoilr.email.models import BadEmailAddress, Email
from spoilr.registration.models import TeamRegistrationInfo


@require_GET
def registration_teams(request: HttpRequest):
    teams_list = [
        {"name": team["team_name"], "bio": team["bg_bio"]}
        for team in TeamRegistrationInfo.objects.values("team_name", "bg_bio").order_by(
            "team_name"
        )
    ]

    return JsonResponse({"teamsList": teams_list})


@restrict_access(after_hunt_end=True)
def unlock_everything(request: ContextHttpRequest) -> HttpResponse:
    # Only available after hunt ends. Lets a team unlock everything.
    if not request.context.team:
        return JsonResponse({}, status=404)
    team = request.context.team
    team.is_prerelease_testsolver = True
    team.save()
    return JsonResponse({}, status=200)


def unsubscribe(request: HttpRequest) -> HttpResponse:
    form = UnsubscribeEmailForm(request.POST)
    message_id_prefix = request.GET.get("mid")
    message_id = (
        f"{message_id_prefix}@{settings.EMAIL_USER_DOMAIN}"
        if message_id_prefix
        else None
    )

    if request.method == "POST":
        form_errors: dict = {}
        if not form.is_valid():
            form_errors.update(form.errors)
        if form_errors:
            return JsonResponse({"form_errors": form_errors}, status=400)
        address = form.cleaned_data["email"]
        if not message_id:
            return JsonResponse({}, status=404)
        email = (
            Email.objects.filter(
                message_id=message_id,
                is_from_us=True,
            )
            .only("to_addresses", "cc_addresses", "bcc_addresses")
            .first()
        )
        valid = False
        if email is None:
            return JsonResponse({}, status=404)
        for recipient in email.all_recipients:
            if address == Email.parseaddr(recipient):
                valid = True
        if not valid:
            return JsonResponse(
                {"form_errors": {"email": f"This email was not sent to '{address}'"}},
                status=400,
            )
        BadEmailAddress.objects.get_or_create(
            defaults={
                "reason": BadEmailAddress.UNSUBSCRIBED,
            },
            email=address,
        )
        return JsonResponse({}, status=200)

    else:
        exists = (
            message_id
            and Email.objects.filter(
                message_id=message_id,
                is_from_us=True,
            ).exists()
        )
        if not exists:
            return JsonResponse({}, status=404)
        return JsonResponse({}, status=200)
