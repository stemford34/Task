from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse


@login_required
def index_page(request):
    return render(request, "TaskManager/main.html/")

