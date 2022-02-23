from dataclasses import field
from tasks.models import Task

# API view created in Django or Django API View
from django.views import View

from django.http.response import JsonResponse

# DRF API View: APIView is a class written for APIs in DRF
from rest_framework.views import APIView

# Response has support for json and xml
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer

# Modelviewset is a bunch of views combined together
# It implements all CRUD ops based on the model
from rest_framework.viewsets import ModelViewSet

# Creating a generic class
class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = ["title", "description", "completed"]


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer  # Lets ModelViewSet know which serailizer to call


# Manually passing data to the TaskSerializer
class TaskListAPI(APIView):
    def get(self, request):
        tasks = Task.objects.filter(deleted=False)
        data = TaskSerializer(tasks, many=True).data
        return Response({"tasks": data})
