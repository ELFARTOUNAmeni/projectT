from django.contrib import admin
from django.urls import path
from .views import api_data, home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/data/', api_data, name='api_data'),
    path('', home, name='home'),  # This line adds the default home view
]
