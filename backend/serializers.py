from rest_framework import serializers
from .models import Album


class UserSerializer(serializers.Serializer):
    # email = serializers.EmailField()
    username = serializers.CharField(max_length=100)


class AlbumSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True, max_length=30)
    description = serializers.CharField(required=True, max_length=1024)
    thumbnail = serializers.ImageField(required=True, )
    created_on = serializers.DateTimeField(required=True, )

    class Meta:
        model = Album
        fields = ('id', 'owner', 'name', 'description', 'thumbnail', 'created_on', )


