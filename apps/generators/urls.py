from unicodedata import name
from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('',principalView,name='generators'),
    path('create_profiles',create_profiles,name='create_profiles')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)