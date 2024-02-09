import secrets
from datetime import timedelta

from django.contrib.auth import update_session_auth_hash
from django.http import JsonResponse
from django.utils import timezone
from django.views.decorators.http import require_POST

from spoilr.core.models import User
from spoilr.utils import json

from .forms import RequestResetForm, ResetPasswordForm, ValidateTokenForm
from .models import Token


@require_POST
def request_reset(request):
    form = RequestResetForm(request.POST)
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)

    form.clean()
    username = form.cleaned_data["username"]
    user = User.objects.filter(username=username).first()

    if not user:
        return JsonResponse(
            {"form_errors": {"username": f"Team username {username} does not exist."}}
        )

    token = Token(
        user=user,
        token=secrets.token_urlsafe(16),
        expiry=(timezone.now() + timedelta(hours=24)),
    )
    token.save()
    return JsonResponse({})


def _validate_token(username, token):
    now = timezone.now()
    tokens = Token.objects.filter(user__username=username, token=token)
    for token in tokens:
        if token.expiry < now:
            token.delete()
        else:
            return token
    return None


@require_POST
def validate_token(request):
    """
    This endpoint needs to be called from the server, which doesn't use FormData,
    so it instead accepts ordinary JSON that it needs to deserialize itself
    """
    form = ValidateTokenForm(json.loads(request.body.decode()))
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)

    form.clean()
    username = form.cleaned_data["username"]
    token = form.cleaned_data["token"]

    reset_token = _validate_token(username, token)
    if reset_token:
        return JsonResponse({"valid": True})
    return JsonResponse({"valid": False}, status=400)


@require_POST
def reset_password(request):
    val_form = ValidateTokenForm(request.POST)
    if not val_form.is_valid():
        return JsonResponse({"form_errors": val_form.errors}, status=400)

    val_form.clean()
    username = val_form.cleaned_data["username"]
    token = val_form.cleaned_data["token"]

    reset_token = _validate_token(username, token)
    if not reset_token:
        return JsonResponse({"error": "Not a valid reset token"}, status=400)

    # now the token is valid
    user = User.objects.get(username=username)
    reset_form = ResetPasswordForm(user, request.POST)
    if not reset_form.is_valid():
        return JsonResponse({"form_errors": reset_form.errors}, status=400)

    reset_form.clean()
    reset_form.save()
    update_session_auth_hash(request, user)
    reset_token.delete()
    return JsonResponse({})
