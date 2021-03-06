# Generated by Django 3.2.12 on 2022-05-19 01:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('name', models.CharField(max_length=50)),
                ('id', models.IntegerField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('overview', models.TextField()),
                ('poster_path', models.TextField()),
                ('tmdb_id', models.IntegerField()),
                ('release_date', models.DateField()),
                ('popularity', models.FloatField()),
                ('vote_average', models.FloatField()),
                ('genre_ids', models.JSONField()),
                ('vote_count', models.IntegerField()),
            ],
        ),
    ]
