from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=50)
    id = models.IntegerField(primary_key=True)

class Movie(models.Model):
    title = models.CharField(max_length=100)
    overview = models.TextField()
    poster_path = models.TextField()
    tmdb_id = models.IntegerField()
    release_date = models.DateField()
    popularity = models.FloatField()
    vote_average = models.FloatField()
    genre_ids = models.JSONField()
    vote_count = models.IntegerField()