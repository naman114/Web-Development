"""task_manager URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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
from django.urls import path

# To send an HttpResponse for a request
from django.http import HttpResponse

# Shortcut to render a file
from django.shortcuts import render


def tasks_view(request):
    # Sending status code
    # return HttpResponse(status=401)

    # content is a positional parameter while status is a keyword based parameter
    # return HttpResponse("<h1>Hello World 200!</h1>", status=200)

    # render static page
    # return render(request, "tasks.html")

    # render page with data using the 'context' dictionary
    return render(
        request, "tasks.html", {"tasks": ["water the plants", "eat dinner", "workout"]}
    )


urlpatterns = [path("admin/", admin.site.urls), path("tasks/", tasks_view)]
