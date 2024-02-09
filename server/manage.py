#!/usr/bin/env python3
import os
import sys

if __name__ == "__main__":
    server_environment = os.environ.get("SERVER_ENVIRONMENT", "dev")
    os.environ.setdefault(
        "DJANGO_SETTINGS_MODULE", f"tph.settings.{server_environment}"
    )
    # manage commands do not need large puzzle dependencies
    os.environ["SKIP_LARGE_DEPENDENCIES"] = "1"
    try:
        from django.core.management import execute_from_command_line
    except ImportError:
        # The above import may fail for some other reason. Ensure that the
        # issue is really that Django is missing to avoid masking other
        # exceptions.
        try:
            import django
        except ImportError as e:
            msg = (
                "Couldn't import Django. Are you sure it's installed and available on"
                " your PYTHONPATH environment variable? Did you forget to activate a"
                " virtual environment?"
            )
            raise ImportError(msg) from e
        raise
    execute_from_command_line(sys.argv)
