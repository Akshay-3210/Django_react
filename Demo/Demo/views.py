from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("hello world.You are at chai aur django home page")
    return render(request, 'website/index.html', {
        'frontend_dev_server_url': settings.FRONTEND_DEV_SERVER_URL,
    })

def about(request):
    return HttpResponse("hello world.You are at chai aur django about page")

def contact(request):
    return HttpResponse("hello world.You are at chai aur django contact page")

