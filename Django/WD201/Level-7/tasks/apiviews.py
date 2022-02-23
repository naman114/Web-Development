from tasks.models import Task

# API view created in Django or Django API View
from django.views import View

from django.http.response import JsonResponse

# DRF API View: APIView is a class written for APIs in DRF
from rest_framework.views import APIView

# Response has support for json and xml
from rest_framework.response import Response


class TaskListAPI(APIView):
    def get(self, request):
        tasks = Task.objects.filter(deleted=False)
        data = []
        for task in tasks:
            data.append({"title": task.title})
        return Response({"tasks": data})
