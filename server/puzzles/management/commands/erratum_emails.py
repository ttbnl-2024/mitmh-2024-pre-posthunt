from typing import TYPE_CHECKING

from django.core.management.base import BaseCommand

from puzzles.models import PuzzleAccess, Team

if TYPE_CHECKING:
    from collections.abc import Iterable


class Command(BaseCommand):
    help = (
        "List all email addresses of players on teams that have unlocked a certain"
        " puzzle"
    )

    def add_arguments(self, parser):
        parser.add_argument("puzzle_slug", nargs=1, type=str)

    def handle(self, *args, **options):
        slug = options["puzzle_slug"][0]
        self.stdout.write(f"Getting email addresses for puzzle {slug}...\n\n")
        # mypy doesn't seem to properly type team
        teams: Iterable[Team] = PuzzleAccess.objects.filter(puzzle__puzzle__slug=slug).values_list(  # type: ignore
            "team", flat=True
        )
        members: list[str] = []
        for team in teams:
            members.extend(team.all_emails)
        if len(members) > 0:
            self.stdout.write(", ".join(members))
            self.stdout.write(
                self.style.SUCCESS(f"\n\nFound {len(members)} team members.")
            )
        else:
            self.stdout.write(self.style.ERROR(f"Found {len(members)} team members."))
