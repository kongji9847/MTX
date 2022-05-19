from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class Genre(models.Model):
    name = models.CharField(max_length=50)
    id = models.IntegerField(primary_key=True)


class Movie(models.Model):
    title = models.CharField(max_length=100)
    overview = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    tmdb_id = models.IntegerField(blank=True)
    release_date = models.DateField(blank=True)
    popularity = models.FloatField(blank=True)
    vote_average = models.FloatField(blank=True)
    vote_count = models.IntegerField(blank=True)
    genre_ids = models.ManyToManyField(Genre, related_name='movies')


class Review(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.ForeignKey(Review, on_delete=models.CASCADE)

class Rate(models.Model):
    score = models.FloatField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
