from django.contrib.contenttypes.fields import GenericRelation
from django.db import models

from spoilr.core.models import TeamInteraction
from spoilr.hq.models import Task


class TeamInteractionTask(models.Model):
    team_interaction = models.OneToOneField(TeamInteraction, on_delete=models.CASCADE)
    tasks = GenericRelation(Task, related_query_name="task")

    replied = models.BooleanField(default=False)

    def __str__(self):
        return str(self.team_interaction)

    @property
    def task(self):
        return self.tasks.first()
