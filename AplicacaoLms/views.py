from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, "index.html")

def disciplina(request):    
    return render(request, "disciplina.html")

def login(request):    
    return render(request, "login.html")    

def listadecurso(request):    
    return render(request, "listadecurso.html")

def saiba_mais(request):    
    return render(request, "saiba_mais.html")

def descricao_cursos(request):    
    return render(request, "descricao_cursos.html")

def noticias(request):    
    return render(request, "noticias.html")

def portal(request):    
    return render(request, "portal.html")    