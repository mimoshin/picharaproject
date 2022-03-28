from django.contrib import admin
from .models import *

admin.site.register(Profile)
admin.site.register(ClientProfile)
admin.site.register(SingleVersion)
admin.site.register(DoubleVersion)
admin.site.register(TripleVersion)
admin.site.register(SingleAssignation)
admin.site.register(DoubleAssignation)
admin.site.register(TripleAssignation)