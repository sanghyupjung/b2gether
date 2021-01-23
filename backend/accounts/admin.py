from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin
from .models import *
@admin.register(User)
class CustomUserAdmin(UserAdmin):
   pass

def user_username(obj):
    return obj.user.username

@admin.register(Story)
class StoryOptions(admin.ModelAdmin):
    # list_display = ["id", "name", "user", user_username, "created", "updated"]
    list_display = ["name", "id", "user", "created", "updated"]
    # prepopulated_fields = {"slug": ["name"]}
    # search_fields = ["name", "slug"]
    search_fields = ["name"]
    raw_id_fields = ["user"]

@admin.register(Hashtag)
class HashtagOptions(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name", "story"]
    # raw_id_fields = ["name"]

@admin.register(Todolist)
class TodolistOptions(admin.ModelAdmin):
    list_display = ["name", "user", "year", "month", "day"]
    # list_display = ["name", "year", "month", "day"]
    search_fields = ["name"]
    # raw_id_fields = ["user"]
    # prepopulated_fields = {"slug": ["name"]}