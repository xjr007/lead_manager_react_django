"""
API set-up
"""
from rest_framework import viewsets, permissions
from leads.models import Lead
from .serializers import LeadSerializer


class LeadViewSet(viewsets.ModelViewSet):
    """
    Lead Viewset
     - read/update/delete go to viewsets for more info
     - use defualt routes and make all requests
    """
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
