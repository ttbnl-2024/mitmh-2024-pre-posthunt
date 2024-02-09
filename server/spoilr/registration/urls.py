from django.urls import path

from . import views

app_name = "spoilr.registration"
urlpatterns = [
    path(
        "individual_reg_csv",
        views.individual_registration_csv,
        name="individual_reg_csv",
    ),
    path(
        "team_reg_csv",
        views.team_registration_csv,
        name="team_reg_csv",
    ),
]
