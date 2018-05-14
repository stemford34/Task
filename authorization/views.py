from django.shortcuts import render, render_to_response
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate
from TaskManager import urls
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import User


def authorization(request):
    return render(request, "TaskManager/authorization.html/")


def registration(request):
    newUser = User(first_name=request.POST.get('f_name'), last_name=request.POST.get('s_name'),
                   username=request.POST.get('login'), email=request.POST.get('email'),
                   location=request.POST.get('location'), password=request.POST.get('password'))

    newUser.save()
    return HttpResponseRedirect("TaskManager/authorization.html/")


def login(request):
    user = authenticate(username=request.POST.get['login'], password=request.POST.get['password'])

    if user is not None:
        if user.is_active:
            print("User is valid, active and authenticated")
        else:
            print("The password is valid, but the account has been disabled!")
    else:
        print("The username and password were incorrect.")
    return HttpResponseRedirect(index_page)


def logout(request):
    logout(request)