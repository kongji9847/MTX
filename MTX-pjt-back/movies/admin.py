from django.contrib import admin
from .models import Movie, Review, Comment


admin.site.register(Movie)
admin.site.register(Review)
admin.site.register(Comment)