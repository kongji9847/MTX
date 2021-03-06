# Generated by Django 3.2.12 on 2022-05-19 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='genre_ids',
            field=models.JSONField(blank=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='overview',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='popularity',
            field=models.FloatField(blank=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='poster_path',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='vote_average',
            field=models.FloatField(blank=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='vote_count',
            field=models.IntegerField(blank=True),
        ),
    ]
