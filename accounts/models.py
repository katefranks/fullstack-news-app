from django.conf import settings
from django.contrib.auth.models import AbstractUser
#importing AbstractUser from django, it's a model. It has defined what it means to be an abstract user. It's a model that comes baked in, and we're going to inherit from that model.
from django.db import models

class User(AbstractUser):
    pass


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='profiles/')
    display_name = models.CharField(max_length=255)

    def __str__(self):
        return self.display_name



#when image is uploaded through a profile, it gets nested within the profile directory within media

#class User(AbstractUser):
#  pass
#if you don't have any fields that you're going to add, you need to at least put pass or it will error out

# on_delete=models.CASCADE      This means that when the user gets deleted the profile does as well.

#avatar = models.ImageField(upload_to='profiles/')    going to have an image directory, and within this we'll have a profiles directory.

#models.CharField(max_length=255)   if it's going to be a longer entry- use a textfield (ex blog post)
