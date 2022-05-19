from rest_framework import serializers
from ..models import Review, Comment, Rate
from django.contrib.auth import get_user_model

User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ("username",)


# 영화 리뷰 (조회 및 리뷰 생성)
class ReviewSerializer(serializers.ModelSerializer):

    # 댓글 수
    comment_count = serializers.IntegerField(source="comment_set.count", read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ("user", 'movie')



# 영화 리뷰 detail
class ReviewDetailSerializer(serializers.ModelSerializer):

    # 리뷰에 달린 댓글도 확인
    comment_set = serializers.JSONField(source="comment_set", read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ("user", 'movie')


# 영화리뷰 코멘트 작성 / 조회
class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('user', 'review',)

# 영화 평점 생성
class RateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Rate
        fields = '__all__'
        read_only_fields = ('user', 'movie',)