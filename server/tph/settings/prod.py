import base64
import distutils.util
import json
import os

import sentry_sdk
from google.oauth2 import service_account

from .base import *
from .base import EMAIL_USER_DOMAIN, HOSTS, STORAGES

DEBUG = False

GCS_CREDENTIALS_BASE64 = os.environ.get("GCS_CREDENTIALS_BASE64")
if GCS_CREDENTIALS_BASE64:
    # On prod, use GCS
    STORAGES["default"] = {
        "BACKEND": "storages.backends.gcloud.GoogleCloudStorage",
        # Strictly these should read from environment variables but I can't be bothered rn
        "OPTIONS": {
            "project_id": "ttbnl-2024-puzzup",
            "bucket_name": "mitmh-2024",
            "default_acl": "publicRead",
            "credentials": service_account.Credentials.from_service_account_info(
                json.loads(base64.b64decode(GCS_CREDENTIALS_BASE64))
            ),
        },
    }

SEND_DISCORD_ALERTS = True

# TODO: email settings
# TODO: have separate SMTP and IMAP credentials

IS_TEST = bool(
    distutils.util.strtobool(
        os.environ.get("IS_TEST", str(EMAIL_USER_DOMAIN not in HOSTS))
    )
)

# for emailing Django errors, uncomment the AdminEmailHandler in LOGGING
# ADMINS = [("Matt", "FIXME@gmail.com")]

ALLOWED_HOSTS = ["django", *HOSTS]

SENTRY_DSN = os.environ.get("SENTRY_DSN")

# Posthunt -- disable Sentry to try to inspect lockups in more detail
# without Sentry threads getting in the way
# if SENTRY_DSN:
#     sentry_sdk.init(
#         dsn=SENTRY_DSN,
#         # Set traces_sample_rate to 1.0 to capture 100%
#         # of transactions for performance monitoring.
#         traces_sample_rate=1.0,
#         # Set profiles_sample_rate to 1.0 to profile 100%
#         # of sampled transactions.
#         # We recommend adjusting this value in production.
#         profiles_sample_rate=1.0,
#     )

# Celery override settings for prod
CELERY_BROKER_TRANSPORT_OPTIONS = {
    "visibility_timeout": 30,  # seconds
    "max_retries": 3,
}
BROKER_CONNECTION_MAX_RETRIES = 10
BROKER_HEARTBEAT = 30
CELERY_TASK_SOFT_TIME_LIMIT = 20  # seconds
CELERY_TASK_TIME_LIMIT = 30  # seconds
CELERY_REDIS_MAX_CONNECTIONS = 100
CELERYD_MAX_TASKS_PER_CHILD = 100

