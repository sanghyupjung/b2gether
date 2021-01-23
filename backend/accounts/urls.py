from django.urls import path

from .views import *

from rest_framework_jwt.views import (
    obtain_jwt_token,
    refresh_jwt_token,
    verify_jwt_token,
)

urlpatterns = [
    path("", UserList.as_view(), name="user_list"),
    path("join/", UserCreate.as_view()),
    path("find/", FindUser.as_view()),
    path("check/", CheckUser.as_view()),
    path("update/<int:pk>/", UpdatePassword.as_view()),

    # 로그인, 리프레시, 검증
    path('token/', obtain_jwt_token),
    path("token/refresh/", refresh_jwt_token),
    path("token/verify/", verify_jwt_token),

    path("story/", StoryList.as_view()),
    path("story/create/", StoryCreate.as_view()),

    path("hashtag/", HashtagList.as_view()),
    path("hashtag/create/", HashtagCreate.as_view()),

    path("todolist/", TodolistList.as_view()),
    path("todolist/create/", TodolistCreate.as_view()),
]