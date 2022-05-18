import requests
import json

api_key = "59333005f9e5cef30c53f778017c2676"
base_url = "https://api.themoviedb.org/3/genre/movie/list"


params = {
    'api_key' : api_key,
    'language': 'ko',
}

response = requests.get(base_url, params=params)
data = response.json()

with open('./genre_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

# base_url = "https://api.themoviedb.org/3/movie/popular"
# total_data = []
# for i in range(1, 26):
#     params = {
#         'api_key' : api_key,
#         'language': 'ko',
#         'region': 'KR',
#         'page': i,
#     }

#     response = requests.get(base_url, params=params)
#     data = response.json().get("results")
#     total_data += data

# with open('./movie_data.json', 'w', encoding='utf-8') as f:
#     json.dump(total_data, f, ensure_ascii=False, indent=4)