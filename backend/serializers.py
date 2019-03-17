from rest_framework import serializers
from .models import Album


class AlbumSerializer(serializers.Serializer):
    name = serializers.CharField(required=True, max_length=30)
    description = serializers.CharField(required=True, max_length=1024)
    thumbnail = serializers.ImageField(required=True, )
    created_on = serializers.DateTimeField(required=True, )

    class Meta:
        model = Album
        fields = ('owner', 'name', 'description', 'thumbnail', 'created_on')


