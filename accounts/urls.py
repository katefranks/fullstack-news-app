from django.urls import include, path

from .views import ProfileListAPIView
# ProfileDetailAPIView

urlpatterns = [
    path('profiles/', ProfileListAPIView.as_view()),
]


# ProfileListAPIView  have to create this in views. py

# path('<int:pk>/', ProfileDetailAPIView.as_view(), name='propfile_detail'),

# path('', ProfileListAPIView.as_view()),


# by default retrieve/update/destroy expects npk to specifically get a profile.
