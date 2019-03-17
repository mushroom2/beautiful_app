from django.contrib.auth import get_user_model
from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from django.contrib.postgres.fields import ArrayField, JSONField


class Like(models.Model):
    user = models.ForeignKey(get_user_model(),
                             related_name='likes',
                             on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')


class Album(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.TextField(max_length=1024)
    thumbnail = models.ImageField()
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now=True, )

    def __str__(self):
        return f'{self.name}_{self.owner}'

class AlbumItem(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.TextField(max_length=1024)
    thumbnail = models.ImageField()
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now=True, )
    tags = ArrayField(models.CharField(max_length=30))
    likes = GenericRelation(Like)
    image_metadata = JSONField()
    cloud_url = models.TextField(max_length=2048)
    items = models.ForeignKey(Album, on_delete=models.CASCADE, default=Album.objects.first().id)

    def __str__(self):
        return self.name

    @property
    def total_likes(self):
        return self.likes.count()




