from rest_framework import serializers
from .models import ContactMessage


class ContactSerializer(serializers.ModelSerializer):
    """Serializer for contact form data"""
    
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message']
    
    def validate_name(self, value):
        if len(value) < 2:
            raise serializers.ValidationError("Name must be at least 2 characters long.")
        return value
    
    def validate_message(self, value):
        if len(value) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters long.")
        return value
