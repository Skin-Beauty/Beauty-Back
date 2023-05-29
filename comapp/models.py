from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)

class UserManager(BaseUserManager):
    # user 생성
    def create_user(self, username, id, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(
            username=username,
            id=id,
            email=self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    # super_user 생성
    def create_superuser(self, username, id, email, password):
        user = self.create_user(
            username,
            id,
            email,
            password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

# 일반 사용자 사용 model
class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email',
        max_length=255,
        unique=True,
        null=False
    )
    username = models.CharField(max_length=30, unique=True, null=False, default="")
    id = models.CharField(max_length=30, unique=True, null=False, primary_key=True)
    is_admin = models.BooleanField(default=False)
    objects = UserManager()

    USERNAME_FIELD = 'id'
    REQUIRED_FIELDS = ['username', 'email',]

    def __str__(self):
        return self.id

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin
    
# # 피부타입 이미지 업로드
# class Post(models.Model):
#     image = models.ImageField(upload_to = "media/", null=True, blank=True)

#     def __str__(self):
#         return str(self.title)