import functools
import hashlib
from collections.abc import Callable
from typing import Any, TypeVar

from django.conf import settings
from django.core.cache import caches

SERVER_CACHE_TIMEOUT_S = 60 * 60

cache = caches[settings.SPOILR_CACHE_NAME]


T = TypeVar("T")
TFunc = Callable[..., T]


def memoized_cache(
    bucket: Any, timeout: int | None = None
) -> Callable[[TFunc[T]], TFunc[T]]:
    def decorator(view_func: TFunc[T]) -> TFunc[T]:
        @functools.wraps(view_func)
        def wrapped(*args: Any) -> T:
            key = f"memoized:{bucket}:{view_func.__name__}:{_hash_args(*args)}"
            return _memoized_cache(view_func, key, *args, timeout=timeout)

        return wrapped

    return decorator


def clear_memoized_cache(bucket: Any) -> Callable[[TFunc[T]], TFunc[T]]:
    def decorator(view_func: TFunc[T]) -> TFunc[T]:
        @functools.wraps(view_func)
        def wrapped(*args: Any) -> T:
            delete_memoized_cache_entry(view_func, bucket, *args)
            return view_func(*args)

        return wrapped

    return decorator


def _memoized_cache(
    result_factory: TFunc[T],
    key: str,
    *args: Any,
    timeout: int | None = None,
    **kwargs: Any,
) -> T:
    if timeout is None:
        timeout = SERVER_CACHE_TIMEOUT_S
    result: T = cache.get(key)
    if not result:
        result = result_factory(*args, **kwargs)
        cache.set(key, result, timeout=timeout)
    return result


def delete_memoized_cache_entry(func: TFunc[T], bucket: Any, *args: Any) -> None:
    key = f"memoized:{bucket}:{func.__name__}:{_hash_args(*args)}"
    cache.delete(key)


def nuke_cache() -> None:
    cache.clear()


def _hash_args(*args: Any) -> str:
    hasher = hashlib.sha256()
    for arg in args:
        str_arg = arg if isinstance(arg, str) else str(arg)
        hasher.update(str_arg.encode("utf-8"))
    return hasher.hexdigest()
