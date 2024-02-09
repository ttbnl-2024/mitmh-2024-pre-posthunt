import urllib.parse
from collections.abc import Sequence
from typing import Any

from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect
from django.urls import reverse


def redirect_with_message(
    request: HttpRequest,
    default_path: str,
    message: str | None = None,
    default_path_args: Sequence[Any] | None = None,
    anchor: str | None = None,
    **query_params: Any,
) -> HttpResponse:
    url = request.META.get("HTTP_REFERER") or reverse(
        default_path, args=default_path_args
    )
    if anchor:
        url += f"#{anchor}"

    params = {**query_params}
    if message:
        params["message"] = message
    if params:
        parsed = urllib.parse.urlparse(url)
        url_query = urllib.parse.parse_qs(parsed.query)
        url_query.update(params)
        updated = parsed._replace(query=urllib.parse.urlencode(url_query, doseq=True))
        return redirect(urllib.parse.urlunparse(updated))
    return redirect(url)
