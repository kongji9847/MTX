# Movie World Chain

- 로그인/로그아웃 (1.5순위)
- 프로필 -> 영화 즐겨찾기(영화 좋아요) -> manytomany(중개테이블) (3순위)
- 핵심 기능: 끝말잇기 (1순위)

------



- 단순 영화 나열 추천 -> 사전순
- 넷플릭스 같은
  - 5월에 개봉한 영화 -> 계절감
  - 최신영화(api 개수 작게)

------



- 영화 제목 게임
- 리뷰 게시판(댓글에 무비/유저뽀린키 -> 무비/유저 모델 변경없음)
- 유저가 영화 데이터 추가 -> api 받아(tmdb movie search) -> data 가공 -> serializer에 post -> db에 추가...?
- 사전순 영화 배열
- 추가 끝말잇기 가능 탭