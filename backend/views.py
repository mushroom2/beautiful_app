from rest_framework.views import APIView

from .models import Album, AlbumItem
from django.shortcuts import get_object_or_404
from .serializers import AlbumSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.response import Response


class AlbumViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for Albums.
    """

    def list(self, request):
        queryset = Album.objects.all()
        serializer = AlbumSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Album.objects.all()
        album = get_object_or_404(queryset, pk=pk)
        serializer = AlbumSerializer(album)
        return Response(serializer.data)


class UserView(APIView):

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
