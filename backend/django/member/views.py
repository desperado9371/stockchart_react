from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import MemberSerializer

from .models import Member

# Create your views here.


def index(request):
    return HttpResponse("Hello world! Member management")


class ListMember(generics.ListCreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
