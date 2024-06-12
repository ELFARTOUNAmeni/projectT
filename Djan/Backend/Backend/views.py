from django.http import JsonResponse, HttpResponse

def api_data(request):
    return JsonResponse({"message": "Hello from Django!"})

def home(request):
    return HttpResponse("Welcome to the home page. Go to /api/data/ for the API.")
