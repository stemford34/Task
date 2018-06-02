from django.apps import AppConfig


class Table_editorAppConfig(AppConfig):
    name = 'TaskManager.table_editor'
    label = 'table_editor'
    verbose_name = 'Table_editor'

    # def ready(self):
    #     import TaskManager.apps.index.signals

default_app_config = 'TaskManager.table_editor.Table_editorAppConfig'