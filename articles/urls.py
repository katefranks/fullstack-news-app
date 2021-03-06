from django.urls import path
from .views import ArticleListAPIView, ArticleDetailAPIView

# app_name = 'articles'

urlpatterns = [
    path('<int:pk>/', ArticleDetailAPIView.as_view(), name= 'article_detail'),
    path('', ArticleListAPIView.as_view(), name='article_list'),
]

#put empty strings at bottom
#shorter more abbreviated version of same urls are beneath.
