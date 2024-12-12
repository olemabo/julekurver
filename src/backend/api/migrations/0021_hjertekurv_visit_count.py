# Generated by Django 3.1.4 on 2024-12-04 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_auto_20241116_1537'),
    ]

    operations = [
        migrations.AddField(
            model_name='hjertekurv',
            name='visit_count',
            field=models.PositiveIntegerField(default=0, help_text='Antall ganger klikke seg på siden', verbose_name='Populæritet'),
        ),
    ]