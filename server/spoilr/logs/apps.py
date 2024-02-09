from django.apps import AppConfig


class SpoilrProgressConfig(AppConfig):
    name = "spoilr.logs"

    # Override the prefix for database model tables.
    label = "spoilr_logs"
