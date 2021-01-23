from rest_framework import serializers

from .models import *

class UserSerializer(serializers.ModelSerializer):
    # 장고에서 사용하는 데이터를 다루를 클래스 Meta
    class Meta:
        model = User
        fields = "__all__"
    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data["password"])
        user.is_active = True
        user.save()
        return user
    def update(self, instance, validated_data):
        instance.set_password(validated_data["password"])
        instance.save()
        return instance

# django에서 google email sending SMTP

class ShowUserNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "id"]

class FindUserNameSerializer(serializers.Serializer):
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=15)

class CheckUserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=15)

class StorySerializer(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    user = serializers.CharField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Story
        fields = "__all__"
    def create(self, validated_data):
        story = super(StorySerializer, self).create(validated_data)
        story.save()
        return story

class HashtagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hashtag
        fields = "__all__"
    def create(self, validated_data):
        hashtag = super(HashtagSerializer, self).create(validated_data)
        hashtag.save()
        return hashtag

class TodolistSerializer(serializers.ModelSerializer):
    user = serializers.CharField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Todolist
        fields = "__all__"
    def create(self, validated_data):
        todolist = super(TodolistSerializer, self).create(validated_data)
        todolist.save()
        return todolist

