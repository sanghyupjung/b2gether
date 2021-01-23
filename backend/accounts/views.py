from django.shortcuts import render

from rest_framework import generics, permissions
from rest_framework.response import Response
from django.core.mail import EmailMessage
import string
import random

from .serializers import *
from .models import *

class UserList(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class UserCreate(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

class FindUser(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = FindUserNameSerializer
    queryset = User.objects.all()
    def retrieve(self, request, *args, **kwargs):
        # print(request.data)
        # 1. request.data.get('email')
        email_data = request.data.get('email')
        # 2. request.data.get('phone_number')
        phone_number_data = request.data.get('phone_number')
        queryset = self.get_queryset()
        user = queryset.filter(email=email_data, phone_number=phone_number_data)
        if user.exists():
            # return user data
            # serializer = UserSerializer(user.first())
            serializer = ShowUserNameSerializer(user.first())
            return Response(serializer.data)
        else:
            # return Response(UserSerializer().data)
            return Response(ShowUserNameSerializer().data)
    def post(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

class CheckUser(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = CheckUserSerializer
    queryset = User.objects.all()
    def retrieve(self, request, *args, **kwargs):
        username_data = request.data.get('username')
        email_data = request.data.get('email')
        print("email", email_data)
        phone_number_data = request.data.get('phone_number')
        queryset = self.get_queryset()
        user = queryset.filter(username=username_data, email=email_data, phone_number=phone_number_data)
        if user.exists():
            length = 8
            string_pool = string.ascii_letters + string.digits
            auth_code = ""
            for i in range(length):
                auth_code += random.choice(string_pool)
            email = EmailMessage('B2GETHER 비밀번호 변경 요청 인증', 'B2GETHER 비밀번호 변경 요청 인증 번호는 ' + auth_code + ' 입니다!', from_email='sanghyupjungxav2@gmail.com', to=[email_data])
            # email.send()
            serializer = ShowUserNameSerializer(user.first())
            # print(serializer.data)
            # print(Response(serializer.data))
            return Response([serializer.data, auth_code])
        else:
            return Response(ShowUserNameSerializer().data)
    def post(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

class UpdatePassword(generics.UpdateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

class StoryList(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = StorySerializer
    queryset = Story.objects.all()

class StoryCreate(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = StorySerializer

class HashtagList(generics.ListAPIView):
    serializer_class = HashtagSerializer
    queryset = Hashtag.objects.all()

class HashtagCreate(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = HashtagSerializer

class TodolistList(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = TodolistSerializer
    queryset = Todolist.objects.all()

class TodolistCreate(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = TodolistSerializer



