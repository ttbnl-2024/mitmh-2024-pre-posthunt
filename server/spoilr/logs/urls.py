from django.urls import path

from . import views

app_name = "spoilr.logs"
urlpatterns = [
    path("", views.system_log_view, name="system"),
    path("csv/", views.system_log_csv_export, name="system_csv"),
    path("hints/", views.hint_log_view, name="hints_default_limit"),
    path("hints/<int:limit>", views.hint_log_view, name="hints"),
]
