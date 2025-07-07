from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.authtoken.models import Token
from .serializers import UserRegisterSerializer

@api_view(['POST'])
def register(request):
    serializer = UserRegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()  # triggers serializer.create()
        # token, _ = Token.objects.get_or_create(user=user)  # generates token
        print('Data is saved into the database')
        return Response({
            'message': 'Registered successfully.',
            # 'token': token.key,
            'username': user.username,
            'email': user.email
        }, status=status.HTTP_201_CREATED)

    # 🔧 THIS LINE WAS BROKEN — now fixed:
    
    return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
