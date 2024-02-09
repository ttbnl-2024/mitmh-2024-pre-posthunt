import functools
import zipfile
from importlib.abc import Traversable
from importlib.resources import files
from typing import TYPE_CHECKING, Any, Union
from urllib.parse import urlparse

from django.conf import settings
from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.http import is_same_domain

from spoilr.utils import json
from tph.constants import INDEXEDDB_PREFIX

POSTHUNT_USERNAME = "public"

if TYPE_CHECKING:
    from django.test import Client

    from spoilr.core.models import User as UserType


def get_posthunt_user() -> Union[None, "UserType"]:
    return get_user_model().objects.filter(username=POSTHUNT_USERNAME).first()


def url_has_allowed_host_and_scheme(url: str | None) -> bool:
    """
    Check if url uses https and has a match in ALLOWED_HOSTS.
    """
    parsed_url = urlparse(url)
    # check scheme
    if parsed_url.scheme and parsed_url.scheme != "https":
        return False
    # check host
    if not parsed_url.netloc:
        return True
    for pattern in settings.ALLOWED_HOSTS:
        if pattern == "*":
            return True
        if is_same_domain(str(parsed_url.netloc), pattern):
            return True
    return False


def get_site(request: HttpRequest, assert_set: bool = False) -> str | None:
    """Get site domain by reading headers."""
    site = None
    if settings.IS_POSTHUNT:
        # in posthunt, use the path instead of the header set by Caddy
        if request.path.startswith(f"/2024/{settings.MAIN_HUNT_HOST}"):
            site = "hunt"
        elif request.path.startswith(f"/2024/{settings.REGISTRATION_HOST}"):
            site = "registration"
    else:
        site = request.META.get("HTTP_X_TPH_SITE")
    assert site in (
        None,
        "hunt",
        "registration",
    )
    if assert_set:
        assert site is not None
    return site


def load_file(path: str, base_module: str = "tph") -> Traversable:
    current_dir = files(base_module)
    return current_dir.joinpath(path)


def DefaultUserMiddleware(get_response):
    """
    Replace request.user with the default user unless the current user is admin.
    """

    def middleware(request):
        if not request.user.is_staff:
            user = get_posthunt_user()
            if user:
                request.user = user
        return get_response(request)

    return middleware


@functools.lru_cache(maxsize=1)
def get_client() -> "Client":
    from django.test import Client

    return Client()


if not settings.IS_PYODIDE:
    from celery.utils.log import get_task_logger
    from django.contrib.staticfiles.storage import staticfiles_storage

else:
    import logging

    import js
    import pyodide

    get_task_logger = logging.getLogger

    @functools.lru_cache(maxsize=1)
    def staticfiles_json() -> dict[Any, Any]:
        with load_file("staticfiles_mapping.json").open() as f:
            return json.load(f)  # type: ignore

    class KnownStaticfiles:
        @staticmethod
        def url(filename) -> str | None:
            return staticfiles_json().get(filename)

    staticfiles_storage = KnownStaticfiles()  # type: ignore

    from django.db import models

    @pyodide.ffi.to_js  # type: ignore
    def js_noop(*args, **kwargs) -> None:
        pass

    def sync_indexeddb(populate: bool = False) -> None:
        """
        Emscripten to IndexedDB if populate=False and IndexedDB to Emscripten
        if populate=True.
        """
        js.pyodide.FS.syncfs(populate, js_noop)

    def reset_db(old_crc: str | None = None) -> None:
        """Reset the sqlite3 database if old_crc does not match."""
        dbcrc_path = f"/{INDEXEDDB_PREFIX}indexeddb/dbcrc.txt"
        with zipfile.ZipFile(f"/{INDEXEDDB_PREFIX}server.zip") as zipf:
            dbinfo = zipf.getinfo("db.sqlite3")
            crc = f"{dbinfo.CRC:08x}"
            if crc != old_crc:
                zipf.extract(dbinfo, f"/{INDEXEDDB_PREFIX}indexeddb")
                with open(dbcrc_path, "w") as f:
                    f.write(crc)
        sync_indexeddb()

    def get_mock_response(
        path, method="GET", body=None, headers=None, cookie=None, **kwargs
    ):
        """Get mock response, for pyodide."""
        client = get_client()
        request_kwargs = {}
        if cookie is not None:
            request_kwargs["HTTP_COOKIE"] = cookie
        if method == "GET":
            response = client.get(path, **request_kwargs)
        else:
            assert method == "POST"
            content_type = headers and headers.get("Content-Type")
            post_kwargs = {}
            if content_type is None and isinstance(body, str):
                # assume encoded as json instead of form data
                content_type = "application/json"
            if content_type is not None:
                post_kwargs["content_type"] = content_type
            if body is not None:
                post_kwargs["data"] = body
            response = client.post(path, **post_kwargs, **request_kwargs)
        result = {
            "status": response.status_code,
            "content": response.content,
        }
        sync_indexeddb()
        return result