from rest_framework import serializers
from .models import Album


class UserSerializer(serializers.Serializer):
    # email = serializers.EmailField()
    username = serializers.CharField(max_length=100)


class AlbumSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True, max_length=30)
    description = serializers.CharField(required=True, max_length=1024)
    thumbnail = serializers.ImageField(required=False, allow_empty_file=True, allow_null=True)
    created_on = serializers.DateTimeField(required=False)

    class Meta:
        model = Album
        fields = ('id', 'owner', 'name', 'description', 'thumbnail', 'created_on', )


