# Generated by Django 4.0.7 on 2023-02-19 21:38

import django.db.models.deletion
import phonenumber_field.modelfields
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("spoilr_core", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="TeamRegistrationInfo",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("locked", models.BooleanField(default=False)),
                ("team_name", models.CharField(max_length=200, unique=True, verbose_name="Team Name")),
                ("contact_name", models.CharField(max_length=200, verbose_name="Primary Contact Name")),
                ("contact_pronouns", models.CharField(blank=True, default="", max_length=50, verbose_name="Primary Contact Pronouns")),
                ("contact_email", models.EmailField(max_length=254, verbose_name="Primary Contact E-mail")),
                ("contact_phone", phonenumber_field.modelfields.PhoneNumberField(max_length=128, region="US", verbose_name="Primary Contact Phone Number")),
                ("bg_bio", models.CharField(blank=True, default="", max_length=280, verbose_name="Team Bio")),
                ("bg_emails", models.EmailField(blank=True, default="", max_length=500, verbose_name="Team-Wide Email List")),
                ("bg_playstyle", models.CharField(blank=True, choices=[("fun", "We`re playing for fun!"), ("puzzles", "We`re pretty into puzzles but we`re not so focused on winning."), ("win", "We`re serious about solving. We really want to see the entire Hunt and maybe find the coin.")], default="", max_length=400, verbose_name="What describes your team's style of playing")),
                ("bg_win", models.CharField(blank=True, choices=[("yes", "Yes"), ("no", "No"), ("unsure", "Unsure")], default="", max_length=20, verbose_name="Is your team planning on winning the hunt?")),
                ("bg_started", models.CharField(blank=True, default="", max_length=200, verbose_name="When was your team established?")),
                ("bg_location", models.CharField(blank=True, default="", max_length=200, verbose_name="Where are your team members located?")),
                ("bg_comm", models.CharField(blank=True, default="", max_length=200, verbose_name="What communication application will you be using to communicate with your team members while solving the MIT Mystery Hunt this year?")),
                ("bg_on_campus", models.CharField(blank=True, choices=[("no", "No, we will be hunting remotely only"), ("yes", "Yes, we will have team members on campus")], default="", max_length=200, verbose_name="Does your team plan to have an on-campus presence this year?")),
                ("tb_room", models.CharField(blank=True, choices=[("no", "No, we already have a team base at or near MIT"), ("no_remote", "No, we will be hunting remotely only"), ("maybe", "We would like a room, but we have a backup plan in case Hunt is unable to secure a room"), ("yes", "Yes, we absolutely need a room")], default="", max_length=400, verbose_name="Does your team need space at MIT for a team base during the Hunt?")),
                ("tb_room_specs", models.CharField(blank=True, default="", max_length=500, verbose_name="If you are requesting a room, what specifications would you like for your team base? (e.g., specific rooms or room attributes)")),
                ("tb_location", models.CharField(blank=True, default="", max_length=500, verbose_name="If you are not requesting a classroom, where is your team base? We'll be visiting your team during the weekend. Do we need any special instructions to access your HQ? If remote, please provide instructions for how we can contact you virtually (e.g., Zoom link, Discord server, Google Meet, etc.)")),
                ("tm_total", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many people are on your team in total?")),
                ("tm_last_year_total", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many people were on your team last year?")),
                ("tm_undergrads", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many MIT undergraduates?")),
                ("tm_grads", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many MIT graduate students?")),
                ("tm_alumni", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many MIT alumni?")),
                ("tm_faculty", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many members from MIT faculty and staff?")),
                ("tm_other", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many people are not affiliated with MIT?")),
                ("tm_minors", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many minors (under 18 during Hunt)?")),
                ("tm_onsite", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many people will your team have on campus")),
                ("tm_offsite", models.IntegerField(blank=True, default=0, null=True, verbose_name="How many remote solvers")),
                ("other_unattached", models.CharField(blank=True, choices=[("yes", "Yes"), ("no", "No")], default="", max_length=20, verbose_name="Are you willing to enlist unattached solvers?")),
                ("other_workshop", models.CharField(blank=True, choices=[("yes", "Yes"), ("no", "No")], default="", max_length=20, verbose_name="Would your team like to participate in the How to Hunt workshop prior to the event?")),
                ("other_puzzle_club", models.CharField(blank=True, choices=[("yes", "Yes"), ("no", "No"), ("already", "We already have someone from Puzzle Club on the team")], default="", max_length=20, verbose_name="Do you have members from the MIT Puzzle Club on your team?")),
                ("other_how", models.CharField(blank=True, choices=[("past", "We`ve played in the past"), ("group", "Through a puzzle interest group (e.g., National Puzzlers` League)"), ("word-of-mouth", "Word of mouth from past participants or organizers"), ("social", "Through e-mail or social media"), ("puzzle-club", "Through the MIT Puzzle Club"), ("other", "Other")], default="", max_length=20, verbose_name="How did you hear about the MIT Mystery Hunt?")),
                ("other", models.CharField(blank=True, default="", max_length=1500, verbose_name="Anything else you`d like to share with us? Comments, questions, puns?")),
                ("create_time", models.DateTimeField(auto_now_add=True)),
                ("update_time", models.DateTimeField(auto_now=True)),
                ("team", models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to="spoilr_core.team")),
            ],
        ),
        migrations.CreateModel(
            name="IndividualRegistrationInfo",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("contact_first_name", models.CharField(max_length=200, verbose_name="First name or nickname")),
                ("contact_last_name", models.CharField(max_length=200, verbose_name="Last name")),
                ("contact_pronouns", models.CharField(blank=True, default="", max_length=50, verbose_name="Pronouns")),
                ("contact_email", models.EmailField(max_length=254, verbose_name="E-mail address")),
                ("bg_mh_history", models.CharField(blank=True, default="", max_length=500, verbose_name="Have you participated in the MIT Mystery Hunt before? If so, tell us about your Hunt history!")),
                ("bg_other_history", models.CharField(blank=True, default="", max_length=500, verbose_name="Have you played in other puzzle-type events before? If so, feel free to give a short summary.")),
                ("bg_playstyle", models.CharField(blank=True, choices=[("fun", "I'm just playing for fun and would like to make some new friends."), ("puzzles", "I'm pretty into puzzles, but not so focused on winning."), ("win", "I'm a puzzle machine, and I'd love to be on a team that wants to find the coin. I really want to see the whole hunt.")], default="", max_length=400, verbose_name="What describes your style of playing?")),
                ("bg_other_prefs", models.CharField(blank=True, default="", max_length=500, verbose_name="Do you have any other preferences about what team you want to join?")),
                ("bg_under_18", models.CharField(blank=True, choices=[("yes", "Yes"), ("no", "No")], default="", max_length=20, verbose_name="Are you under 18?")),
                ("bg_mit_connection", models.CharField(blank=True, default="", max_length=500, verbose_name="Are you connected to the MIT community? If so, how?")),
                ("bg_on_campus", models.CharField(blank=True, choices=[("no", "No, I'll participate remotely"), ("maybe", "Maybe"), ("yes", "Yes, I'll be on campus")], default="", max_length=200, verbose_name="Do you plan to participate on campus?")),
                ("other", models.CharField(blank=True, default="", max_length=1500, verbose_name="Anything else you`d like to share with us? Comments, questions, puns?")),
                ("user", models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]