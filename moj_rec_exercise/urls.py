from django.conf.urls import url, include
from django.contrib import admin
from moj_rec_exercise.apps.ui_provider.views import index
from moj_rec_exercise.apps.exercise_provider.views import get_exercise

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^grappelli/', include('grappelli.urls')),  # grappelli URLS
    url(r'^admin/', admin.site.urls),
]
