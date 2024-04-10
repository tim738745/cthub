# Generated by Django 3.1.6 on 2021-12-14 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0009_publiccharging"),
    ]

    operations = [
        migrations.RunSQL(
            "alter table public.charger_rebates alter column number_of_fast_charging_stations type varchar(100)"
        ),
        migrations.RunSQL(
            "alter table public.charger_rebates alter column expected_in_service_date type varchar(200)"
        ),
        migrations.RunSQL(
            "alter table public.charger_rebates alter column rebate_paid type varchar(200)"
        ),
    ]
