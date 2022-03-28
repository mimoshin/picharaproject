from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('',principalView,name='principalView'),
    path('login',loginView,name='login'),
    path('logout',logoutUser,name='logout'),
    path('AdminView',administrationView,name='admin_principal'),
    path('view_move',moveView,name='moved'),
    path('D_comparation',doubleView,name='double_comparation'),
    path('T_comparation',tripleView,name='triple_comparation'),
    path('Q_image/<int:idMove>',buttonView,name='q_image'),
    path('cargar',crearbase,name='cargardatos'),
    path('cargardoble',creardoble,name='cargardobles'),
    path('cargartriple',creartriple,name='cargartriples'),
    path('eliminar',eliminardata,name='eliminardatos'),
    path('savedata',savedata,name='save_data'),
    path('deletedata',deletedata,name='delete_data'),
    path('prueba',vistaPrueba,name='vistaprueba'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)