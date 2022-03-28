from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *


urlpatterns = [
    path('',principalView,name='generators'),
    path('new_version',newVersion,name='new_version'),
    path('load_version',load_version,name='load_version'),
    path('profiles',adminProfilesView,name='profiles_list'),
    path('admin_profile/<int:profile>',adminProfile,name='admin_profile'),
    path('assign_version',assignVersion,name='assign_version'),
    path('new_profile',newProfile,name='new_profile'),
    path('delete_profile/<int:profile>',deleteProfile,name='delete_profile'),
    path('assign_profile/<int:profile>/<int:client>',assignProfile,name='assign_profile'),
    path('desassign_profile/<int:profile>/<int:client>',desassignProfile,name='deassign_profile'),        
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)