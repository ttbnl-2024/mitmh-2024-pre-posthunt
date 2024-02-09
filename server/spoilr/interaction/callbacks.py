from django.conf import settings

from spoilr.core.api.events import HuntEvent, dispatch, register


# TODO: consider converting to a signal
def on_interaction_released(team_interaction, **kwargs):
    from spoilr.hq.models import Task, TaskStatus
    from spoilr.interaction.models import TeamInteractionTask

    # We may re-open interaction tasks for certain interactions like answer unlocks.
    iat, _ = TeamInteractionTask.objects.get_or_create(
        team_interaction=team_interaction
    )
    task = iat.tasks.first()
    if task:
        task.status = TaskStatus.PENDING
        task.handler = None
        task.snooze_time = None
        task.snooze_until = None
        task.save()
    else:
        iat.tasks.add(Task(), bulk=False)


def on_tick(last_tick, **kwargs):
    from spoilr.core.models import TeamInteraction
    from spoilr.email.models import Email
    from spoilr.hq.models import Task, TaskStatus

    # If an email was received for a snoozed interaction, and unsnooze it.
    messages = Email.objects.filter(team__isnull=False, interaction__isnull=False)
    if last_tick:
        messages = messages.filter(received_datetime__gte=last_tick)

    for message in messages:
        team_interaction = (
            TeamInteraction.objects.prefetch_related("teaminteractiontask__tasks")
            .filter(team=message.team, interaction=message.interaction)
            .filter(
                teaminteractiontask__tasks__isnull=False,
                teaminteractiontask__tasks__status=TaskStatus.SNOOZED,
                teaminteractiontask__tasks__snooze_time__lte=message.received_datetime,
            )
            .first()
        )
        if team_interaction:
            task = team_interaction.teaminteractiontask.tasks.first()
            task.status = TaskStatus.PENDING
            task.snooze_time = None
            task.snooze_until = None
            task.handler = None
            task.claim_time = None
            task.save()

            dispatch(
                HuntEvent.TASK_UNSNOOZED,
                team=message.team,
                object_id=task.id,
                message=f"Unsnoozed task {task.content_object}",
            )


register(HuntEvent.INTERACTION_RELEASED, on_interaction_released)
register(HuntEvent.INTERACTION_REOPENED, on_interaction_released)
register(HuntEvent.HUNT_TICK, on_tick)
