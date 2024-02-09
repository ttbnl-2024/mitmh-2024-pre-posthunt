from django.db import models

from puzzles.models import Puzzle


class HydraPuzzle(Puzzle):
    main_puzzle = models.OneToOneField(
        Puzzle,
        on_delete=models.CASCADE,
        parent_link=True,
        primary_key=True,
        related_name="hydra_puzzle",
    )

    puzzle_type = models.IntegerField(help_text="Main puzzle type for generated puzzle")
    hydra_order = models.IntegerField(unique=True)
