import datetime
from typing import TypedDict

from django.db import models

from spoilr.core.models import Puzzle, Team


# TODO(sahil): Rewrite updates - could use a better model
class HQUpdate(models.Model):
    """
    Represent a message from headquarters to all teams. Shows up on an "updates" page as well as going out by
    email
    """

    subject = models.CharField(max_length=200)
    body = models.TextField()
    published = models.BooleanField(default=False)
    creation_time = models.DateTimeField(auto_now_add=True)
    modification_time = models.DateTimeField(blank=True, auto_now=True)
    publish_time = models.DateTimeField(blank=True, null=True)
    team = models.ForeignKey(Team, blank=True, null=True, on_delete=models.SET_NULL)
    puzzle = models.ForeignKey(
        Puzzle,
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        verbose_name="Errata for Puzzle",
        help_text=(
            "Select if this update is an erratum that should appear on the puzzle page."
            " Leave blank for general updates."
        ),
    )
    send_email = models.BooleanField(default=True)
    notify_emails = models.TextField(
        default="none",
        help_text=(
            "Who should receive this update via email. Use 'all' for everyone,"
            " 'captain' for team captain, or a comma-separated list of emails."
        ),
    )

    def __str__(self) -> str:
        return self.subject

    class HQUpdateData(TypedDict):
        text: str
        time: datetime.datetime
        puzzleName: str | None

    def render_data(self) -> HQUpdateData:
        return {
            "text": self.body,
            "time": self.creation_time,
            "puzzleName": self.puzzle.name if self.puzzle else None,
        }

    # Mostly copied from hints/models.
    def get_emails(self, team: Team) -> list[str]:
        if self.notify_emails == "captain":
            return [team.contact_email] if team.contact_email else []
        return team.all_emails

    @property
    def recipients(self):
        if self.notify_emails == "none":
            return []

        if self.notify_emails in ("all", "captain"):
            if self.team:
                teams = [self.team]
            elif self.puzzle:
                teams = self.puzzle.get_teams_unlocked()
            else:
                teams = list(Team.objects.all())

            return [(team, self.get_emails(team)) for team in teams]

        return [([], [s.strip() for s in self.notify_emails.split(",")])]
