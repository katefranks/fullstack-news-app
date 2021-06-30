from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Article(models.Model):
    author = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    body = models.TextField()

    def __str__(self):
        return self.title
