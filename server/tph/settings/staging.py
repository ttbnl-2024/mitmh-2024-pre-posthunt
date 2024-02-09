import distutils.util
import os

import sentry_sdk

from .base import *
from .base import EMAIL_SUBJECT_PREFIX, HOSTS

DEBUG = False

SEND_DISCORD_ALERTS = True

EMAIL_USER_DOMAIN = os.environ.get("EMAIL_USER_DOMAIN", "mitmh2024.com")

IS_TEST = bool(
    distutils.util.strtobool(
        os.environ.get("IS_TEST", str(EMAIL_USER_DOMAIN not in HOSTS))
    )
)

ALLOWED_HOSTS = ["localhost", "django", *HOSTS]

EMAIL_SUBJECT_PREFIX = "(staging) " + EMAIL_SUBJECT_PREFIX

MEDIA_ROOT = "/srv/media"

SENTRY_DSN = os.environ.get("SENTRY_DSN")

if SENTRY_DSN:
    sentry_sdk.init(
        dsn=SENTRY_DSN,
        # Set traces_sample_rate to 1.0 to capture 100%
        # of transactions for performance monitoring.
        traces_sample_rate=1.0,
        # Set profiles_sample_rate to 1.0 to profile 100%
        # of sampled transactions.
        # We recommend adjusting this value in production.
        profiles_sample_rate=1.0,
    )
