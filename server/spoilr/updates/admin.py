from django import forms
from django.contrib import admin
from django.shortcuts import redirect
from django.urls import reverse

from spoilr.core.models import Puzzle

from .models import HQUpdate


class HQUpdateForm(forms.ModelForm):
    def __init__(self, *args, initial=None, instance=None, **kwargs):
        # Prepopulate with a template.
        initial = {
            "subject": (
                instance.subject if instance else "Erratum issued for puzzle <PUZZLE>"
            ),
            **(initial or {}),
        }
        super().__init__(*args, initial=initial, instance=instance, **kwargs)  # type: ignore
        self.fields["published"].help_text = (
            "It is strongly suggested that you leave this unchecked when creating an"
            " errata/update. No action will be taken until the update is published in"
            " spoilr."
        )
        self.fields["body"].help_text = (
            "If this update has a puzzle attached, just type the puzzle erratum here."
            " The email will be prefixed with 'An erratum was issued for the puzzle"
            " {PUZZLE}'"
        )
        self.fields["puzzle"].help_text = (
            "Set this field if this update is an erratum for a particular puzzle. Leave"
            " it blank for a generic HQ Update (non-errata)"
        )
        self.fields["team"].help_text = (
            "Set this field if this update should only be sent to a single team. Leave"
            " it blank to send to all teams who have unlocked the puzzle."
        )
        self.fields["send_email"].help_text = (
            "Check this box if you would like to send an email; otherwise it will"
            " silently show up on the puzzle page."
        )

    class Meta:
        model = HQUpdate
        exclude = ()


class HQUpdateAdmin(admin.ModelAdmin):
    def render_change_form(self, request, context, *args, **kwargs):
        context["adminform"].form.fields["puzzle"].queryset = Puzzle.objects.all()
        return super().render_change_form(request, context, *args, **kwargs)

    def response_add(self, request, obj, post_url_continue=None):
        return redirect(reverse("spoilr.updates:dashboard"))

    form = HQUpdateForm
    readonly_fields = (
        # "published",
        "creation_time",
        "modification_time",
        "publish_time",
    )
    list_display = ("__str__", "team", "puzzle", "send_email")
    search_fields = ("puzzle",)
    autocomplete_fields = ("puzzle", "team")


admin.site.register(HQUpdate, HQUpdateAdmin)
