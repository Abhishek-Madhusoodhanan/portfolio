from rest_framework import status
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.template.loader import render_to_string
from .serializers import ContactSerializer
from .models import ContactMessage


@api_view(['POST'])
@throttle_classes([AnonRateThrottle])
def contact_form(request):
    """
    API endpoint to handle contact form submissions.
    Saves to database and sends email notification.
    """
    serializer = ContactSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save to database
        contact = serializer.save()
        
        # Prepare email content
        name = serializer.validated_data['name']
        email = serializer.validated_data['email']
        subject = serializer.validated_data['subject']
        message = serializer.validated_data['message']
        
        # Email to site owner
        email_subject = f"[Portfolio Contact] {subject}"
        email_body = f"""
New contact form submission from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {name}
📧 Email: {email}
📋 Subject: {subject}

💬 Message:
{message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to respond to {name}.
        """
        
        try:
            # Send email to site owner
            send_mail(
                subject=email_subject,
                message=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_EMAIL],
                reply_to=[email],
                fail_silently=False,
            )
            
            # Send confirmation email to user
            confirmation_subject = "Thanks for reaching out! - Abhishek Madhusoodhanan"
            confirmation_body = f"""
Hi {name},

Thank you for getting in touch! I've received your message and will get back to you as soon as possible.

Here's a copy of your message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: {subject}

{message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best regards,
Abhishek Madhusoodhanan
Software Developer Engineer
            """
            
            send_mail(
                subject=confirmation_subject,
                message=confirmation_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
                fail_silently=True,  # Don't fail if confirmation can't be sent
            )
            
            return Response({
                'success': True,
                'message': 'Your message has been sent successfully! I\'ll get back to you soon.'
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            # Log the error (in production, use proper logging)
            print(f"Email error: {str(e)}")
            
            # Still return success since message was saved to database
            return Response({
                'success': True,
                'message': 'Your message has been received! I\'ll get back to you soon.',
                'note': 'Email notification pending.'
            }, status=status.HTTP_201_CREATED)
    
    return Response({
        'success': False,
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def health_check(request):
    """Simple health check endpoint"""
    return Response({
        'status': 'healthy',
        'message': 'Portfolio API is running!'
    })
