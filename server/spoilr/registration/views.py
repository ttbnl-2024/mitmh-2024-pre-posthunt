import csv

from django.http import HttpResponse
from django.utils import timezone

from spoilr.hq.util.decorators import hq
from spoilr.registration.models import IndividualRegistrationInfo, TeamRegistrationInfo


@hq()
def individual_registration_csv(_) -> HttpResponse:
    resp = HttpResponse(content_type="text/csv")
    time_str = timezone.now().strftime("%Y-%m-%d--%H-%M")
    resp["Content-Disposition"] = f"attachment;filename=individual_reg-{time_str}.csv"
    writer = csv.writer(resp)
    field_names = [f.name for f in IndividualRegistrationInfo._meta.get_fields()]
    writer.writerow(field_names)

    for obj in IndividualRegistrationInfo.objects.all():
        data = [getattr(obj, field) for field in field_names]
        writer.writerow(data)
    return resp


@hq()
def team_registration_csv(_) -> HttpResponse:
    resp = HttpResponse(content_type="text/csv")
    time_str = timezone.now().strftime("%Y-%m-%d--%H-%M")
    resp["Content-Disposition"] = f"attachment;filename=team_reg-{time_str}.csv"
    writer = csv.writer(resp)
    field_names = [f.name for f in TeamRegistrationInfo._meta.get_fields()]
    writer.writerow(field_names)

    pic_idx = field_names.index("constellation_pic")

    for obj in TeamRegistrationInfo.objects.all():
        data = [getattr(obj, field) for field in field_names]

        # Override constellation to use URL instead of filename
        data[pic_idx] = data[pic_idx].url  # type: ignore

        writer.writerow(data)
    return resp
