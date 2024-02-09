import datetime
import email
import logging
import time
import traceback
from collections import defaultdict
from collections.abc import Callable
from typing import TYPE_CHECKING

import requests
from django.conf import settings
from django.http import HttpRequest, HttpResponse
from django.template.loader import render_to_string
from django.utils import timezone

from puzzles.celery import celery_app
from puzzles.hunt_config import (
    HUNT_CONTACT_EMAIL,
    HUNT_ORGANIZERS,
    HUNT_TITLE,
    MESSAGING_SENDER_EMAIL,
)
from tph.constants import IS_PYODIDE
from tph.utils import get_task_logger

if IS_PYODIDE:
    DISCORD_WEBHOOKS: dict[str, str] = defaultdict(str)
else:
    from tph.secrets import DISCORD_WEBHOOKS

if TYPE_CHECKING:
    from puzzles.models import Puzzle, Team


task_logger = get_task_logger(__name__)  # for Celery tasks


def dispatch_discord_alert(webhook: str, content: str, username="Django") -> None:
    dispatch_discord_alert_internal.delay(webhook, content, username)


@celery_app.task  # type: ignore
def dispatch_discord_alert_internal(
    webhook: str, content: str, username: str = "Django"
) -> None:
    content = f"<t:{int(time.time())}:t> {content}"
    if settings.IS_TEST:
        task_logger.info("Discord alert:\n" + content)
    if not settings.SEND_DISCORD_ALERTS:
        return
    if settings.SERVER_ENVIRONMENT != "prod":
        # Override with staging webhook.
        webhook = DISCORD_WEBHOOKS["STAGING"]

    if webhook == "FIXME":
        task_logger.warning("Invalid webhook (FIXME)")
        return

    try:
        offset = 0
        while True:
            chunk = content[offset : offset + 2000]
            # possibly chunk but try to preserve whole words
            # inspiration from https://github.com/fixmyrights/discord-bot/issues/11
            if offset + 2000 < len(content):
                reversed_chunk = chunk[::-1]
                length = min(reversed_chunk.find("\n"), reversed_chunk.find(" "))
                chunk = chunk[: 2000 - length]
                offset += 2000 - length
            else:
                offset = len(content)
            requests.post(
                webhook,
                data={"username": username, "content": content},
            )
            if offset == len(content):
                break
    except Exception:
        task_logger.error(
            "Failed to post to discord webhook with username %s, content: %s",
            username,
            content,
        )


def dispatch_general_alert(content: str, username: str = "AlertBot") -> None:
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["ALERT_ALERT"],
        content,
        username,
    )


def dispatch_submission_alert(content: str, username: str = "SubmissionBot") -> None:
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["SUBMISSION_ALERT"],
        content,
        username,
    )


def dispatch_free_answer_alert(content: str, username: str = "HelpBot") -> None:
    dispatch_discord_alert(DISCORD_WEBHOOKS["SUBMISSION_ALERT"], content, username)


def dispatch_victory_alert(content: str, username: str = "CongratBot") -> None:
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["CONGRAT_ALERT"],
        content,
        username,
    )


def dispatch_interaction_alert(content: str, username: str = "InteractionBot") -> None:
    # This goes to bot-spam and is expected to be handled by the Discord bot.
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["BOT_SPAM"],
        content,
        username,
    )


def dispatch_event_used_alert(content: str, username: str = "EventRewardBot") -> None:
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["EVENT_ALERT"],
        content,
        username,
    )


def dispatch_feedback_alert(content: str, username: str = "FeedbackBot") -> None:
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["FEEDBACK_ALERT"],
        content,
        username,
    )


def dispatch_email_alert(content: str, username: str = "EmailBot") -> None:
    # This goes to bot-spam and is expected to be handled by the Discord bot.
    # dispatch_discord_alert(
    #     DISCORD_WEBHOOKS["BOT_SPAM"],
    #     content,
    #     username,
    # )
    pass


def dispatch_email_response_alert(content: str, username: str = "EmailBot") -> None:
    # This goes to bot-spam and is expected to be handled by the Discord bot.
    # dispatch_discord_alert(
    #     DISCORD_WEBHOOKS["BOT_SPAM"],
    #     content,
    #     username,
    # )
    pass


def dispatch_interaction_response_alert(
    content: str, username: str = "InteractionBot"
) -> None:
    # This goes to bot-spam and is expected to be handled by the Discord bot.
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["BOT_SPAM"],
        content,
        username,
    )


def dispatch_hint_alert(content: str, username: str = "HintBot") -> None:
    # This goes to bot-spam and is expected to be handled by the Discord bot.
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["BOT_SPAM"],
        content,
        username,
    )


def dispatch_hint_response_alert(content: str, username: str = "HintBot") -> None:
    # This goes to bot-spam and is expected to be handled by the Discord bot.
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["BOT_SPAM"],
        content,
        username,
    )


def dispatch_bot_alert(content: str, username: str = "Bot Relayer") -> None:
    """For messages where Django needs to send info to a Discord bot."""
    dispatch_discord_alert(
        DISCORD_WEBHOOKS["BOT_SPAM"],
        content,
        username,
    )


puzzle_logger = logging.getLogger("puzzles.puzzle")


def log_puzzle_info(puzzle: "Puzzle", team: "Team", content: str) -> None:
    puzzle_logger.info(f"<{puzzle}> ({team}) {content}")


request_logger = logging.getLogger("puzzles.request")


def log_request_middleware(
    get_response: Callable[[HttpRequest], HttpResponse]
) -> Callable[[HttpRequest], HttpResponse]:
    def middleware(request: HttpRequest):
        request_logger.info(f"{request.get_full_path()} {request.user}")
        return get_response(request)

    return middleware


# NOTE: we don't have a request available, so this doesn't render with a
# RequestContext, so the magic from our context processor is not available! (We
# maybe could sometimes provide a request, but I don't want to add that
# coupling right now.)
def send_mail_wrapper(
    subject: str,
    template: str,
    context: dict,
    recipients: str | list[str],
    *,
    is_prehunt: bool,
    sent_datetime: datetime.datetime | None = None,
):
    """Send emails for a small list of email addresses via template in repo."""
    if not recipients:
        return
    # Allow single recipient
    if isinstance(recipients, str):
        recipients = [recipients]

    # Manually plug in some template variables we know we want
    context["hunt_title"] = HUNT_TITLE
    context["hunt_organizers"] = HUNT_ORGANIZERS
    plaintxt = render_to_string(template + ".txt", context)
    html = render_to_string(template + ".html", context)
    return send_mail_implementation(
        subject,
        plaintxt,
        html,
        recipients,
        is_prehunt=is_prehunt,
        sent_datetime=sent_datetime,
    )


# This is identical to send_mail_wrapper, except instead of rendering a template
# we take the plaintext and html directly.
def send_mail_text_wrapper(
    subject: str, plaintxt: str, html: str, recipients: str | list[str], *, is_prehunt
):
    """Send emails for a small list of email addresses via given text."""
    if not recipients:
        return
    # Allow single recipient
    if isinstance(recipients, str):
        recipients = [recipients]

    # Manually plug in some template variables we know we want
    return send_mail_implementation(
        subject, plaintxt, html, recipients, is_prehunt=is_prehunt
    )


def send_mail_canned_email(
    slug: str, recipients: str | list[str], bcc: bool = False, **kwargs
):
    from spoilr.email.models import CannedEmail, Email

    if not recipients:
        return
    # Allow single recipient
    if isinstance(recipients, str):
        recipients = [recipients]

    if bcc:
        to = []
        bcc_addrs = recipients
    else:
        to = recipients
        bcc_addrs = []
    # bcc_addrs.append(MESSAGING_SENDER_EMAIL)
    contact_email = HUNT_CONTACT_EMAIL
    reply_to = f'"{HUNT_TITLE}" <{contact_email}>'

    canned_email = CannedEmail.objects.get(slug=slug)
    mail_obj = Email.from_canned_email(
        canned_email,
        from_domain=settings.EMAIL_USER_DOMAIN,
        to_addresses=to,
        bcc_addresses=bcc_addrs,
        reply_to=reply_to,
        is_from_us=True,
        is_authenticated=True,
        created_via_webapp=False,
        status=Email.SENDING,
        **kwargs,
    )
    try:
        mail_obj.save()
        return mail_obj
    except Exception:
        dispatch_general_alert(
            "Could not send mail <{}> to <{}>:\n{}".format(
                canned_email.subject, ", ".join(recipients), traceback.format_exc()
            )
        )


def send_mail_implementation(
    subject: str,
    plaintxt: str,
    html: str,
    recipients: list[str],
    bcc: bool = False,
    *,
    is_prehunt,
    sent_datetime=None,
):
    from spoilr.email.models import Email

    subject = settings.EMAIL_SUBJECT_PREFIX + subject
    body = plaintxt
    if bcc:
        to = []
        bcc_addrs = recipients
    else:
        to = recipients
        bcc_addrs = []
    # bcc_addrs.append(MESSAGING_SENDER_EMAIL)
    mail = email.message.EmailMessage()
    mail["Subject"] = subject
    mail.set_content(body)
    mail["From"] = f'"{HUNT_TITLE}" <{MESSAGING_SENDER_EMAIL}>'
    mail["To"] = ", ".join(to)
    mail.add_alternative(html, subtype="html")
    contact_email = HUNT_CONTACT_EMAIL
    mail["Reply-To"] = f'"{HUNT_TITLE}" <{contact_email}>'
    mail_obj = Email.FromEmailMessage(
        mail,
        bcc_addresses=bcc_addrs,
        status=Email.SENDING,
        sent_datetime=sent_datetime,
    )
    try:
        mail_obj.save()
        return mail_obj
    except Exception:
        dispatch_general_alert(
            "Could not send mail <{}> to <{}>:\n{}".format(
                subject, ", ".join(recipients), traceback.format_exc()
            )
        )


# TODO: unused, untested
def send_mass_mail_implementation(
    subject: str,
    plaintxt: str,
    html: str,
    context,
    recipients: None | str = None,
    addresses=None,
    dry_run: bool = True,
):
    """Send emails to all teams, or a large list of email addresses."""
    from spoilr.email.models import EmailTemplate

    if recipients is None:
        recipients = EmailTemplate.RECIPIENT_TEAMS

    subject = settings.EMAIL_SUBJECT_PREFIX + subject
    from_address = f'"{HUNT_ORGANIZERS}" <info@{settings.EMAIL_USER_DOMAIN}>'
    status = EmailTemplate.DRAFT if dry_run else EmailTemplate.SCHEDULED
    kwargs = {}
    if addresses is not None:
        kwargs["addresses"] = addresses
    template_obj = EmailTemplate(
        subject=subject,
        text_content=plaintxt,
        html_content=html,
        from_address=from_address,
        scheduled_datetime=timezone.now(),
        status=status,
        recipients=recipients,
        **kwargs,
    )

    if not dry_run:
        try:
            template_obj.save()
        except:
            dispatch_general_alert(
                f"Could not schedule mail <{subject}>:\n{traceback.format_exc()}"
            )
            raise
    return template_obj


class EmptyEmbed:
    def to_dict(self) -> dict:
        return {}
