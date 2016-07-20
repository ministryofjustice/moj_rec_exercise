from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def index(request):

    context = {'app_title': 'MoJ Recruitment Exercise'}
    response = render(request, 'index.html', context)
    return response
