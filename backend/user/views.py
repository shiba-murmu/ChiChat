from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.authtoken.models import Token
from .serializers import UserRegisterSerializer , UserLoginSerializer

from rest_framework_simplejwt.tokens import RefreshToken  # importing RefreshToken


# views.py
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from .models import EmailOTP
import random

def generate_otp():
    return str(random.randint(100000, 999999))

@api_view(['POST'])
def send_otp(request):
    email = request.data.get('email')
    if not email:
        return Response({"error": "Email is required."}, status=400)

    otp = generate_otp()

    EmailOTP.objects.create(email=email, otp=otp)

    send_mail(
        subject='Your ChiChat OTP',
        message=f'Welcome to ChiChat!, Your  OTP code is: {otp}. Do not share it with anyone.',
        from_email='chichat.socialmedia@gmail.com',
        recipient_list=[email],
    )

    return Response({"message": "OTP sent to email."}, status=200)

@api_view(['POST'])
def verify_otp(request):
    email = request.data.get('email')
    otp = request.data.get('otp')

    if not email or not otp:
        return Response({"error": "OTP required."}, status=400)

    try:
        otp_obj = EmailOTP.objects.filter(email=email).latest('created_at')
    except EmailOTP.DoesNotExist:
        return Response({"error": "OTP not found."}, status=404)

    if otp_obj.is_expired():
        return Response({"error": "OTP expired."}, status=400)

    if otp_obj.otp != otp:
        return Response({"error": "Invalid OTP."}, status=400)

    return Response({"message": "OTP verified successfully."}, status=200)


@api_view(['POST'])
def login(request):
    serializer = UserLoginSerializer(data=request.data)
    
    if serializer.is_valid():
        user = serializer.validated_data['user']
        
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'message': 'Login successful.',
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'username': user.username,
            'email': user.email
        }, status=status.HTTP_200_OK)

    # ✅ PRINT errors for debugging
    # print("Serializer errors:", serializer.errors)
    # print("Request data:", request.data)

    return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def login(request):
#     serializer = UserLoginSerializer(data=request.data)
    
#     if serializer.is_valid():
#         user = serializer.validated_data['user']
        
#         # ✅ Generate JWT tokens
#         refresh = RefreshToken.for_user(user)
        
#         return Response({
#             'message': 'Login successful.',
#             'refresh': str(refresh),
#             'access': str(refresh.access_token),
#             'username': user.username,
#             'email': user.email
#         }, status=status.HTTP_200_OK)
    
#     # ❌ You were missing this block:
#     return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def register(request):
    
    # views for registration
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

