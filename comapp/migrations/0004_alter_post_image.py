# Generated by Django 4.2.1 on 2023-05-24 04:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comapp', '0003_post'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='media/'),
        ),
    ]