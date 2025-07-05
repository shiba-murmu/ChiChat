from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. Your server is running.")