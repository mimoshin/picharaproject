import imp
from unittest import result
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render,redirect
from soupsieve import select
from poker.utils import TABLA
from .models import Profile, ProfilesFactory as PF
from principal.models import MovesFactory as MF
from .util import appendVersions

def principalView(request):
    return redirect('login')

def newVersion(request):
    if request.method == 'POST':
        data = request.POST.dict()
        result = PF.new_version(data)
    return HttpResponse(result)

def load_version(request):
    if request.method == 'POST':
        data = request.POST.dict()
        if data['select'] == '0':
            load_table = MF.get_table(data)
        else:
            load_table = PF.get_version_table(data)
        return render(request,'table.html',{'load_table':load_table,'view':'version'})

    elif request.method == 'GET':
        #print("ierda2")
        return render(request,'table.html',{'tabla':TABLA,'view':'version'})

def deleteVersion(request):
    if request.method == 'POST':
        data = request.POST.dict()
        result = PF.delete_version(data['typeMove'],data['move'],data['version'])
        return HttpResponse(result)

def loadVersionJS(request):
    if request.method == 'GET':
        data = request.GET.dict()
        if data['version'] == '0':
            resultado = MF.new_get_table(data['typeMove'],data['move'])
        else:
            resultado = PF.new_get_version_table(data['typeMove'],data['version'],data['move'],data['modify'],data['profile'])
        return resultado

@login_required(login_url=('/'))
def adminProfilesView(request):
    profiles_list = PF.get_all_profiles()
    #print("required")
    return render(request,'admin/adminProfilesList.html',{'profiles':profiles_list})

@login_required(login_url=('/'))
def adminProfileMoves(request,profile):
    if request.method == 'GET':
        data = request.GET.dict()
        if data.get('Tmove'):
            base_data = MF.get_base_data_admin('triple',data)
            assigned = PF.get_assigned(profile,data['Tmove'],'triple')
            base_data['assigned'] = assigned
            base_data['profile'] = selected
            return render(request,'admin/adminProfiles.html',base_data)
        elif data.get('move'):
            base_data = MF.get_base_data_admin('double',data)
            assigned = PF.get_assigned(profile,data['move'],'double')
            base_data['assigned'] = assigned
            base_data['profile'] = selected
            return render(request,'admin/adminProfiles.html',base_data)
        elif data.get('base'):
            base_data = MF.get_base_data_admin('single',data)
            assigned = PF.get_assigned(profile,data['base'],'single')
            base_data['assigned'] = assigned
            base_data['profile'] = selected
            return render(request,'admin/adminProfiles.html',base_data)
    

def adminProfile(request,profile):
    selected = PF.get_profile(profile)
    base_data = {}
    if request.method == 'GET':
        data = request.GET.dict()
        if data.get('Tmove'):
            base_data = MF.get_base_data_admin('triple',data)
            assigned = PF.get_assigned(profile,data['Tmove'],'triple')
        elif data.get('move'):
            base_data = MF.get_base_data_admin('double',data)
            assigned = PF.get_assigned(profile,data['move'],'double')
        elif data.get('base'):
            base_data = MF.get_base_data_admin('single',data)
            assigned = PF.get_assigned(profile,data['base'],'single')
    if base_data:
        as_table = MF.format_table(assigned)
        base_data['as_table'] = as_table
        base_data['assigned'] = assigned
        base_data['profile'] = selected
        return render(request,'admin/adminProfiles.html',base_data)
    
    selected = PF.get_profile(profile)
    moves_list = MF.get_all_smoves()
    total_moves = MF.get_all_moves_dict()
    print("ADMIN PROFILES")
    return render(request,'admin/adminProfiles.html',{'profile':selected,'moves':moves_list,'total':total_moves,'view':'version'})


def assignVersion(request):
    if request.method == 'POST':
        data = request.POST.dict()
        if data['version'] != '0':
            print(data)
            if data['type'] == 'des':
                PF.new_desassign_version(data)
            elif data['type'] == 'as':
                pass
                PF.new_assign_version(data)
    return HttpResponse('hola')

def newProfile(request):
    data = request.POST.dict()
    #print(data)
    Profile.objects.create(profileName=data['name'],description=data['description'])
    return HttpResponse("hola")

def deleteProfile(request,profile):
    profile = Profile.objects.get(id=profile)
    profile.delete()
    return redirect('profiles_list')

def actionProfile(request):
    if request.method == 'POST':
        data = request.POST.dict()
        if data['type'] == 'as':
            return assignProfile(request,data['profile'],data['client'])
        elif data['type'] == 'des':
            return desassignProfile(request,data['profile'],data['client'])

def assignProfile(request,profile,client):
    PF.assign_profile(profile,client)
    return HttpResponse(True)
    #return redirect('client_profile',client)

def desassignProfile(request,profile,client):
    PF.desassign_profile(profile,client)
    return HttpResponse(True)
    #return redirect('client_profile',client)

#cargar jugada y sus versiones con JS & BULMA
@login_required(login_url=('/'))
def QMove(request):
    if request.method == 'GET':
        data = request.GET.dict()
        if data.get('version'):
            move = MF.get_move(data['move'],data['typeMove'])
            versions = move.get_my_version()
            formated = appendVersions(move.colors,versions,data['profile'])
    return HttpResponse(formated)


def profileDup(request,profile):
    print("duplicar")
    PF.duplicate_profile(profile)
    return redirect('profiles_list')

def getDataVersion(request):
    data = request.GET.dict()
    result = PF.get_version_data(data)
    return HttpResponse('hola')

def updateVersion(request):
    data = request.POST.dict()
    result = PF.update_version(data)
    return HttpResponse(result)

def adminViewProfile(request,profile):
    selected = PF.get_profile(profile)
    return render(request,'admin/adminViewProfile.html',{'profile':selected,'view':'base'})

def Qprofiles(request):
    if request.method == 'GET':
        data = request.GET.dict()
        result_list = PF.get_all_profiles_client(data['client'])
        return HttpResponse(result_list)


"""

def PQSingle(request):
    if request.method == 'GET':
        data = request.GET.dict()
        if data.get('version'):
            print('si version')
        move = MF.get_smove(data['move'])
        versions = move.get_my_version()
        formated = appendVersions(move.colors,versions,data['profile'])
    return HttpResponse(formated)

def PQDouble(request):
    if request.method == 'GET':
        data = request.GET.dict()
        if data.get('version'):
            print('si version')
        move = MF.get_dmove(data['move'])
        versions = move.get_my_version()
        formated = appendVersions(move.colors,versions)
    return HttpResponse(formated)

def PQTriple(request):
    if request.method == 'GET':
        data = request.GET.dict()
        if data.get('version'):
            print('si version')
        move = MF.get_tmove(data['move'])
        versions = move.get_my_version()
        formated = appendVersions(move.colors,versions)
    return HttpResponse(formated)
"""