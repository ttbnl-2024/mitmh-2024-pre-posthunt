# Generated by Django 4.2.1 on 2023-07-03 04:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("spoilr_core", "0005_delete_hqupdate"),
        ("spoilr_interaction", "0001_initial"),
        ("spoilr_core", "0006_rename_interactionaccess_teaminteraction")
    ]

    operations = [
        migrations.CreateModel(
            name="TeamInteractionTask",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("replied", models.BooleanField(default=False)),
                (
                    "team_interaction",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="spoilr_core.teaminteraction",
                    ),
                ),
            ],
        ),
        migrations.DeleteModel(
            name="InteractionAccessTask",
        ),
    ]