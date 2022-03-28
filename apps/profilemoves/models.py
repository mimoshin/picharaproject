import profile
from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from poker.utils import COLORS
from principal.models import Move,DoubleComparation,TripleComparation
from pokerusers.models import ClientPoker

class Profile(models.Model):
    profileName = models.CharField(max_length=200,null=False,blank=False,default='DEFAULT')
    description = models.CharField(max_length=200,null=False,blank=False,default='DEFAULT')

    def __str__(self):
        return '%s'%(self.profileName)
        
    def strid(self):
        return str(self.id)
    
    def viewrelated(self):
        print(self.clientprofile.all())

class ClientProfile(models.Model):
    clientId = models.ForeignKey(ClientPoker,related_name="%(class)s",on_delete=models.CASCADE)
    profileId = models.ForeignKey(Profile,related_name="%(class)s",on_delete=models.CASCADE)

    def __str__(self):
        return "Perfil %s asignado a %s"%(self.profileId,self.clientId)

class ABSVersion(models.Model):
    colors = models.CharField(max_length=500,null=False,blank=False,default='DEFAULT')
    description = models.CharField(max_length=200,null=False,blank=False,default='DEFAULT')
    versionname = models.CharField(max_length=500,null=False,blank=False,default='DEFAULT')
    class Meta:
        abstract = True

    def __str__(self):
        return "Version: %s, Jugada: %s"%(self.versionname,self.moveId)

class SingleVersion(ABSVersion):
    moveId = models.ForeignKey(Move,null=False,related_name="%(class)s",blank=False,on_delete=models.CASCADE)

class DoubleVersion(ABSVersion):
    moveId = models.ForeignKey(DoubleComparation,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)

class TripleVersion(ABSVersion):
    moveId = models.ForeignKey(TripleComparation,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)


class ABSAssignation(models.Model):
    perfilId = models.ForeignKey(Profile,null=False,blank=False,on_delete=models.CASCADE)
    class Meta:
        abstract = True

    def __str__(self):
        return "Asginacion: %s al Perfil: %s"%(self.versionId,self.perfilId)

class SingleAssignation(ABSAssignation):
    versionId = models.ForeignKey(SingleVersion,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['perfilId', 'versionId'], name='singular_asignacion ')
    ]

class DoubleAssignation(ABSAssignation):
    versionId = models.ForeignKey(DoubleVersion,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['perfilId', 'versionId'], name='doble_asignacion ')
    ]

class TripleAssignation(ABSAssignation):
    versionId = models.ForeignKey(TripleVersion,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['perfilId', 'versionId'], name='triple_asignacion ')
    ]

class ProfilesFactory():
    @staticmethod
    def get():
        pass
    @staticmethod
    def new_version(data):
        #colors | description | versionname | moveId
        if data.get('tbase'):
            TripleVersion.objects.create(colors=data['texto'][:-1],description=data['description'],versionname=data['name'],moveId_id=data['tbase'])
        elif data.get('dbase'):
            DoubleVersion.objects.create(colors=data['texto'][:-1],description=data['description'],versionname=data['name'],moveId_id=data['dbase'])
        elif data.get('base'):
            SingleVersion.objects.create(colors=data['texto'][:-1],description=data['description'],versionname=data['name'],moveId_id=data['base'])
        
    @staticmethod
    def get_version_table(data):
        if data.get('tbase'):
            selected = TripleVersion.objects.get(id=data['select'],moveId_id=data['tbase'])
        elif data.get('dbase'):
            selected = DoubleVersion.objects.get(id=data['select'],moveId_id=data['dbase'])
        elif data.get('base'):
            selected = SingleVersion.objects.get(id=data['select'],moveId_id=data['base'])

        if selected.colors == 'DEFAULT':
            return ''
        else:
            filas = selected.colors.split('.')
            total = []
            for x in filas:
                if x:
                    columna = x.split('-')
                    columnas = []
                    for a in columna:
                        name = a.split('|')[0]
                        color = int(a.split('|')[1])
                        columnas.append([name,color,COLORS[color]])
                    total.append(columnas)
            return total
    @staticmethod
    def get_profile(pid):
        profile = Profile.objects.get(id=pid)
        return profile
        
    @staticmethod
    def get_all_profiles():
        #Perfiles de jugadas
        profile_list = Profile.objects.all()
        return profile_list
    
    @staticmethod
    def get_assigned(profile,move,mtype):
        option = {'single':SingleAssignation,'double':DoubleAssignation,'triple':TripleAssignation}
        selected = option[mtype]
        result = selected.objects.filter(perfilId_id=profile,versionId__moveId_id=move)
        if result:
            return result[0]

    @staticmethod
    def get_my_profiles(client):
        profile_list = ClientProfile.objects.filter(clientId_id=client)
        return profile_list
    
    @staticmethod
    def get_profiles_status(client):
        profile_list = Profile.objects.all()
        

    @staticmethod
    def set():
        pass

    @staticmethod
    def assign_version(data):
        print(data) 
        #perfilId | versionId 
        if data.get('tbase'):
            try:
                assigned = TripleAssignation.objects.get(perfilId_id=data['profile'],versionId__moveId_id=data['base'])
                assigned.versionId_id=int(data['version'])
                assigned.save()
            except ObjectDoesNotExist:
                TripleAssignation.objects.create(perfilId_id=data['profile'],versionId_id=data['version']) 
        elif data.get('dbase'):
            try:
                assigned = DoubleAssignation.objects.get(perfilId_id=data['profile'],versionId__moveId_id=data['base'])
                assigned.versionId_id=int(data['version'])
                assigned.save()
            except ObjectDoesNotExist:
                DoubleAssignation.objects.create(perfilId_id=data['profile'],versionId_id=data['version']) 
        elif data.get('base'):
            try:
                assigned = SingleAssignation.objects.get(perfilId_id=data['profile'],versionId__moveId_id=data['base'])
                assigned.versionId_id=int(data['version'])
                assigned.save()
            except ObjectDoesNotExist:
                SingleAssignation.objects.create(perfilId_id=data['profile'],versionId_id=data['version']) 
    
    @staticmethod
    def assign_profile(profile,client):
        ClientProfile.objects.create(profileId_id=profile,clientId_id=client)

    @staticmethod
    def desassign_profile(profile,client):
        clientprofile = ClientProfile.objects.get(profileId_id=profile,clientId_id=client)
        clientprofile.delete()