from django.urls import path
from .views import *


urlpatterns = [
    path('clients',AdminClientList,name='all_clients'),
    path('client_profile/<int:client>',AdminReviewProfileClient,name='client_profile'),
    path('clientForm',NewClient,name="new_client"),
    path('desactivate/<int:client>',DesactivateClient,name='desactivate_client'),
    path('delete_client/<int:client>',DeleteClient,name='delete_client'),
    path('View_client/<int:client>',ClientView,name='client_view')
]