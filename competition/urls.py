from django.contrib import admin
from django.urls import path
from comapp import views
# from accounts import views as accounts_views
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('allcontent/', views.post, name="allcontent"),
    path('content/', views.addpost, name="content"),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('mypage/', views.mypage, name='mypage'),
    path('signup/', views.signup, name='signup'),   
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)