from django.urls import re_path
from . import views

app_name = 'table_editor'
urlpatterns = [
    re_path(r'^$', views.create_table, name='create_table'),
    # re_path(r'^/$', views.index_page, name='index_page'),
]