from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.db.models.fields.files import ImageFieldFile

from puzzles.models import Team
from spoilr.core.models import User, UserTeamRole
from spoilr.registration.models import IndividualRegistrationInfo, TeamRegistrationInfo


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = get_user_model()
        fields = UserCreationForm.Meta.fields


class TeamRegWithConstellation(forms.ModelForm):
    class Meta:
        model = TeamRegistrationInfo
        exclude = ["team"]

    unsupported_media_type_error_message = "Please upload a valid image."
    constellation_pic = forms.ImageField(
        label="constellation_pic",
        error_messages={
            "invalid": unsupported_media_type_error_message,
            "invalid_image": unsupported_media_type_error_message,
            "invalid_extension": unsupported_media_type_error_message,
        },
    )

    def clean_constellation_pic(self):
        MAX_DIM = 2160
        constellation_pic = self.cleaned_data.get("constellation_pic", None)

        # File not changed, don't process
        if isinstance(constellation_pic, ImageFieldFile):
            return constellation_pic

        if not constellation_pic:
            # Not supposed to hit this point, but just in case let's add this.
            msg = "Couldn't read uploaded team photo."
            raise forms.ValidationError(msg)

        width, height = constellation_pic.image.size
        if width > MAX_DIM or height > MAX_DIM:
            msg = f"Max dimensions are {MAX_DIM}x{MAX_DIM}. Image is {width}x{height}."
            raise forms.ValidationError(msg)

        return constellation_pic


class TeamCreationForm(TeamRegWithConstellation):
    # Set the team role to a shared user; assign the team to the reg info.
    def save(self, commit: bool = True, user: User | None = None) -> Team:
        assert user is not None
        team = Team(username=user.username, name=self.cleaned_data["team_name"])
        team.save()

        user.team_role = UserTeamRole.SHARED_ACCOUNT
        user.team = team
        user.save()

        team_registration_info = super().save(commit=False)
        team_registration_info.team = team
        if commit:
            team_registration_info.save()

        return team


class TeamEditForm(TeamRegWithConstellation):
    pass


class IndividualCreationForm(forms.ModelForm):
    class Meta:
        model = IndividualRegistrationInfo
        exclude = ["user"]

    # Associate the user with the individual registration info.
    def save(self, user):
        individual_registration_info = super().save(commit=False)
        individual_registration_info.user = user
        individual_registration_info.save()

        return individual_registration_info


class IndividualEditForm(forms.ModelForm):
    class Meta:
        model = IndividualRegistrationInfo
        exclude = ["user"]


class RequestHintForm(forms.Form):
    text_content = forms.CharField(
        label=(
            "Describe everything you've tried on this puzzle. We will "
            "provide a hint to help you move forward. The more detail you "
            "provide, the less likely it is that we'll tell you "
            "something you already know."
        ),
        widget=forms.Textarea,
    )
    thread_id = forms.IntegerField(
        widget=forms.HiddenInput,
        required=False,
    )

    def __init__(self, team, *args, **kwargs):
        super().__init__(*args, **kwargs)
        notif_choices = [
            (team.team_email, "Team Captain"),
            ("all", "Everyone"),
            ("none", "No one"),
        ]
        self.fields["notify_emails"] = forms.ChoiceField(
            label="When the hint is answered, send an email to:", choices=notif_choices
        )


class UnsubscribeEmailForm(forms.Form):
    email = forms.EmailField(required=True)
