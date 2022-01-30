from django.shortcuts import render
from django.http import HttpResponseRedirect

active_tasks = []
completed_tasks = []

# Pending tasks
def tasks_view(request):
    return render(request, "pending_tasks.html", {"tasks": active_tasks})


# Completed tasks
def completed_view(request):
    return render(request, "completed_tasks.html", {"tasks": completed_tasks})


# All tasks
def all_tasks_view(request):
    return render(
        request,
        "all_tasks.html",
        {"active_tasks": active_tasks, "completed_tasks": completed_tasks},
    )


# Add a task
def add_task_view(request):
    task_to_add = request.GET.get("task")
    active_tasks.append(task_to_add)
    return HttpResponseRedirect("/tasks")


# Delete a task
def delete_task_view(request, index):
    if index <= len(active_tasks):
        del active_tasks[index - 1]
    return HttpResponseRedirect("/tasks")


# Mark task as complete
def complete_task_view(request, index):
    if index <= len(active_tasks):
        completed_tasks.append(active_tasks[index - 1])
        del active_tasks[index - 1]
    return HttpResponseRedirect("/tasks")
