import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import GenreSerializer, MovieSerializer

# genre 받아오기
@api_view(['POST'])
def genres(request):

    base_url = 'https://api.themoviedb.org/3/genre/movie/list'
    api_key = '59333005f9e5cef30c53f778017c2676'
    params = {
    'api_key' : api_key,
    'language': 'ko',
    }

    response = requests.get(base_url, params=params)
    data = response.json().get("genres")
    print(data)
    serializers = GenreSerializer(data=data, many=True)
    if serializers.is_valid(raise_exception=True):
        serializers.save()
    return Response(serializers.data)


# movie data 받아오기
@api_view(['POST'])
def movies(request):
    base_url = "https://api.themoviedb.org/3/movie/popular"
    api_key = '59333005f9e5cef30c53f778017c2676'
    for page in range(1, 26):
        params = {
        'api_key' : api_key,
        'language': 'ko',
        'region': 'KR',
        'page': page,
        }

        response = requests.get(base_url, params=params)
        data = response.json().get("results")

        for element in data:
            element["poster_path"] = "https://image.tmdb.org/t/p/w500/" + element["poster_path"]
            element["tmdb_id"] = element["id"]
        
        serializers = MovieSerializer(data=data, many=True)

        if serializers.is_valid(raise_exception=True):
            serializers.save()
    return Response(serializers.data)
