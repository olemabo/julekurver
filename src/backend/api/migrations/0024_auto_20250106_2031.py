# Generated by Django 3.1.4 on 2025-01-06 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_auto_20250106_2027'),
    ]

    operations = [
        migrations.AddField(
            model_name='standardpage',
            name='title_en',
            field=models.CharField(default='', help_text='Sidetittel på engelsk', max_length=120, null=True),
        ),
        migrations.AlterField(
            model_name='standardpage',
            name='content_en',
            field=models.TextField(default='', help_text='Innhold på engelsk', null=True),
        ),
    ]
