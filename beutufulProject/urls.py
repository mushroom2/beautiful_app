"""beutufulProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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
from django.views.generic import TemplateView
from rest_framework_swagger.views import get_swagger_view
from django.conf.urls import url
from backend.views import AlbumViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'albums', AlbumViewSet, basename='album')

schema_view = get_swagger_view(title='Beautiful REST API')

api_urlpatterns = [path('accounts/', include('rest_registration.api.urls'))]

urlpatterns = [
    path('', TemplateView.as_view(template_name='frontend/index.html')),
    url(r'^api/v1/$', schema_view),
    path('admin/', admin.site.urls),
    path('front/', include('frontend.urls')),
    path('api/v1/', include(api_urlpatterns)),
    path('api/v1/', include(router.urls))
]
