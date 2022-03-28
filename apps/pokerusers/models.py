from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_client = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    def client(self):
        return self.is_client

    def admin(self):
        return self.is_admin
    
    def get_subid(self):
        if self.is_client:
            return self.clientpoker.id
        elif self.is_admin:
            print(self.adminpoker.id)

class ClientPoker(models.Model):
    baseUser = models.OneToOneField(User,related_name="%(class)s",on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    def __str__(self):
        return self.baseUser.username

    def status(self):
        option = {True:'Activo',False:'Inactivo'}
        print("WTF ",self.is_active)
        return option[self.is_active]
    
    def is_client(self):
        return self.baseUser.is_client

    def name(self):
        return "%s %s "%(self.baseUser.first_name,self.baseUser.last_name)

class AdminPoker(models.Model):
    baseUser = models.OneToOneField(User,related_name="%(class)s",on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    def __str__(self):
        return self.baseUser.username

    def status(self):
        option = {True:'Activo',False:'Inactivo'}
        return option[self.is_active]

class UsersFactory():
    @staticmethod
    def get():
        pass
    @staticmethod
    def get_all_clients():
        client_list = ClientPoker.objects.all()
        return client_list
    
    @staticmethod
    def get_client(client):
        try:
            client = ClientPoker.objects.get(id=client)
            return client
        except Exception as e:
            print("Error al obtener el cliente",e)
    @staticmethod
    def set():
        pass
    @staticmethod
    def new_client(data):
        try:
            print(data)

            creation = User(username=data['username'],first_name=data['firstname'],
                        last_name=data['lastname'],email=data['email'],is_client=True)
            creation.set_password(data['password'])
            creation.save()
            ClientPoker.objects.create(baseUser=creation)
            return True
        except Exception as e:
            print("error al registrar cliente",e)
            return False
            
    @staticmethod
    def desactivate_client(client):
        try:
            client = ClientPoker.objects.get(id=client)
            if client.is_active:
                client.is_active = False
            else:
                client.is_active = True
            client.save()
              
        except Exception as e:
            print("Error al eliminar al cliente",e)

    @staticmethod
    def delete_client(client):
        try:
            client = User.objects.get(id=client)
            client.delete()
        except Exception as e:
            print("Error al eliminar al cliente",e)

