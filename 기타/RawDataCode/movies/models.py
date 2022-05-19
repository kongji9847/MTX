from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=50)
    id = models.IntegerField(primary_key=True)

class Movie(models.Model):
    title = models.CharField(max_length=100)
    overview = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    tmdb_id = models.IntegerField()
    release_date = models.DateField(blank=True)
    popularity = models.FloatField(blank=True)
    vote_average = models.FloatField(blank=True)
    genre_ids = models.JSONField(blank=True)
    vote_count = models.IntegerField(blank=True)