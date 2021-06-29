from django.urls import include, path

from .views import ProfileListAPIView, ProfileDetailAPIView

urlpatterns = [

    path('profiles/', ProfileDetailAPIView.as_view()),
    path('profiles/', ProfileListAPIView.as_view()),

]


# ProfileListAPIView  have to create this in views. py


# path('', ProfileListAPIView.as_view()),


# by default retrieve/update/destroy expects npk to specifically get a profile.
