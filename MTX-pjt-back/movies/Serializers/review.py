from rest_framework import serializers
from ..models import Review, Comment, Rate, Movie
from django.contrib.auth import get_user_model

User = get_user_model()
# class UserSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = User
#         fields = ("username",)

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('pk', 'content', 'created_at', 'updated_at')



# 영화 리뷰 (조회 및 리뷰 생성/수정/삭제)
class ReviewSerializer(serializers.ModelSerializer):

    # 댓글 수
    comment_count = serializers.IntegerField(source="comment_set.count", read_only=True)
    user = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ("user", 'movie')


# 영화 리뷰 detail
class ReviewDetailSerializer(serializers.ModelSerializer):

    # 리뷰에 달린 댓글도 확인
    # comment_set = serializers.JSONField(source="comment_set.all", read_only=True)
    comment_set = CommentSerializer(many=True, read_only=True)
    # user = UserSerializer(read_only=True)
    user = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ("user", 'movie')


# 영화리뷰 코멘트 작성 / 조회
class CommentDetailSerializer(serializers.ModelSerializer):

    user = serializers.CharField(source="user.username", read_only=True)
    
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('user', 'review',)


# 영화 평점 생성 - 개인 프로필에 표시될 것
class RateSerializer(serializers.ModelSerializer):
    
    user = serializers.CharField(source="user.username", read_only=True)
    vote_average = serializers.FloatField(source="movie.vote_average", read_only=True)
    vote_count = serializers.IntegerField(source="movie.vote_count", read_only=True)
    
    class Meta:
        model = Rate
        fields = '__all__'
        read_only_fields = ('user', 'movie',)


# 영화 평점 반영하여 movie db값 수정하기
class RateChangeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = ("vote_average", "vote_count",)