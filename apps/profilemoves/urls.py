from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *


urlpatterns = [
    path('',principalView,name='generators'),
    path('view_profile/<int:profile>',adminViewProfile,name='view_profile'),
    path('new_version',newVersion,name='new_version'),
    path('load_version',load_version,name='load_version'),
    path('update_version',updateVersion,name='update_version'),
    path('delete_version',deleteVersion,name='delete_version'),
    path('profiles',adminProfilesView,name='profiles_list'),
    path('admin_profile/<int:profile>',adminProfile,name='admin_profile'),
    path('assign_version',assignVersion,name='assign_version'),
    path('new_profile',newProfile,name='new_profile'),
    path('delete_profile/<int:profile>',deleteProfile,name='delete_profile'),
    path('assign_profile/<int:profile>/<int:client>',assignProfile,name='assign_profile'),
    path('desassign_profile/<int:profile>/<int:client>',desassignProfile,name='deassign_profile'),  
    path('duplicate_profile/<int:profile>',profileDup,name='duplicate_profile'),
    path('action_profile',actionProfile,name='action_profile'),
    #QUERYS
    path('admin_profile/QMove',QMove,name='load_move'),
    path('Qprofiles',Qprofiles,name='load_profiles'),
    path('admin_profile/QJSVersion',loadVersionJS,name='load_VersionJS'),
    path('admin_profile/get_data',getDataVersion,name='get_data_version'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

"""
Reemplazos = [{ actual:load_move,
                reemplazado: [{url:admin_profile/QSingle',view:PQSingle,name:'profile_Single'},
                              {url:admin_profile/QDouble',view:PQDouble,name:'profile_Double'},
                              {url:admin_profile/QTriple',view:PQTriple,name:'profile_Triple'}
                             ]
              }
            ] 
"""