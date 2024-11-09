# Generated by Django 5.1.1 on 2024-10-13 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_julekurv_difficulty_level_julekurv_hide_kurv'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hjertekurv',
            fields=[
                ('id', models.IntegerField(help_text='Hjertekurv ID', primary_key=True, serialize=False)),
                ('url_name', models.CharField(help_text='Teksten som vises i url-ene', max_length=100)),
                ('name', models.CharField(help_text='Navnet på hjertekurven', max_length=120)),
                ('about', models.TextField()),
                ('image_hjertekurv', models.ImageField(upload_to='hjertekurv/flettet')),
                ('image_hjertekurv_mal', models.FileField(blank=True, null=True, upload_to='hjertekurv/mal')),
                ('hide_kurv', models.BooleanField(default=False, help_text='Skjuler hjertekurven hvis valgt')),
                ('difficulty_level', models.PositiveSmallIntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8'), (9, '9'), (10, '10')], default=1, help_text='Vanskelighetsgrad fra 1 til 10')),
                ('related_kurver', models.ManyToManyField(blank=True, help_text='Relaterte hjertekurven', related_name='related_to', to='api.hjertekurv')),
            ],
            options={
                'verbose_name': 'Hjertekurv',
                'verbose_name_plural': 'Hjertekurver',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='KurvCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Navnet på kategorien', max_length=100)),
            ],
            options={
                'verbose_name': 'Kurv-kategori',
                'verbose_name_plural': 'Kurv-kategorier',
            },
        ),
        migrations.DeleteModel(
            name='Julekurv',
        ),
        migrations.AddField(
            model_name='hjertekurv',
            name='categories',
            field=models.ManyToManyField(blank=True, help_text='Kategorier til hjertekurven', related_name='hjertekurver', to='api.kurvcategory'),
        ),
    ]
