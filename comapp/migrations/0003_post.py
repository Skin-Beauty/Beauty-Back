# Generated by Django 4.2.1 on 2023-05-24 04:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comapp', '0002_remove_freecomment_post_remove_freepost_author_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
            ],
        ),
    ]
