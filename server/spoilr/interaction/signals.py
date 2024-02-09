from django.db.models.signals import post_save
from django.dispatch import receiver

from spoilr.core.models import TeamInteraction
from spoilr.hq.models import Task, TaskStatus

from .models import TeamInteractionTask


@receiver(post_save, sender=TeamInteraction)
def on_interaction_save(sender, instance, created, **kwargs):
    # We may re-open interaction tasks for certain interactions like answer unlocks.
    iat, _ = TeamInteractionTask.objects.get_or_create(team_interaction=instance)
    task = iat.task
    if task:
        task.status = TaskStatus.PENDING
        task.handler = None
        task.snooze_time = None
        task.snooze_until = None
        task.save()
    else:
        iat.tasks.add(Task(), bulk=False)
