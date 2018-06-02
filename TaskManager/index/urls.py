from django.urls import re_path
from django.conf.urls import include
from . import views


app_name = 'index'
urlpatterns = [
    re_path(r'^$', views.index, name='page'),
    # re_path(r'^authorization/', include('TaskManager.apps.authorization.urls', namespace='authorization')),
    # path('go_index/', include('base.urls')),
    # re_path(r'^registration/$', views.sign_up, name='registration'),
    # re_path(r'^login/$', views.sign_in, name='login'),
]