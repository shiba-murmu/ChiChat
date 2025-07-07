from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.authtoken.models import Token
from .serializers import UserRegisterSerializer

from rest_framework_simplejwt.tokens import RefreshToken  # importing RefreshToken


@api_view(['POST'])
def register(request):
    serializer = UserRegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()  # triggers serializer.create()
        # token, _ = Token.objects.get_or_create(user=user)  # generates token
        
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        
        
        return Response({
            'message': 'Registered successfully.',
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'username': user.username,
            'email': user.email
        }, status=status.HTTP_201_CREATED)

    # 🔧 THIS LINE WAS BROKEN — now fixed:
    
    return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
