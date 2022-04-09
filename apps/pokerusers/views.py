from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from profilemoves.models import ProfilesFactory as PF
from principal.models import Move, MovesFactory as MF
from .models import UsersFactory as UF


@login_required(login_url=('/'))
def AdminClientList(request):
    client_list = UF.get_all_clients()
    print("required")
    return render(request,'admin/adminClientList.html',{'clients':client_list})

@login_required(login_url=('/'))
def AdminReviewProfileClient(request,client):
    client = UF.get_client(client)
    profiles_list = PF.get_all_profiles()
    my_profiles = PF.get_my_profiles(client)
    return render(request,'admin/adminModClient.html',{'client':client,'profiles':profiles_list,'my_profiles':my_profiles})

@login_required(login_url=('/'))
def modifyClient(request,client):
    if request.method == 'POST':
        data = request.POST.dict()
        UF.modify_client(client,data)
        return redirect('all_clients')
    client = UF.get_client(client)
    return render(request,'admin/modifyClient.html',{'client':client})

@login_required(login_url=('/'))
def NewClient(request):
    if request.method == 'POST':
        data = request.POST.dict()
        new_client = UF.new_client(data)
        if new_client:
            return redirect('all_clients')
    if request.method == 'GET':
        pass
    return render(request,'admin/new_client.html')

def clientNew(request):
    if request.method == 'POST':
        data = request.POST.dict()
        new_client = UF.new_client(data)
        if new_client['status']:
            return redirect('all_clients')
        else:
            return render(request,'general/new_client.html',{'message':new_client['message']})
    if request.method == 'GET':
        pass
    return render(request,'general/new_client.html')

@login_required(login_url=('/'))
def DesactivateClient(request,client):
    UF.desactivate_client(client)
    return redirect('all_clients')

@login_required(login_url=('/'))
def DeleteClient(request,client):
    UF.delete_client(client)
    return redirect('all_clients')

@login_required(login_url=('/'))
def ClientView(request,client):
    user = request.user
    if user.is_authenticated:
        if user.is_client:
            return ClientCV(request,client)
        elif user.is_admin or user.is_staff:
            return AdminCV(request,client)
    else:
        return redirect('principalView')

@login_required(login_url=('/'))
def ClientCV(request,client):
    selected = UF.get_client(client)
    profiles = PF.get_my_profiles(client)
    if request.method == 'GET':
        data = request.GET.dict()
        if data.get('perfil'):
            perfilView = PF.get_profile(data['perfil'])
            moves = Move.objects.all() 
            if data.get('Tmove'):
                total_Data = MF.get_base_data_admin('triple',data) 
                total_Data ['client'] = selected
                total_Data ['profiles'] = profiles
                total_Data ['profileView'] = perfilView
                total_Data ['moves'] = moves
                assigned = PF.get_assigned(data['perfil'],data['Tmove'],'triple')
                total_Data['assigned'] = assigned
                if assigned:
                    table = MF.load_table(assigned.versionId.colors)
                    coment = assigned.versionId.description
                    total_Data['load_table'] = {'cols':table,'coment':coment}
                else:
                    total_Data['load_table'] = {'cols':total_Data['load_table'],'coment':''}
                return render(request,'clients/clientePrincipal.html',total_Data)
            elif data.get('move'):
                total_Data = MF.get_base_data_admin('double',data) 
                total_Data ['client'] = selected
                total_Data ['profiles'] = profiles
                total_Data ['profileView'] = perfilView
                total_Data ['moves'] = moves
                assigned = PF.get_assigned(data['perfil'],data['move'],'double')
                total_Data['assigned'] = assigned
                if assigned:
                    table = MF.load_table(assigned.versionId.colors)
                    coment = assigned.versionId.description
                    total_Data['load_table'] = {'cols':table,'coment':coment}
                else:
                    total_Data['load_table'] = {'cols':total_Data['load_table'],'coment':''}
                return render(request,'clients/clientePrincipal.html',total_Data)
            elif data.get('base'):
                total_Data = MF.get_base_data_admin('single',data) 
                total_Data ['client'] = selected
                total_Data ['profiles'] = profiles
                total_Data ['profileView'] = perfilView
                total_Data ['moves'] = moves
                assigned = PF.get_assigned(data['perfil'],data['base'],'single')
                total_Data['assigned'] = assigned
                if assigned:
                    table = MF.load_table(assigned.versionId.colors)
                    coment = assigned.versionId.description
                    total_Data['load_table'] = {'cols':table,'coment':coment}
                else:
                    total_Data['load_table'] = {'cols':total_Data['load_table'],'coment':''}
                return render(request,'clients/clientePrincipal.html',total_Data)

            return render(request,'clients/clientePrincipal.html',
            {'client':selected,'profiles':profiles,'profileView':perfilView,'moves':moves})
    return render(request,'clients/clientePrincipal.html',{'client':selected,'profiles':profiles})

@login_required(login_url=('/'))
def AdminCV(request,client):
    selected = UF.get_client(client)
    profiles = PF.get_my_profiles(client)
    if request.method == 'GET':
        data = request.GET.dict()
        if data.get('perfil'):
            perfilView = PF.get_profile(data['perfil'])
            moves = Move.objects.all() 
            if data.get('Tmove'):
                total_Data = MF.get_base_data_admin('triple',data) 
                total_Data ['client'] = selected
                total_Data ['profiles'] = profiles
                total_Data ['profileView'] = perfilView
                total_Data ['moves'] = moves
                assigned = PF.get_assigned(data['perfil'],data['Tmove'],'triple')
                total_Data['assigned'] = assigned
                if assigned:
                    total_Data['load_table'] = MF.load_table(assigned.versionId.colors)
                else:
                    pass
                return render(request,'admin/clientePrincipal.html',total_Data)
            elif data.get('move'):
                total_Data = MF.get_base_data_admin('double',data) 
                total_Data ['client'] = selected
                total_Data ['profiles'] = profiles
                total_Data ['profileView'] = perfilView
                total_Data ['moves'] = moves
                assigned = PF.get_assigned(data['perfil'],data['move'],'double')
                total_Data['assigned'] = assigned
                if assigned:
                    total_Data['load_table'] = MF.load_table(assigned.versionId.colors)
                else:
                    pass
                return render(request,'admin/clientePrincipal.html',total_Data)
            elif data.get('base'):
                total_Data = MF.get_base_data_admin('single',data) 
                total_Data ['client'] = selected
                total_Data ['profiles'] = profiles
                total_Data ['profileView'] = perfilView
                total_Data ['moves'] = moves
                assigned = PF.get_assigned(data['perfil'],data['base'],'single')
                total_Data['assigned'] = assigned
                if assigned:
                    total_Data['load_table'] = MF.load_table(assigned.versionId.colors)
                else:
                    #total_Data['load_table'] = MF.load_table()
                    pass
                return render(request,'admin/clientePrincipal.html',total_Data)

            return render(request,'admin/clientePrincipal.html',
            {'client':selected,'profiles':profiles,'profileView':perfilView,'moves':moves})
    return render(request,'admin/clientePrincipal.html',{'client':selected,'profiles':profiles})

@login_required(login_url=('/'))
def create_adminpoker(request):
    result = UF.create_admin()
    return redirect('principalView')

"""

def demo1(request):
    patentes = ['HP1129','XJ2738','JK2994','ZT4160']
    if request.method == 'POST':
        return redirect('DEMO2')
    return render(request,'DEMOCORRAL.html',{'patentes':patentes})
def demo2(request):
    patentes = ['HP1129','XJ2738','JK2994','ZT4160']
    return render(request,'DEMOCORRAL2.html',{'patentes':patentes})
def demo3(request):
    patentes = ['HP1129','XJ2738','JK2994','ZT4160']
    return render(request,'DEMOCORRAL3.html',{'patentes':patentes})
"""