from django.shortcuts import redirect, render


def principalView(request):
    return redirect('login')

def create_profiles(request):
    if request.method == 'POST':
        pass
    elif request.method == 'GET':
        pass
    return redirect('login')