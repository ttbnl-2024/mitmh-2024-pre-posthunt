from django.apps import AppConfig


class PuzzlesConfig(AppConfig):
    name = "puzzles"

    def ready(self) -> None:
        # Connect the signal handlers registered in signals and celery tasks in emailing
        from . import emailing, signals
