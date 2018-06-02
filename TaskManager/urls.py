"""base URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import re_path, path
from django.conf.urls import include


urlpatterns = [
    re_path(r'^', include('TaskManager.index.urls', namespace='index')),
    # re_path(r'^', include('TaskManager.authorization.urls', namespace='index')),
    re_path(r'^authorization/', include('TaskManager.authorization.urls', namespace='authorization')),
    re_path(r'^table_editor/', include('TaskManager.table_editor.urls', namespace='table_editor')),
    # path('api-auth/', include('rest_framework.urls')),
    # path('handler/', views.handler, name="handler"),
    re_path(r'^admin/', admin.site.urls),
]
