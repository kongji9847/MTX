from rest_framework import serializers
from ..models import Movie, Genre

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('name',)

class MovieListSerializer(serializers.Serializer):

    title = serializers.CharField(max_length=100)
    poster_path = serializers.CharField()
    genre_ids = GenreSerializer(many=True, read_only=True)
    last_word = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        # fields = ('title', 'poster_path', 'genre_ids',)
    
    def get_last_word(self, obj):
        return obj.title[-1]