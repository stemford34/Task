from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.urls import reverse
from django.conf.urls import url

from django.shortcuts import render
    # , render_to_response
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import include
#from base import urls
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import User


def authorization(request):
    """Authorization page rendering"""
    return render(request, "authorization/authorization.html")


def sign_up(request):
    """New user registration"""
    newUser = User(first_name=request.POST.get('f_name'), last_name=request.POST.get('s_name'),
                   username=request.POST.get('login'), email=request.POST.get('email'),
                   location=request.POST.get('location'), password=request.POST.get('password'))

    newUser.save()
    return HttpResponseRedirect(reverse('index'))


def sign_in(request):
    # print(request.POST.get['login'])
    user = authenticate(username=request.POST.get('login'), password=request.POST.get('password'))

    if user is not None:
        if user.is_active:
            print("User is valid, active and authenticated")
        else:
            print("The password is valid, but the account has been disabled!")
    else:
        print("The username and password were incorrect.")
    return HttpResponseRedirect(request, reverse('index:page'))


# def log_out(request):
#     logout(request)


# def go_to_index(request)
