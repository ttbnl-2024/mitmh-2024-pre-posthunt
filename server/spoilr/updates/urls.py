from django.urls import path

from . import views

app_name = "spoilr.updates"
urlpatterns = [
    path("", views.updates_view, name="dashboard"),
]
