from django.urls import re_path
from . import views

app_name = 'authorization'
urlpatterns = [
    re_path(r'^$', views.authorization, name='authorization'),
    # path('go_index/', include('base.urls')),
    re_path(r'^sign_up/$', views.sign_up, name='sign_up'),
    re_path(r'^sign_in/$', views.sign_in, name='sign_in'),
]