from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def index(request):

    context = {'data': 'test'}
    response = render(request, 'index.html', context)
    return response


def get_exercise(request):

    response = JsonResponse({'data': 'test'})
    return response
