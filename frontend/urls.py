from django.urls import path
from . import views
from django.views.generic import TemplateView
from django.conf.urls import url

urlpatterns = [
    url(r'^', TemplateView.as_view(template_name='frontend/re.html'))
]