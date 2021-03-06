from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from tasks.models import Task

# Base class we'll be inheriting from to create class based views
from django.views import View
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.forms import ModelForm
from django.core.exceptions import ValidationError
from django.views.generic.detail import DetailView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView
from django.contrib.auth.mixins import LoginRequiredMixin


class AuthorizedTaskManager(LoginRequiredMixin):
    def get_queryset(self):
        tasks = Task.objects.filter(
            deleted=False, completed=False, user=self.request.user
        )
        return tasks


################################ Pending tasks ##########################################
class GenericTaskView(LoginRequiredMixin, ListView):
    queryset = Task.objects.filter(deleted=False, completed=False)
    template_name = "pending_tasks.html"
    context_object_name = "tasks"
    paginate_by = 5

    def get_queryset(self):
        #  The request object will be inside self object. It's not separately available this time
        # Fetch only those tasks created by the logged in user
        search_term = self.request.GET.get("search")
        tasks = Task.objects.filter(
            deleted=False, completed=False, user=self.request.user
        )

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


################################ Task Detail View ##########################################
class GenericTaskDetailView(AuthorizedTaskManager, DetailView):
    model = Task
    template_name = "task_detail.html"


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


class GenericTaskCreateView(LoginRequiredMixin, CreateView):
    # model = Task
    # fields = ("title", "description", "completed")
    form_class = TaskCreateForm  # We created a form manually and passed to to this view
    template_name = "task_create.html"
    success_url = "/tasks"

    # Override the following method present in the base
    def form_valid(self, form):
        """If the form is valid, save the associated model."""
        self.object = form.save()
        self.object.user = self.request.user
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())


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
class GenericTaskUpdateView(AuthorizedTaskManager, UpdateView):
    model = Task
    form_class = TaskCreateForm
    template_name = "task_update.html"
    success_url = "/tasks"


################################ Delete a task ##########################################
class GenericTaskDeleteView(AuthorizedTaskManager, DeleteView):
    model = Task
    template_name = "task_delete.html"
    success_url = "/tasks"


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


################################ Session Storage ##########################################
def session_storage_view(request):
    print(
        request.session
    )  # <django.contrib.sessions.backends.db.SessionStore object at 0x7f8fa8126d90> (It is a dict)

    # Get the total views from the session
    total_views = request.session.get("total_views", 0)
    # Store the value back in the session
    request.session["total_views"] = total_views + 1
    # Render it back to us
    return HttpResponse(
        f"Total views is {total_views} and the user is {request.user} and are they authenticated? {request.user.is_authenticated}"
    )


################################ User Sign Up ##########################################
class UserCreateView(CreateView):
    form_class = UserCreationForm
    template_name = "user_create.html"
    success_url = "/user/login"


class UserLoginView(LoginView):
    template_name = "user_login.html"
