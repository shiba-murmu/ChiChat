from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class RegisterUser(APIView): 
    
    def post(self, request):
        # Dummy logic : return a fixed success message
        
        return Response({
            "message": "User registered successfully (Dummy response)",
            "data" : request.data # This echoes back what frontend sends
        }, status=status.HTTP_201_CREATED)


