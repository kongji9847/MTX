from django.shortcuts import get_list_or_404, get_object_or_404

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status

from rest_framework.permissions import IsAuthenticated

from .Serializers.movie import MovieSerializer, MovieDetailSerializer, MovieSearchSerializer
from .Serializers.review import RateSerializer, ReviewSerializer, ReviewDetailSerializer, CommentSerializer, CommentDetailSerializer, RateChangeSerializer
from .models import Movie, Review, Comment, Rate

# 영화 끝말 잇기 로직: params : {"start_word":"글자"} 해서 get 요청 보내면 해당 글자로 시작하는 영화 랜덤 선택
@api_view(['GET'])
def word_chain(request):
    start_word = request.GET["start_word"]
    movie = Movie.objects.filter(title__istartswith=start_word).order_by('?').first()
    if movie:
        serializer = MovieSerializer(movie)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        error_message = {"Good job!!!": "대단해요! 해당 단어로 시작하는 영화가 없어요!!!"}
        return Response(error_message, status=status.HTTP_404_NOT_FOUND)

# 영화 디테일 페이지 반환
@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieDetailSerializer(movie)
    return Response(serializer.data)

# 리뷰 리스트 조회 함수
# 로그인 사용자만 조회 가능 - api_view 데코레이터보다 아래에 있어야함
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def review_list(request):
    reviews = Review.objects.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


# 리뷰 생성 함수 - 로그인 사용자만 가능
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def review_create(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    user = request.user
    serializer = ReviewSerializer(data = request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie, user=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


# 단일 리뷰 조회/수정/삭제
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def review_detail(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    
    if request.method == 'GET':
        serializer = ReviewDetailSerializer(review)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        if request.user == review.user:
            serializer = ReviewSerializer(review, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
    
    elif request.method == 'DELETE':
        if request.user == review.user:
            review.delete()
            message = {
                'delete': f'{review_pk} 리뷰가 삭제되었습니다.'
            }
            return Response(message, status=status.HTTP_204_NO_CONTENT)
    
    return Response({"error_message": "당신은 작성자가 아닙니다!"}, status=status.HTTP_406_NOT_ACCEPTABLE)


# 댓글 달기
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def comment_create(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    user = request.user

    serializer = CommentDetailSerializer(data = request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(review=review, user=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


# 댓글 수정, 삭제
@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def comment(request, review_pk, comment_pk):
    comment = get_object_or_404(Comment, pk=comment_pk)
    
    if request.method == 'PUT':
        if request.user == comment.user:
            serializer = CommentDetailSerializer(comment, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
    
    elif request.method == 'DELETE':
        if request.user == comment.user:
            comment.delete()
            message = {
                'delete': f'{review_pk} 리뷰에 달린 댓글이 삭제되었습니다.'
            }
            return Response(message, status=status.HTTP_204_NO_CONTENT)
    
    return Response({"error_message": "당신은 댓글 작성자가 아닙니다!"}, status=status.HTTP_406_NOT_ACCEPTABLE)

# 로그인한 사용자
# 한번 평점을 날렸으면 다음은 평점 날릴 수 없다.
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rate(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    user = request.user
    
    if user.rate_set.filter(movie=movie_pk):
        return Response({"error_message": "이미 평점을 남겼습니다!"}, status=status.HTTP_403_FORBIDDEN)


    score = request.data.get("score")    
    # 영화 평점 db 반영
    total_score = movie.vote_average*movie.vote_count
    total_score += score
    new_vote_average = round(total_score/(movie.vote_count+1), 1)

    new_data = {
        "vote_average": new_vote_average,
        "vote_count": movie.vote_count+1,
    }

    serializer = RateChangeSerializer(movie, data=new_data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        
        # 영화 평점 db 반영 후, 사용자와 영화의 rate 관계 db post
        serializer2 = RateSerializer(data=request.data)
        if serializer2.is_valid(raise_exception=True):
            serializer2.save(movie=movie, user=user)
            return Response(serializer2.data)

@api_view(['GET'])
def search(request):
    keyword = request.GET["keyword"]
    movies = Movie.objects.filter(title__contains=keyword)
    if not movies:
        return Response({'error_message': '해당 제목의 영화가 없습니다!ㅜㅜ'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = MovieSearchSerializer(movies, many=True)
    return Response(serializer.data)
