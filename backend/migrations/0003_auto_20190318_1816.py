# Generated by Django 2.1.7 on 2019-03-18 18:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_albumitem_items'),
    ]

    operations = [
        migrations.RenameField(
            model_name='albumitem',
            old_name='items',
            new_name='album',
        ),
    ]