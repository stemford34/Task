from django.apps import AppConfig


class AuthorizationAppConfig(AppConfig):
    name = 'TaskManager.authorization'
    label = 'authorization'
    verbose_name = 'Authorization'

    # def ready(self):
    #     import TaskManager.apps.index.signals

default_app_config = 'TaskManager.authorization.AuthorizationAppConfig'