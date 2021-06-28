"""conf URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
#add following 2 lines when importing images
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),
    path('', include('frontend.urls', namespace='frontend')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#add the above: + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) when importing images
# this needs to be added locally so that we can add images from the pathway
#  http://127.0.0.1:8000/media/profiles/dulce1.JPG
