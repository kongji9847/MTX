from django.urls import path
from . import views

app_name = "movies"

urlpatterns = [
    # 영화 끝말잇기 응답 api
    path('word-chain/', views.word_chain),

    # 영화 디테일 응답 api
    path('<int:movie_pk>/', views.movie_detail),

    # review 리스트 조회 api -> 전체 게시판에 사용 목적 - 로그인 사용자만 가능
    path('reviews/', views.review_list),

    # 리뷰 생성 api - 로그인 사용자만 가능
    path('<int:movie_pk>/reviews/', views.review_create),

    # 단일 review 조회/수정/삭제 api - 작성자만 가능
    path('reviews/<int:review_pk>/', views.review_detail),

    # 댓글 달기
    path('reviews/<int:review_pk>/comments/', views.comment_create),

    # 댓글 수정 삭제
    path('reviews/<int:review_pk>/comments/<int:comment_pk>/', views.comment),

    # 평점 반영
    path('<int:movie_pk>/rate/', views.rate),

    # 영화 검색
    path('search/', views.search),
]