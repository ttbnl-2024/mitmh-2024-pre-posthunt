from django.urls import path

from . import views

app_name = "spoilr.contact"
urlpatterns = [
    path("", views.dashboard_view, name="dashboard"),
    path("respond/", views.respond_view, name="respond"),
]
