import distutils.util
import enum
import os
from pathlib import Path
from typing import Any

from tph.constants import IS_PYODIDE

HUNT_NAME = "MIT Mystery Hunt 2024"

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRV_DIR = os.environ.get("SRV_DIR", "/srv")
SERVER_ENVIRONMENT = os.environ.get("SERVER_ENVIRONMENT", "dev")

LOG_BASE_DIR = Path(SRV_DIR) / "logs"

# django key
SECRET_KEY = os.environ.get("SECRET_KEY", "FIXME_CHANGE_THIS_INSECURE_SECRET_KEY")
# key for encrypted js files -- keep in sync with client/next.config.js
JS_ENCRYPTION_KEY = "SECRET_KEY_I_PROMISE_THIS_WAS_SET_IN_PROD"
# to disambiguate between multiple Hunts on the archive site
COOKIE_PREFIX = "2024-"

# setting for posthunt infra for statification. prefer using
# puzzles.views.auth.restrict_access for most posthunt conditioning
IS_POSTHUNT = bool(
    distutils.util.strtobool(os.environ.get("ENABLE_POSTHUNT_SITE", str(False)))
)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
# list of all hosts
MAIN_HUNT_HOST = os.environ.get("HUNT_HOST")
REGISTRATION_HOST = os.environ.get("REGISTRATION_HOST")
POSTHUNT_HOST = os.environ.get("POSTHUNT_HOST")
# NB: the order here is priority for SSO if not explicitly set
HOSTS = list(
    filter(
        None,
        [
            MAIN_HUNT_HOST,
            REGISTRATION_HOST,
            POSTHUNT_HOST,
        ],
    )
)
first_host = HOSTS[0] if HOSTS else None

PREHUNT_HOST = REGISTRATION_HOST or first_host
HUNT_HOST = MAIN_HUNT_HOST or first_host
SSO_HOST = os.environ.get("SSO_HOST", first_host)
ALLOWED_HOSTS: list[str] = []
DEFAULT_AUTO_FIELD = "django.db.models.AutoField"
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

POSTGRES_HOST = os.environ.get("POSTGRES_HOST", "localhost")
POSTGRES_DB = os.environ.get("POSTGRES_DB", "postgres")
POSTGRES_USER = os.environ.get("POSTGRES_USER", "postgres")
POSTGRES_PASSWORD = os.environ.get("POSTGRES_PASSWORD", "postgres")
# not a robust test but sufficient for our use
if POSTGRES_DB == "pgbouncer":
    POSTGRES_ENGINE = "django.db.backends.postgresql_psycopg2"
else:
    POSTGRES_ENGINE = "django.db.backends.postgresql"

NUM_REDIS_HOSTS = int(os.environ.get("REDIS_REPLICAS", "1"))
REDIS_HOST = os.environ.get("REDIS_HOST", "localhost")
REDIS_HOSTS = [REDIS_HOST]
# multiple redis hosts did not seem to work for some reason
"""
if NUM_REDIS_HOSTS > 1:
    for i in range(2, NUM_REDIS_HOSTS + 1):
        REDIS_HOSTS.append(f"tph_redis_{i}")
"""
REDIS_PORT = 6379

# setting for if ML models and other large dependencies are not needed
SKIP_LARGE_DEPENDENCIES = bool(
    distutils.util.strtobool(os.environ.get("SKIP_LARGE_DEPENDENCIES", "False"))
)


# class has to be all caps to be accessible via django.conf.settings
@enum.unique
class REDIS_DATABASE_ENUM(enum.IntEnum):
    CHANNELS = 0
    CELERY = 1
    REDIS_CLIENT = 2
    DJANGO_CACHE = 3
    SPOILR_CACHE = 4


# redis timeout values, in seconds
REDIS_LONG_TIMEOUT = 60  # general default
REDIS_FAST_TIMEOUT = 5  # for a single request lifetime


# spoilr settings

SPOILR_CACHE_NAME = "spoilr"
SPOILR_ENABLE_DJANGO_ADMIN = False
SPOILR_ENABLE_DJANGO_ADMIN_DOCS = False

# TODO: replace email with hunt site
SPOILR_HQ_DEFAULT_FROM_EMAIL = "info@mitmh2024.com"
SPOILR_RECEIVE_INCOMING_EMAILS = False

LOGIN_URL = "/login"

# Answer that can be used by admin teams to automatically use the correct answer
# when submitting an answer to a puzzle.
SPOILR_ADMIN_MAGIC_ANSWER = "ANSWER"

# Application definition

INSTALLED_APPS = list(
    filter(
        None,
        [
            not IS_PYODIDE and "whitenoise.runserver_nostatic",
            not IS_PYODIDE and "channels",
            "django.contrib.admin",
            "django.contrib.auth",
            "django.contrib.contenttypes",
            "django.contrib.humanize",
            "django.contrib.messages",
            "django.contrib.sessions",
            "django.contrib.staticfiles",
            "django_extensions",
            "django_bleach",
            not IS_PYODIDE and "django_prometheus",
            not IS_PYODIDE and "impersonate",
            "django_celery_results",
            "phonenumber_field",
            "puzzles",
            "pwreset",
            "spoilr.contact",
            "spoilr.core",
            "spoilr.email",
            "spoilr.events",
            "spoilr.hints",
            "spoilr.hq",
            "spoilr.interaction",
            "spoilr.logs",
            "spoilr.progress",
            "spoilr.registration",
            "spoilr.updates",
        ],
    )
)
# silk should be disabled except when profiling in dev
SILK_ENABLED = False

MIDDLEWARE = list(
    filter(
        None,
        [
            not IS_PYODIDE
            and "django_prometheus.middleware.PrometheusBeforeMiddleware",
            "django.middleware.security.SecurityMiddleware",
            not IS_PYODIDE and "whitenoise.middleware.WhiteNoiseMiddleware",
            "django.contrib.sessions.middleware.SessionMiddleware",
            "django.middleware.common.CommonMiddleware",
            #    "django.middleware.csrf.CsrfViewMiddleware",
            "django.contrib.auth.middleware.AuthenticationMiddleware",
            (IS_POSTHUNT or IS_PYODIDE) and "tph.utils.DefaultUserMiddleware",
            "django.contrib.messages.middleware.MessageMiddleware",
            not IS_PYODIDE and "impersonate.middleware.ImpersonateMiddleware",
            "puzzles.messaging.log_request_middleware",
            "puzzles.context.context_middleware",
            not IS_PYODIDE and "django_prometheus.middleware.PrometheusAfterMiddleware",
        ],
    )
)


CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": [
            f"redis://{host}:{REDIS_PORT}/{REDIS_DATABASE_ENUM.DJANGO_CACHE}"
            for host in REDIS_HOSTS
        ],
    },
    SPOILR_CACHE_NAME: {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": [
            f"redis://{host}:{REDIS_PORT}/{REDIS_DATABASE_ENUM.SPOILR_CACHE}"
            for host in REDIS_HOSTS
        ],
    },
}
SESSION_ENGINE = "django.contrib.sessions.backends.cached_db"
SESSION_CACHE_ALIAS = "default"
SESSION_COOKIE_SECURE = True

ROOT_URLCONF = "tph.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "puzzles.context.context_processor",
            ],
        },
    },
]

ASGI_APPLICATION = "tph.asgi.application"


# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": POSTGRES_ENGINE,
        "NAME": POSTGRES_DB,
        "USER": POSTGRES_USER,
        "PASSWORD": POSTGRES_PASSWORD,
        "HOST": POSTGRES_HOST,
        "PORT": "5432",
    }
}

# Required to use pgbouncer. Disables some of Django's functionality, so make
# sure it's on for dev too to avoid commiting changes that wouldn't work on staging.
DATABASES["default"]["DISABLE_SERVER_SIDE_CURSORS"] = True

# Password validation
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators

AUTH_USER_MODEL = "spoilr_core.User"

AUTH_PASSWORD_VALIDATORS: list[dict] = []


# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = "en-us"
TIME_ZONE = "America/New_York"
USE_I18N = False
USE_L10N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

CDN_HOST = os.environ.get("CDN_REGISTRATION_HOST") or os.environ.get("CDN_HUNT_HOST")
CDN_ORIGIN = (
    ("" if CDN_HOST.startswith("/") else "https://") + CDN_HOST if CDN_HOST else ""
)
STATIC_URL = CDN_ORIGIN + "/static/"
STATIC_ROOT = "/django_static"

WHITENOISE_KEEP_ONLY_HASHED_FILES = True

# Art assets live in /srv/media
# Database only stores filenames, files are saved here.
ASSET_MAPPING = os.path.join(SRV_DIR, "media_mapping.yaml")
ASSET_URL = CDN_ORIGIN + "/media/"

# Media files uploaded by user.
# Currently unused due to GCS backend
MEDIA_ROOT = os.path.join(SRV_DIR, "uploads/")
MEDIA_URL = CDN_ORIGIN + "/uploads/"

STORAGES: dict[str, Any] = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    # Store compressed static files with whitenoise.
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

DATA_ROOT = os.path.join(SRV_DIR, "data/")
os.environ["SENTENCE_TRANSFORMERS_HOME"] = DATA_ROOT  # This is puzzle specific

# Email SMTP information

EMAIL_USE_TLS = True
EMAIL_USER_DOMAIN = "mitmh2024.com"

EMAIL_HOST = "smtp.mandrillapp.com"
EMAIL_PORT = 587
EMAIL_HOST_USER = "mitmh2024@gmail.com"
EMAIL_HOST_PASSWORD = os.environ.get("SMTP_PASSWORD", "")

EMAIL_IMAP_HOST = "imap.gmail.com"
EMAIL_IMAP_PORT = 993
EMAIL_IMAP_USER = "mitmh2024@gmail.com"
EMAIL_IMAP_PASSWORD = os.environ.get("IMAP_PASSWORD", "")

EMAIL_BOUNCES_LOCALNAME = "bounces"
EMAIL_RESUBSCRIBE_LOCALNAME = "resubscribe"
EMAIL_UNSUBSCRIBE_LOCALNAME = "unsubscribe"
# whether to put bounce email on the envelope (Return-Path header)
EMAIL_SENDFROM_BOUNCES_ADDRESS = True
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_SUBJECT_PREFIX = "[Mystery Hunt] "
EMAIL_BATCH_DELAY = int(os.environ.get("EMAIL_BATCH_DELAY", "900"))  # ms
# add other addresses that we should consider to be from us
EXTERNAL_EMAIL_ADDRESSES = {
    "mitmh2024@gmail.com",
}
ALTERNATE_EMAIL_DOMAINS: list[str] = []


# admin emails for error logging
SERVER_EMAIL = "admin@FIXME.com"
ADMINS: list[tuple[str, str]] = []

# email addresses to whitelist in testing
DEV_EMAIL_WHITELIST: set[str] = set()

# Bleach settings for escaping email HTML
BLEACH_ALLOWED_TAGS = [
    "p",
    "br",
    "b",
    "i",
    "u",
    "ul",
    "ol",
    "li",
    "em",
    "strong",
    "a",
    "div",
    "span",
    "blockquote",
]

LOGGING: dict[str, Any] = {
    "version": 1,
    "disable_existing_loggers": False,
}
if os.path.isdir(LOG_BASE_DIR):
    LOGGING.update(
        {
            "formatters": {
                "django": {
                    "format": "%(asctime)s [%(levelname)s] %(module)s\n%(message)s"
                },
                "puzzles": {"format": "%(asctime)s [%(levelname)s] %(message)s"},
                "uvicorn": {
                    "format": (
                        "%(levelname)s:\t %(asctime)s %(processName)s [%(process)d]"
                        " %(message)s"
                    ),
                },
            },
            "handlers": {
                "django": {
                    "level": "DEBUG",
                    "class": "logging.FileHandler",
                    "filename": LOG_BASE_DIR / "django.log",
                    "formatter": "django",
                },
                "django-info": {
                    "level": "INFO",
                    "class": "logging.FileHandler",
                    "filename": LOG_BASE_DIR / "django.info.log",
                    "formatter": "django",
                },
                "django-errors": {
                    "level": "ERROR",
                    "class": "logging.FileHandler",
                    "filename": LOG_BASE_DIR / "django.error.log",
                    "formatter": "django",
                },
                "puzzle": {
                    "level": "DEBUG",
                    "class": "logging.FileHandler",
                    "filename": LOG_BASE_DIR / "puzzle.log",
                    "formatter": "puzzles",
                },
                "puzzle-errors": {
                    "level": "ERROR",
                    "class": "logging.FileHandler",
                    "filename": LOG_BASE_DIR / "puzzle.error.log",
                    "formatter": "puzzles",
                },
                "request": {
                    "level": "DEBUG",
                    "class": "logging.FileHandler",
                    "filename": LOG_BASE_DIR / "request.log",
                    "formatter": "puzzles",
                },
                "request-errors": {
                    "level": "ERROR",
                    "class": "logging.FileHandler",
                    "filename": LOG_BASE_DIR / "request.error.log",
                    "formatter": "puzzles",
                },
                "uvicorn-console": {
                    "level": "INFO",
                    # supervisord picks up stdout
                    "class": "logging.StreamHandler",
                    "formatter": "uvicorn",
                },
                # TODO: Implement a better way to log errors that will not block
                # our mailserver if a huge number of errors come through:
                # ex: https://stackoverflow.com/questions/2052284/how-to-throttle-django-error-emails
                # or a different logging method
                # "mail_admins": {
                #     "level": "ERROR",
                #     "class": "django.utils.log.AdminEmailHandler",
                #     "include_html": True,
                # },
            },
            "loggers": {
                "django": {
                    "handlers": [
                        "django",
                        "django-info",
                        # "mail_admins",
                        "django-errors",
                    ],
                    "level": "DEBUG",
                    "propagate": True,
                },
                "puzzles.puzzle": {
                    "handlers": ["puzzle", "puzzle-errors"],
                    "level": "DEBUG",
                    "propagate": False,
                },
                "puzzles.request": {
                    "handlers": ["request", "request-errors"],
                    "level": "DEBUG",
                    "propagate": False,
                },
                "uvicorn": {
                    "handlers": ["uvicorn-console"],
                    "level": "INFO",
                    "propagate": False,
                },
            },
        }
    )

# Websocket/channels config
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.pubsub.RedisPubSubChannelLayer",
        "CONFIG": {
            "hosts": [
                {
                    "address": f"redis://{host}:{REDIS_PORT}",
                    "db": REDIS_DATABASE_ENUM.CHANNELS.value,
                }
                for host in REDIS_HOSTS
            ],
            "capacity": 500,  # 500 messages in queue
            "expiry": 10,  # messages expire in 10s
        },
    }
}

LOGIN_REDIRECT_URL = "/"
LOGOUT_REDIRECT_URL = "/"

# Discord alerts
SEND_DISCORD_ALERTS = False

# Celery settings
CELERY_BROKER_URL = [
    f"redis://{host}:{REDIS_PORT}/{REDIS_DATABASE_ENUM.CELERY}" for host in REDIS_HOSTS
]
# No backend needed because we don't need to fetch results
# CELERY_RESULT_BACKEND = f"redis://{REDIS_HOST}:{REDIS_PORT}/{REDIS_DATABASE_ENUM.CELERY}"
CELERY_BROKER_TRANSPORT_OPTIONS = {
    "visibility_timeout": 5 * 60,  # 5 minutes
}
CELERY_TASK_TIME_LIMIT = 10 * 60  # 10 minutes
CELERY_TASK_TRACK_STARTED = True
CELERY_TASK_SERIALIZER = "json"
CELERY_RESULT_SERIALIZER = "json"
CELERY_ACCEPT_CONTENT = ["json"]
CELERY_TIMEZONE = TIME_ZONE
CELERY_ENABLE_UTC = True
CELERY_BEAT_SCHEDULE = {
    "spoilr-tick": {
        "task": "spoilr-tick",
        "schedule": 30.0,
    }
}
CELERY_RESULT_BACKEND = "django-db"
CELERY_RESULT_EXTENDED = True
CELERY_CACHE_BACKEND = "default"

# monitoring configs
# sum metrics correctly when spawning multiple worker processes
PROMETHEUS_MULTIPROC_MODE = True  # default is False
PROMETHEUS_MULTIPROC_DIR = SRV_DIR
# Don't export migration metrics through Prometheus, as this
# requires a db to be set up for things like collectstatic
PROMETHEUS_EXPORT_MIGRATIONS = False

# allow i-framing
SESSION_COOKIE_SAMESITE = "None"
SESSION_COOKIE_SECURE = True

IS_TEST = True
HUNT_PUBLIC_TEAM_NAME = "public-access"
