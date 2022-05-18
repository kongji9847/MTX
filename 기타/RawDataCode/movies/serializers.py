from rest_framework import serializers
from .models import Genre, Movie

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

# class GenreNameSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Genre
#         fields = ('name',)

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'