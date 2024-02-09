# Generated by Django 4.2.6 on 2023-10-22 18:26

from django.db import migrations, models
import spoilr.registration.models


class Migration(migrations.Migration):
    dependencies = [
        (
            "spoilr_registration",
            "0002_alter_teamregistrationinfo_bg_on_campus_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="teamregistrationinfo",
            name="constellation_pic",
            field=models.ImageField(
                max_length=300,
                null=True,
                upload_to=spoilr.registration.models.TeamRegistrationInfo.constellation_filename,
            ),
        ),
        migrations.AlterField(
            model_name="individualregistrationinfo",
            name="contact_last_name",
            field=models.CharField(
                blank=True, default="", max_length=200, verbose_name="Last name"
            ),
        ),
    ]
