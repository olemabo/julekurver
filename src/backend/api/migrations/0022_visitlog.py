# Generated by Django 3.1.4 on 2024-12-04 16:46

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_hjertekurv_visit_count'),
    ]

    operations = [
        migrations.CreateModel(
            name='VisitLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('hjertekurv', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='visit_logs', to='api.hjertekurv')),
            ],
        ),
    ]
