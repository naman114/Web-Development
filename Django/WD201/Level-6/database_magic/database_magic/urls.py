"""database_magic URL Configuration

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
from tasks.views import (
    add_task_view,
    all_tasks_view,
    complete_task_view,
    completed_view,
    delete_task_view,
    tasks_view,
    TaskView,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("tasks/", TaskView.as_view()),
    path("completed_tasks/", completed_view),
    path("all_tasks/", all_tasks_view),
    path("add-task/", add_task_view),
    path("complete_task/<int:index>/", complete_task_view),
    path("delete-task/<int:index>/", delete_task_view),
]
