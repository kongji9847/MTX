from rest_framework import serializers
from ..models import Movie, Genre
from .review import ReviewSerializer

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('name',)

# 영화 끝말잇기 후 보여줄 내용

class MovieSerializer(serializers.Serializer):
    
    id = serializers.IntegerField()
    title = serializers.CharField(max_length=100)
    overview = serializers.CharField(allow_blank=True)
    release_date = serializers.DateField()
    poster_path = serializers.CharField(allow_blank=True)
    genre_ids = GenreSerializer(many=True, read_only=True)
    vote_average = serializers.FloatField()
    vote_count = serializers.IntegerField()
    tmdb_id = serializers.IntegerField()
    last_word = serializers.SerializerMethodField()

    class Meta:
        model = Movie
    
    def get_last_word(self, obj):
        return obj.title[-1]

# 영화 디테일 페이지에서 보여줄 내용
class MovieDetailSerializer(serializers.ModelSerializer):

    genre_ids = GenreSerializer(many=True, read_only=True)
    review_set = ReviewSerializer(many=True, read_only=True)
    
    class Meta:
        model = Movie
        fields = '__all__'

class MovieSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'title',)