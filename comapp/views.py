from django.shortcuts import render, redirect, get_object_or_404
from .models import User,Post
from django.core.paginator import Paginator
from django.db.models import Q
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)
from django.contrib import auth # auth를 통해 로그인, 로그아웃 기능 구현

def login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = auth.authenticate(request, username=username, password=password)
    
        # 실제로 장고 안에 존재하는 회원이라면 로그인 해주기
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else: 
            return render(request, 'bad_login.html')
    else:
        return render(request, 'login.html')

def logout(request):
    auth.logout(request)
    return redirect('home')

def signup(request):
    if request.method == "POST":
        if request.POST['password'] == request.POST['repeat']:
            # 회원가입
            new_user = User.objects.create_user(username=request.POST['username'],id=request.POST['id'],  password=request.POST['password'], email=request.POST['email'],)
            # 로그인
            auth.login(request, new_user)
            # 홈 리다이렉션
            return redirect('home')
    return render(request, 'register.html')

#  홈페이지
def home(request):
    return render(request, 'base.html')

def post(request):
    return render(request,'allcontent.html')

def addpost(request):
    return render(request,'content.html')

#MYPAGE
def mypage(request):
    if request.method=="POST":
        post = Post()
        post.image = request.FILES['image']
        post.save()
        return redirect('/mypage')
    else:
        post = Post()
        return render(request,'mypage.html',{'post':post})