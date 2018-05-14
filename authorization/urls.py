from django.urls import path

from . import views

app_name = 'authorization'
urlpatterns = [
    path('', views.authorization, name='authorization'),
    path('registration/', views.registration, name='registration'),
    # path(r'login/$', views.login, name='login'),
]