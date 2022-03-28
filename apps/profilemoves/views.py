from cmath import sin
from django.http import HttpResponse
from django.shortcuts import render,redirect
from poker.utils import TABLA
from .models import Profile, ProfilesFactory as PF
from principal.models import MovesFactory as MF

def principalView(request):
    return redirect('login')

def newVersion(request):
    if request.method == 'POST':
        data = request.POST.dict()
        PF.new_version(data)
    return HttpResponse("hola")

def load_version(request):
    if request.method == 'POST':
        data = request.POST.dict()
        load_table = PF.get_version_table(data)
        return render(request,'table.html',{'load_table':load_table,'view':'version'})
    elif request.method == 'GET':
        print("ierda2")
        return render(request,'table.html',{'tabla':TABLA,'view':'version'})

def adminProfilesView(request):
    profiles_list = PF.get_all_profiles()
    return render(request,'admin/adminProfilesList.html',{'profiles':profiles_list})

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
        print(as_table)
        base_data['as_table'] = as_table
        base_data['assigned'] = assigned
        base_data['profile'] = selected
        return render(request,'admin/adminProfiles.html',base_data)
    
    selected = PF.get_profile(profile)
    moves_list = MF.get_all_smoves()
    total_moves = MF.get_all_moves_dict()
    return render(request,'admin/adminProfiles.html',{'profile':selected,'moves':moves_list,'total':total_moves})


def assignVersion(request):
    if request.method == 'POST':
        data = request.POST.dict()
        PF.assign_version(data)
    return HttpResponse('hola')

def newProfile(request):
    data = request.POST.dict()
    print(data)
    Profile.objects.create(profileName=data['name'],description=data['description'])
    return HttpResponse("hola")

def deleteProfile(request,profile):
    profile = Profile.objects.get(id=profile)
    profile.delete()
    return redirect('profiles_list')

def assignProfile(request,profile,client):
    PF.assign_profile(profile,client)
    return redirect('client_profile',client)

def desassignProfile(request,profile,client):
    PF.desassign_profile(profile,client)
    return redirect('client_profile',client)