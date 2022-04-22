from django.urls import path
from .views import *


urlpatterns = [
    path('clients',AdminClientList,name='all_clients'),
    path('modifyclient/<int:client>',modifyClient,name='client_modify'),
    path('client_profile/<int:client>',AdminReviewProfileClient,name='client_profile'),
    path('clientForm',NewClient,name="new_client"),
    path('clientNew',clientNew,name='client_new'),
    path('desactivate/<int:client>',DesactivateClient,name='desactivate_client'),
    path('delete_client/<int:client>',DeleteClient,name='delete_client'),
    path('View_client/<int:client>',ClientView,name='client_view'),
    path('create_admin',create_adminpoker,name='createadmin'),
    
]