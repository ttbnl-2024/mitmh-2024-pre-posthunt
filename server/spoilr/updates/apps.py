from django.apps import AppConfig


class SpoilrUpdatesConfig(AppConfig):
    name = "spoilr.updates"

    # Override the prefix for database model tables.
    label = "spoilr_updates"
