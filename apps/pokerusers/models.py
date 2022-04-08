from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_client = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    cellphone = models.CharField(max_length=12,default='987654321')

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
        
    def status(self):
        option = {True:'Activo',False:'Inactivo'}
        return option[self.baseUser.is_active]
    
    def is_active(self):
        return self.baseUser.is_active

class AdminPoker(models.Model):
    baseUser = models.OneToOneField(User,related_name="%(class)s",on_delete=models.CASCADE)
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
    def client_active(clientname):
        client = User.objects.get(username=clientname)  
        print("CLIENTE ACTIVO ?",client.is_active)   
        return client.is_active  
        
    @staticmethod
    def set():
        pass
    @staticmethod
    def new_client(data):
        try:
            print(data)

            creation = User(username=data['username'],first_name=data['firstname'],
                        last_name=data['lastname'],email=data['email'],cellphone=data['cellphone'],is_client=True)
            creation.set_password(data['password'])
            creation.save()
            ClientPoker.objects.create(baseUser=creation)
            return True
        except Exception as e:
            print("error al registrar cliente",e)
            return False
        
    @staticmethod
    def modify_client(client,data):
        try:
            client = ClientPoker.objects.get(id=client)
            modify = 0
            if data.get('firstname'):
                client.baseUser.first_name = data['firstname']
                modify+=1
            if data.get('lastname'):
                client.baseUser.last_name = data['lastname']
                modify+=1
            if data.get('email'):
                client.baseUser.email = data['email']
                modify+=1
            if data.get('cellphone'):
                client.baseUser.cellphone = data['cellphone']
                modify+=1

            if modify>0:
                client.baseUser.save()
        except Exception as e:
            print("Error al modificar",e)
            
    @staticmethod
    def desactivate_client(client):
        try:
            client = ClientPoker.objects.get(id=client)
            if client.is_active():
                client.baseUser.is_active = False
            else:
                client.baseUser.is_active = True
            client.baseUser.save()
              
        except Exception as e:
            print("Error al eliminar al cliente",e)

    @staticmethod
    def delete_client(client):
        try:
            client = ClientPoker.objects.get(id=client)
            client.baseUser.delete()
        except Exception as e:
            print("Error al eliminar al cliente",e)

