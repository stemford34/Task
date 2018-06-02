from django.shortcuts import render


def create_table(request):
    return render(request, "table_editor/table.html")
