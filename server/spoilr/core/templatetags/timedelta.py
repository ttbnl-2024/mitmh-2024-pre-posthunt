import datetime

from django import template

register = template.Library()


def pluralize(num: int, string: str) -> str:
    return "{} {}{}".format(num, string, "" if num == 1 else "s")


@register.filter
def natural_timedelta(timedelta: datetime.timedelta) -> str:
    """
    Transforms the timedelta to a human-readable representation.

    Note: Only works with positive timedeltas.
    """
    seconds = timedelta.total_seconds()
    assert seconds >= 0

    if seconds < 10:
        return "%.2f seconds" % seconds

    seconds = round(seconds, 1)

    if seconds < 60:
        return "%.1f seconds" % seconds

    labels = ["day", "hour", "minute", "second"]
    counts = [24 * 60 * 60, 60 * 60, 60, 1]
    for i, (count, label) in enumerate(zip(counts, labels, strict=True)):
        if seconds >= count:
            num = int(seconds // count)
            output = pluralize(num, label)

            if num < 10 and i < len(labels):
                num_next = int((seconds - num * count) // counts[i + 1])
                if num_next > 0:
                    output += ", " + pluralize(num_next, labels[i + 1])

            return output

    return "error"


@register.simple_tag
def format_duration(secs):
    if secs is None:
        return ""
    secs = max(float(secs), 0)
    hours = int(secs / (60 * 60))
    secs -= hours * 60 * 60
    mins = int(secs / 60)
    secs -= mins * 60
    if hours > 0:
        return f"{hours}h{mins}m"
    elif mins > 0:
        return f"{mins}m{secs:.0f}s"
    elif secs > 0:
        return f"{secs:.1f}s"
    else:
        return "0s"


@register.simple_tag
def duration_between(before, after):
    return format_duration((after - before).total_seconds())
