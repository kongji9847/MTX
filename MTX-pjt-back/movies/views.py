from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .Serializers.movie import MovieListSerializer
from .models import Movie

# 영화 끝말 잇기 로직: params : {"start_word":"글자"} 해서 get 요청 보내면 해당 글자로 시작하는 영화 랜덤 선택
@api_view(['GET'])
def word_chain(request):
    start_word = request.GET["start_word"]
    movie = Movie.objects.filter(title__istartswith=start_word).order_by('?').first()
    if movie:
        serializer = MovieListSerializer(movie)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        error_message = {"Good job!!!": "대단해요! 해당 단어로 시작하는 영화가 없어요!!!"}
        return Response(error_message, status=status.HTTP_404_NOT_FOUND)
