from django.urls import path
from . import views

app_name = "movies"

urlpatterns = [
    path('', views.movies),
    path('genres/', views.genres),
]