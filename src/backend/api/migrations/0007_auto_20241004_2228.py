# Generated by Django 3.1.4 on 2024-10-04 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_julekurv_image_julekurv_mal'),
    ]

    operations = [
        migrations.AlterField(
            model_name='julekurv',
            name='image_julekurv',
            field=models.ImageField(upload_to='static/images/julekurver/flettet'),
        ),
        migrations.AlterField(
            model_name='julekurv',
            name='image_julekurv_mal',
            field=models.FileField(blank=True, null=True, upload_to='static/images/julekurver/mal'),
        ),
    ]
