# Generated by Django 3.1.6 on 2023-12-01 23:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0017_whitelistedusers"),
    ]

    operations = [
        migrations.RenameField(
            model_name="hydrogenfleets",
            old_name="steet_address",
            new_name="street_address",
        ),
    ]
