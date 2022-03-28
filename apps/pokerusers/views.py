from django.shortcuts import redirect, render
from profilemoves.models import ProfilesFactory as PF
from principal.models import Move, MovesFactory as MF
from .models import UsersFactory as UF

def AdminClientList(request):
    client_list = UF.get_all_clients()
    return render(request,'admin/adminClientList.html',{'clients':client_list})

def AdminReviewProfileClient(request,client):
    client = UF.get_client(client)
    profiles_list = PF.get_all_profiles()
    my_profiles = PF.get_my_profiles(client)
    return render(request,'admin/adminModClient.html',{'client':client,'profiles':profiles_list,'my_profiles':my_profiles})

def NewClient(request):

    if request.method == 'POST':
        data = request.POST.dict()
        new_client = UF.new_client(data)
        if new_client:
            return redirect('all_clients')
    if request.method == 'GET':
        pass
    return render(request,'admin/new_client.html')


def DesactivateClient(request,client):
    UF.desactivate_client(client)
    return redirect('all_clients')

def DeleteClient(request,client):
    UF.delete_client(client)
    return redirect('all_clients')


def ClientView(request,client):
    user = request.user
    if user.is_authenticated:
        if user.is_client:
            return ClientCV(request,client)
        elif user.is_admin or user.is_staff:
            return AdminCV(request,client)
    else:
        return redirect('principalView')

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
                    total_Data['load_table'] = MF.load_table2(assigned.versionId.colors)
                else:
                    pass
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
                    total_Data['load_table'] = MF.load_table2(assigned.versionId.colors)
                else:
                    pass
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
                    total_Data['load_table'] = MF.load_table2(assigned.versionId.colors)
                else:
                    #total_Data['load_table'] = MF.load_table2()
                    pass
                return render(request,'clients/clientePrincipal.html',total_Data)

            return render(request,'clients/clientePrincipal.html',
            {'client':selected,'profiles':profiles,'profileView':perfilView,'moves':moves})
    return render(request,'clients/clientePrincipal.html',{'client':selected,'profiles':profiles})

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
                    total_Data['load_table'] = MF.load_table2(assigned.versionId.colors)
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
                    total_Data['load_table'] = MF.load_table2(assigned.versionId.colors)
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
                    total_Data['load_table'] = MF.load_table2(assigned.versionId.colors)
                else:
                    #total_Data['load_table'] = MF.load_table2()
                    pass
                return render(request,'admin/clientePrincipal.html',total_Data)

            return render(request,'admin/clientePrincipal.html',
            {'client':selected,'profiles':profiles,'profileView':perfilView,'moves':moves})
    return render(request,'admin/clientePrincipal.html',{'client':selected,'profiles':profiles})


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