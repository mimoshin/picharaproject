from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Move,DoubleComparation, TripleComparation,ComparativeADD,ComparativeHeader, MovesFactory as MF
from poker.utils import TABLA,BASE,DOUBLE,TRIPLE
from pokerusers.models import UsersFactory as UF

#_____GENERAL VIEWS____________
def loginView(request):
    if request.method == 'POST':
        data = request.POST.dict()
        if data.get('username') and data.get('password'):
            username,password = data['username'],data['password']
            user_auth = authenticate(username=username,password=password)
            if user_auth:
                login(request,user_auth)
                return redirect('principalView')
        return render(request,'login.html')
    elif request.method == 'GET':
        if request.user.is_authenticated:
            return redirect('principalView')
        else:
            return render(request,'login.html')

def logoutUser(request):
    logout(request)
    return redirect('principalView')
#_____ END GENERAL VIEWS____________

#______FILTER VIEWS____________
def principalView(request):
    user = request.user
    if user.is_authenticated:
        if user.is_client:
            return clientPV(request)
        elif user.is_admin or user.is_staff:
            print("QUE WEA 1")
            return adminPV(request)
    else:
        return render(request,'general/generalIndex.html')
#______END FILTER VIEWS________

#______ADMIN VIEWS_____________
@login_required(login_url=('/'))
def adminPV(request):
    total_Data = {}
    if request.method == 'GET':
        data = request.GET.dict()
        total_Data['view'] = 'index'
        if data.get('Tmove'):
            total_Data = MF.get_base_data_admin('triple',data) 
            return render(request,'admin/adminIndex.html',total_Data)
        elif data.get('move'):
            total_Data = MF.get_base_data_admin('double',data) 
            return render(request,'admin/adminIndex.html',total_Data)
        elif data.get('base'):
            total_Data = MF.get_base_data_admin('single',data) 
            return render(request,'admin/adminIndex.html',total_Data)
    moves = Move.objects.all()
    return render(request,'admin/adminIndex.html',{'moves':moves,'tabla':TABLA,'view':'index'})

@login_required(login_url=('/'))
def administrationView(request):
    if request.method == 'GET':
        data = request.GET.dict()
        if data.get('Tmove'):
            total_Data = MF.get_base_data_admin('triple',data) 
            return render(request,'admin/adminPrincipal.html',total_Data)
        elif data.get('move'):
            total_Data = MF.get_base_data_admin('double',data) 
            return render(request,'admin/adminPrincipal.html',total_Data)
        elif data.get('base'):
            total_Data = MF.get_base_data_admin('single',data) 
            return render(request,'admin/adminPrincipal.html',total_Data)

    moves = Move.objects.all()
    return render(request,'admin/adminPrincipal.html',{'moves':moves,'tabla':TABLA})
#______END ADMIN VIEWS_________

#______CLIENT VIEWS_____________
@login_required(login_url=('/'))
def clientPV(request):
    return render(request,'clients/clientIndex.html')
#______END CLIENT VIEWS_________

def moveView(request):
    if request.method == 'GET':
        data = request.GET.dict()
        total_Data = MF.get_base_data('single',data) 
        return render(request,'general/generalMoves.html',total_Data)
        
def doubleView(request):
    if request.method == 'GET':
        data = request.GET.dict()
        total_Data = MF.get_base_data('double',data)
        return render(request,'general/generalDMoves.html',total_Data)

def tripleView(request):
    if request.method == 'GET':
        data = request.GET.dict()
        total_Data = MF.get_base_data('triple',data)
        return render(request,'general/generalTMoves.html',total_Data)
    

def principalSaveView(request):
    moves = Move.objects.all()
    headers = ComparativeHeader.objects.all()
    adds = ComparativeADD.objects.all()
    return render(request,'principal.html',{'moves':moves,'groups':headers,'adds':adds,'tabla':TABLA})
#____________End General Views_____________________________



def buttonView(request,idMove):
    if request.method == 'POST':
        move = Move.objects.get(id=idMove)
        move.imagenMove = request.FILES['imagenp']
        move.save()
        print("METODO POST",move,request.FILES)
        #fileimg.objects.create(doc=request.FILES['imagenp'])
        return redirect('login')

    if request.method == 'GET':
        data = request.GET.dict()
        move = Move.objects.get(id=data['id'])
    return render(request,'index3.html',{'move':move})

def crearbase(request):
    for bas in BASE:
        try:
            Move.objects.create(id=bas['id'],moveName=bas['name'],colors=bas['colors'])
        except:
            print("Error al crear MOVE")
    return redirect('admin_principal')

def creardoble(request):
    for bas in DOUBLE:
        for comp in bas['comps']:
            try:
                if comp.get('colors'):
                    DoubleComparation.objects.create(id=comp['id'],moveId_id=bas['base'],nameComparation=comp['name'],colors=comp['colors'])
                else:
                    DoubleComparation.objects.create(id=comp['id'],moveId_id=bas['base'],nameComparation=comp['name'])
            except Exception as e:
                print("Error al crear doble",e)
    return redirect('admin_principal')

def creartriple(request):
    for bas in TRIPLE:
        for comp in bas['comps']:
            try:
                TripleComparation.objects.create(id=comp['id'],doubleId_id=bas['base'],nameComparation=comp['name'])
            except Exception as e:
                print("Error al crear doble",e)
    return redirect('admin_principal')


def eliminardata(request):
    todos = Move.objects.all()
    for x in todos:
        x.delete()
    return redirect('admin_principal')


def savedata(request):
    if request.method == 'POST':
        data = request.POST.dict()
        MF.save_colors(data)
        return HttpResponse("hola")

def deletedata(request):
    if request.method == 'POST':
        data = request.POST.dict()
        MF.delete_colors(data)
        return HttpResponse("hola")

#Pruebas
def vistaPrueba(request):
    moves = Move.objects.all()
    headers = ComparativeHeader.objects.all()
    adds = ComparativeADD.objects.all()
    return render(request,'index4.html',{'moves':moves,'groups':headers,'adds':adds,'tabla':TABLA})