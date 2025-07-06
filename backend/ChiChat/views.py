from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse


class register(APIView):
    def get(self, request):
        # write your dummy data : 
        return Response({"message": "Hello, world. You're at the ChiChat index."}, status=status.HTTP_200_OK)