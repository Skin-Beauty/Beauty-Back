# Generated by Django 4.2.1 on 2023-05-24 03:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='freecomment',
            name='post',
        ),
        migrations.RemoveField(
            model_name='freepost',
            name='author',
        ),
        migrations.RemoveField(
            model_name='post',
            name='user',
        ),
        migrations.RemoveField(
            model_name='user',
            name='feedback',
        ),
        migrations.RemoveField(
            model_name='user',
            name='info',
        ),
        migrations.RemoveField(
            model_name='user',
            name='main_act',
        ),
        migrations.RemoveField(
            model_name='user',
            name='mbti',
        ),
        migrations.RemoveField(
            model_name='user',
            name='meeting',
        ),
        migrations.RemoveField(
            model_name='user',
            name='ongoing',
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
        migrations.DeleteModel(
            name='FreeComment',
        ),
        migrations.DeleteModel(
            name='FreePost',
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
