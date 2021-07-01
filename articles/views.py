from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    # queryset- (calls the stored information) = getting ALL of the objects from Article. 
    serializer_class = ArticleSerializer

class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
