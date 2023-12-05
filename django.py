from django.shortcuts import render

def your_view(request):
    content = {
        'content1': 'абай лох',
        'content2': 'аман лох 2',
        'content3': 'влад лох 3',
    }
    return render(request, 'index.html', content)
