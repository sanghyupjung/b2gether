from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone_number = models.CharField(max_length=15)
    def __str__(self):
        return self.username

class Story(models.Model):
    name = models.CharField(max_length=150)
    # slug = models.SlugField(allow_unicode=True, max_length=150, unique=True, db_index=True)
    contents = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="stories")
    def __str__(self):
        return self.name

class Hashtag(models.Model):
    name = models.CharField(max_length=150)
    story = models.ManyToManyField(Story, blank=True)

class Todolist(models.Model):
    name = models.CharField(max_length=150)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="todolists")
    year = models.CharField(max_length=4)
    month = models.CharField(max_length=2)
    day = models.CharField(max_length=2)
    # slug = models.SlugField(allow_unicode=True, max_length=150, unique=True, db_index=True)
    def __str__(self):
        return self.name