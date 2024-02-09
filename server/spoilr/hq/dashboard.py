import logging

from django.contrib.contenttypes.models import ContentType
from django.shortcuts import render

from spoilr.contact.models import ContactRequest
from spoilr.email.models import Email
from spoilr.hints.models import Hint
from spoilr.hq.models import Task, TaskStatus
from spoilr.hq.util.decorators import hq
from spoilr.interaction.models import TeamInteractionTask

logger = logging.getLogger(__name__)


@hq()
def dashboard(request):
    hint_count = Task.objects.filter(
        content_type=ContentType.objects.get_for_model(Hint),
        status=TaskStatus.PENDING,
    ).count
    task_count = Task.objects.filter(
        content_type=ContentType.objects.get_for_model(TeamInteractionTask),
        status=TaskStatus.PENDING,
    ).count
    contact_count = Task.objects.filter(
        content_type=ContentType.objects.get_for_model(ContactRequest),
        status=TaskStatus.PENDING,
    ).count
    email_count = (
        Email.objects.prefetch_related("tasks")
        .defer("raw_content", "header_content")
        .filter(
            tasks__isnull=False,
            tasks__status__in=(TaskStatus.PENDING, TaskStatus.SNOOZED),
        )
        .exclude(status=Email.RECEIVED_NO_REPLY_REQUIRED)
        .exclude(status=Email.RECEIVED_BOUNCE)
        .exclude(is_from_us=True)
        .count
    )

    return render(
        request,
        "hq/main.html",
        {
            "hint_count": hint_count,
            "task_count": task_count,
            "contact_count": contact_count,
            "email_count": email_count,
        },
    )
