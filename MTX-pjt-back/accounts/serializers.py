from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie

class ProfileSerializer(serializers.ModelSerializer):

    # class ReviewSerializer(serializers.ModelSerializer):

    #     class Meta:
    #         model = Review
    #         fields = ('title',)

    
    class Meta:
        model = get_user_model()
        fields = '__all__'