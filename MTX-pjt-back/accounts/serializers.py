from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Rate, Review
from movies.Serializers.review import ReviewSerializer, RateSerializer

class ProfileSerializer(serializers.ModelSerializer):

    # class ReviewSerializer(serializers.ModelSerializer):

    #     class Meta:
    #         model = Review
    #         fields = '__all__'

    # 사용자가 작성한 리뷰 목록
    review_set  = ReviewSerializer(many=True, read_only=True)
    # 작성한 리뷰 개수
    review_count = serializers.IntegerField(source='review_set.count', read_only=True)

    # 작성한 댓글 개수
    comment_count = serializers.IntegerField(source='comment_set.count', read_only=True)

    # class RateSerializer(serializers.ModelSerializer):
        
    #     class Meta:
    #         model = Rate
    #         fields = ('score', 'movie_id', 'poster_path',)

    rate_set = RateSerializer(many=True, read_only=True)
    movie_count = serializers.IntegerField(source='rate_set.count', read_only=True)

    class Meta:
        model = get_user_model()
        fields = ('username', 'rate_set', 'movie_count', 'review_set', 'review_count', 'comment_count',)