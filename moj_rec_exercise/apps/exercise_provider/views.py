from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# from moj_rec_exercise.apps.exercise_provider.models import Test

def get_exercise(request):

    response = JsonResponse({'data': 'test'})
    return response
