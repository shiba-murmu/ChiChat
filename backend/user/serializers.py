from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class UserLoginSerializer(serializers.Serializer):
    text = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        text = data.get('text')
        password = data.get('password')

        if not text or not password:
            raise serializers.ValidationError("Please provide both username or email and password.")

        if '@' in text:
            user_obj = User.objects.filter(email=text).first()
            if not user_obj:
                raise serializers.ValidationError("User with this email does not exist.")
            username = user_obj.username
        else:
            username = text

        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError("Invalid credentials.")
        if not user.is_active:
            raise serializers.ValidationError("User is not active.")

        data['user'] = user
        return data




class UserRegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    class Meta : 
        model = User
        fields = ['first_name' , 'last_name', 'username', 'email', 'password', 'confirm_password']
        extra_kwargs = {'password' : {'write_only' : True }}

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        
        
         # Check if username already exists
        if User.objects.filter(username=attrs['username']).exists():
            raise serializers.ValidationError({"username": "This username is already taken."})
        
        # Check if email already exists
        if User.objects.filter(email=attrs['email']).exists():
            raise serializers.ValidationError({"email": "This email is already taken."})
        
        
        return attrs

        

    
    def create(self, validated_data):
        validated_data.pop('confirm_password') # remove confirm password
        user = User.objects.create_user(
            username = validated_data['username'],
            email = validated_data['email'],
            password = validated_data['password'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
        )
        return user