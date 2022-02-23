from django.contrib.auth.models import User
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
from rest_framework.permissions import IsAuthenticated

# Django filters
from django_filters.rest_framework import (
    DjangoFilterBackend,
    FilterSet,
    CharFilter,
    ChoiceFilter,
)

STATUS_CHOICES = (
    ("PENDING", "PENDING"),
    ("IN_PROGRESS", "IN_PROGRESS"),
    ("COMPLETED", "COMPLETED"),
    ("CANCELLED", "CANCELLED"),
)


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("first_name", "last_name", "username")


class TaskFilter(FilterSet):
    title = CharFilter(lookup_expr="icontains")
    status = ChoiceFilter(choices=STATUS_CHOICES)


class TaskSerializer(ModelSerializer):
    # Nesting serializer for having user data with each task
    # Without the following line, it would display the user's id only
    # read_only means the user can't edit these fields
    user = UserSerializer(read_only=True)

    class Meta:
        model = Task
        fields = ["title", "description", "completed", "user"]


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer  # Lets ModelViewSet know which serailizer to call

    # If the following conditions are true, the user has access to the api
    permission_classes = (IsAuthenticated,)

    # Filter
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TaskFilter

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user, deleted=False)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# Manually passing data to the TaskSerializer
class TaskListAPI(APIView):
    def get(self, request):
        tasks = Task.objects.filter(deleted=False)
        data = TaskSerializer(tasks, many=True).data
        return Response({"tasks": data})
