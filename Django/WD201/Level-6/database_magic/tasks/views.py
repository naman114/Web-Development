from django.http import HttpResponseRedirect
from django.shortcuts import render
from tasks.models import Task

# Base class we'll be inheriting from to create class based views
from django.views import View
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView
from django.forms import ModelForm
from django.core.exceptions import ValidationError


################################ Pending tasks ##########################################
class GenericTaskView(ListView):
    queryset = Task.objects.filter(deleted=False, completed=False)
    template_name = "pending_tasks.html"
    context_object_name = "tasks"
    paginate_by = 5

    def get_queryset(self):
        #  The request object will be inside self object. It's not separately available this time
        search_term = self.request.GET.get("search")
        tasks = Task.objects.filter(deleted=False, completed=False)

        if search_term:
            tasks = tasks.filter(title__icontains=search_term)

        return tasks


class TaskView(View):
    # The get method is called for get requests
    def get(self, request):
        search_term = request.GET.get("search")
        return render(
            request, "pending_tasks.html", {"tasks": get_tasks("pending", search_term)}
        )

    # The post method is called for post requests
    def post(self, request):
        pass


def tasks_view(request):
    search_term = request.GET.get("search")
    return render(
        request, "pending_tasks.html", {"tasks": get_tasks("pending", search_term)}
    )


################################ Completed tasks ##########################################
def completed_view(request):
    search_term = request.GET.get("search")
    return render(
        request, "completed_tasks.html", {"tasks": get_tasks("completed", search_term)}
    )


################################ All tasks ##########################################
def all_tasks_view(request):
    search_term = request.GET.get("search")
    return render(
        request,
        "all_tasks.html",
        {
            "active_tasks": get_tasks("pending", search_term),
            "completed_tasks": get_tasks("completed", search_term),
        },
    )


################################ Add a task ##########################################
class TaskCreateForm(ModelForm):
    def clean_title(self):
        # cleaned_data is django's representation of all data collected from the form
        title = self.cleaned_data["title"]
        if len(title) < 10:
            raise ValidationError("Error: Length must be 10 characters")
        return title.upper()

    class Meta:
        model = Task
        fields = ("title", "description", "completed")


class GenericTaskCreateView(CreateView):
    # model = Task
    # fields = ("title", "description", "completed")
    form_class = TaskCreateForm  # We created a form manually and passed to to this view
    template_name = "task_create.html"
    success_url = "/tasks"


class CreateTaskView(View):
    def get(self, request):
        return render(request, "task_create.html")

    def post(self, request):
        # Getting data from request body
        task_to_add = request.POST.get("task")
        Task(title=task_to_add).save()
        return HttpResponseRedirect("/tasks")


def add_task_view(request):
    task_to_add = request.GET.get("task")
    Task(title=task_to_add).save()
    return HttpResponseRedirect("/tasks")


################################ Update a task ##########################################
class GenericTaskUpdateView(UpdateView):
    model = Task
    form_class = TaskCreateForm
    template_name = "task_update.html"
    success_url = "/tasks"


################################ Delete a task ##########################################
def delete_task_view(request, index):
    Task.objects.filter(id=index).update(deleted=True)
    return HttpResponseRedirect("/tasks")


################################ Mark task as complete ##########################################
def complete_task_view(request, index):
    Task.objects.filter(id=index).update(completed=True)
    return HttpResponseRedirect("/tasks")


################################ Helper function to return pending tasks and completed tasks ##########################################
def get_tasks(task_type, search_term):
    tasks = None
    if task_type == "pending":
        tasks = Task.objects.filter(deleted=False, completed=False)
    elif task_type == "completed":
        tasks = Task.objects.filter(completed=True)

    if search_term:
        tasks = tasks.filter(title__icontains=search_term)

    return tasks
