from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User,ClientPoker,AdminPoker

admin.site.register(User, UserAdmin)
admin.site.register(ClientPoker)
admin.site.register(AdminPoker)

