from django.urls import path
from . import views

app_name = "movies"

urlpatterns = [
    path('word-chain/', views.word_chain)
]