# Generated by Django 4.2.7 on 2024-01-27 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_julekurv_image_julekurv'),
    ]

    operations = [
        migrations.AlterField(
            model_name='julekurv',
            name='image_julekurv',
            field=models.ImageField(upload_to='images/julekurver'),
        ),
    ]
