import cProfile
import json
import profile
from traceback import print_tb
from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse, JsonResponse
from requests import options
from poker.utils import  TABLA
from principal.models import Move,DoubleComparation,TripleComparation, MovesFactory
from pokerusers.models import ClientPoker

class Profile(models.Model):
    profileName = models.CharField(max_length=200,null=False,blank=False,default='DEFAULT')
    description = models.TextField(max_length=200,null=False,blank=False,default='DEFAULT')

    def __str__(self):
        return '%s'%(self.profileName)
        
    def strid(self):
        return str(self.id)
    
    def viewrelated(self):
        print(self.clientprofile.all())
    
    def relatedClient(self,client):
        return self.clientprofile.filter(clientId_id=client).first()

class ClientProfile(models.Model):
    clientId = models.ForeignKey(ClientPoker,related_name="%(class)s",on_delete=models.CASCADE)
    profileId = models.ForeignKey(Profile,related_name="%(class)s",on_delete=models.CASCADE)

    def __str__(self):
        return "Perfil %s asignado a %s"%(self.profileId,self.clientId)

class ABSVersion(models.Model):
    colors = models.CharField(max_length=500,null=False,blank=False,default='DEFAULT')
    description = models.TextField(max_length=200,null=False,blank=False,default='DEFAULT')
    versionname = models.CharField(max_length=500,null=False,blank=False,default='DEFAULT')
    class Meta:
        abstract = True

    def __str__(self):
        return "Version: %s, Jugada: %s"%(self.versionname,self.moveId)

class SingleVersion(ABSVersion):
    moveId = models.ForeignKey(Move,null=False,related_name="%(class)s",blank=False,on_delete=models.CASCADE)
    
    def detect_asignation(self,profile):
        data = self.singleassignation.filter(perfilId_id=int(profile)).first()
        if data:
            return True
        else:
            return False

class DoubleVersion(ABSVersion):
    moveId = models.ForeignKey(DoubleComparation,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)
    
    def detect_asignation(self,profile):
        data = self.doubleassignation.filter(perfilId_id=int(profile))
        if data:
            return True
        else:
            return False

class TripleVersion(ABSVersion):
    moveId = models.ForeignKey(TripleComparation,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)
    
    def detect_asignation(self,profile):
        data = self.tripleassignation.filter(perfilId_id=int(profile))
        if data:
            return True
        else:
            return False

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
        try:
            options = {'1':SingleVersion,'2':DoubleVersion,'3':TripleVersion}
            selected = options[data['typeMove']]
            selected.objects.create(colors=data['texto'],description=data['description'],versionname=data['name'],moveId_id=data['move'])
            return True
        except Exception as e:
            #print("error al crear version",e)
            return False
        """
        #colors | description | versionname | moveId
        if data.get('tbase'):
            TripleVersion.objects.create(colors=data['texto'][:-1],description=data['description'],versionname=data['name'],moveId_id=data['tbase'])
        elif data.get('dbase'):
            DoubleVersion.objects.create(colors=data['texto'][:-1],description=data['description'],versionname=data['name'],moveId_id=data['dbase'])
        elif data.get('base'):
            SingleVersion.objects.create(colors=data['texto'][:-1],description=data['description'],versionname=data['name'],moveId_id=data['base'])
        """

    @staticmethod
    def get_version_table(data):
        if data.get('tbase'):
            selected = TripleVersion.objects.get(id=data['select'],moveId_id=data['tbase'])
        elif data.get('dbase'):
            selected = DoubleVersion.objects.get(id=data['select'],moveId_id=data['dbase'])
        elif data.get('base'):
            selected = SingleVersion.objects.get(id=data['select'],moveId_id=data['base'])

        if selected.colors == 'DEFAULT':
            return {'cols':'','coment':''}

        else:
            filas = selected.colors.split('.')
            total = {'cols':[],'coment':selected.description}
            for x in range(13):
                select = filas[x]
                if select:
                    columna = select.split('-')
                    columnas = []
                    for a in range(13):
                        selected = columna[a]
                        if selected:
                            name = TABLA[x][a]
                            color = int(selected)
                            columnas.append([name,color])
                    total['cols'].append(columnas)
            return total
            
    @staticmethod
    def new_get_version_table(typeMove,version,move,modify,profile):
        #ACTUALMENTE EN USO, RENDERIZADO MEDIANTE JS
        options = {'1':SingleVersion,'2':DoubleVersion,'3':TripleVersion}
        selected = options[typeMove].objects.get(id=version)
        try:
            assign = selected.detect_asignation(profile)
            if modify == 'true':
                #colors versionname description
                data = {'colors':selected.colors,'name':selected.versionname,'description':selected.description,'assign':assign}
                data_json = json.dumps(data)
                return JsonResponse(data_json,safe=False)
            return HttpResponse(selected.colors)
        except Exception as e:
            print("me fallo la carga de la tabla",e)
    
    @staticmethod
    def update_version(data):
        #ACTUALMENTE EN USO, RENDERIZADO MEDIANTE JS
        try:
            options = {'1':SingleVersion,'2':DoubleVersion,'3':TripleVersion}
            selected = options[data['typeMove']].objects.get(id=int(data['version']))
            selected.colors = data['texto']
            selected.versionname = data['name']
            selected.description = data['description']
            selected.save()
            return True
        except Exception as e:
            print("error al actualizar version",e)
            return False
        

    @staticmethod
    def get_version_data(data):
        print(data)

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
    def get_all_profiles_client(client):
        profile_list = Profile.objects.all()
        total = []
        for profile in profile_list:
            client_related = profile.relatedClient(client)
            if client_related:
                name = client_related.profileId.profileName
                total.append({'id':profile.id,'name':name,'status':'true'})
            else:
                total.append({'id':profile.id,'name':profile.profileName,'status':'false'})
        data = json.dumps(total)
        return data
    
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
    def duplicate_profile(profile):
        try:
            selected = Profile.objects.get(id=profile)
            total = Profile.objects.filter(profileName__contains=selected.profileName).count()
            name = selected.profileName+' '+str(total+1)
            Profile.objects.create(profileName=name,description=selected.description)
            print("Duplicar perfile",profile,selected)
        except Exception as e:
            pass

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
    def new_assign_version(data):
        #perfilId | versionId 
        options = {'1':SingleAssignation,'2':DoubleAssignation,'3':TripleAssignation}
        selected = options[data['typeMove']]
        try:
            assigned = selected.objects.get(perfilId_id=data['profile'],versionId__moveId_id=data['move'])
            assigned.versionId_id=int(data['version'])
            assigned.save()
        except ObjectDoesNotExist:
            selected.objects.create(perfilId_id=data['profile'],versionId_id=data['version'])
        

    @staticmethod
    def desassign_version(data):
        #perfilId | versionId 
        if data.get('tbase'):
            try:
                assigned = TripleAssignation.objects.get(perfilId_id=data['profile'],versionId__moveId_id=data['base'])
            except ObjectDoesNotExist:
                return False 
        elif data.get('dbase'):
            try:
                assigned = DoubleAssignation.objects.get(perfilId_id=data['profile'],versionId__moveId_id=data['base'])
            except ObjectDoesNotExist:
                return False 
        elif data.get('base'):
            try:
                assigned = SingleAssignation.objects.get(perfilId_id=data['profile'],versionId__moveId_id=data['base'])
            except ObjectDoesNotExist:
                return False 
        assigned.delete()
    
    @staticmethod
    def new_desassign_version(data):
        options = {'1':SingleAssignation,'2':DoubleAssignation,'3':TripleAssignation}
        selected = options[data['typeMove']]
        assigned = selected.objects.get(perfilId_id=data['profile'],versionId=data['version'])
        #perfilId | versionId 
        assigned.delete()

    @staticmethod
    def assign_profile(profile,client):
        ClientProfile.objects.create(profileId_id=profile,clientId_id=client)

    @staticmethod
    def desassign_profile(profile,client):
        try:
            clientprofile = ClientProfile.objects.get(profileId_id=profile,clientId_id=client)
            clientprofile.delete()
        except Exception as e:
            print("errr al desasignar",e)

    @staticmethod
    def delete_version(typeMove,move,version):
        try:
            options = {'1':SingleVersion,'2':DoubleVersion,'3':TripleVersion}
            selected = options[typeMove].objects.get(id=version)
            selected.delete()
            return True
        except Exception as e:
            print("eeror al eliminar version",e)
            return False