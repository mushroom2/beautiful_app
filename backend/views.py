from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from .models import Album, AlbumItem
from django.shortcuts import get_object_or_404
from .serializers import AlbumSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Album

class AlbumViewSet(viewsets.ModelViewSet):
    serializer_class = AlbumSerializer
    """
    A simple ViewSet for Albums.
    """
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        queryset = Album.objects.all()
        serializer = AlbumSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Album.objects.all()
        album = get_object_or_404(queryset, pk=pk)
        serializer = AlbumSerializer(album)
        return Response(serializer.data)

    def create(self, request):
        user = request.user
        serializer = AlbumSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        album = Album.objects.create(name=serializer.validated_data['name'],
                                     description=serializer.validated_data['description'],
                                     thumbnail=serializer.validated_data['thumbnail'],
                                     owner=user)
        return Response(serializer.data)






class UserView(APIView):

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
