from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def register(request):
    if request.method == "POST":
        print('Response is Sends back to the frontend')
        return JsonResponse({"message": "success"})
    return JsonResponse({"message": "error"})
        
def index(request):
    return HttpResponse("hello")