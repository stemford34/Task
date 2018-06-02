from django.apps import AppConfig


class IndexAppConfig(AppConfig):
    name = 'TaskManager.index'
    label = 'index'
    verbose_name = 'Index'

    # def ready(self):
    #     import TaskManager.apps.index.signals

default_app_config = 'TaskManager.index.IndexAppConfig'