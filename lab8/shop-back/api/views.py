from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    data = [p.to_json() for p in Product.objects.all()]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

    return JsonResponse(p.to_json())


def category_list(request):
    data = [c.to_json() for c in Category.objects.all()]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

    return JsonResponse(c.to_json())


def products_by_category(request, id):
    try:
        cat = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

    data = [p.to_json() for p in Product.objects.filter(category=cat)]
    return JsonResponse(data, safe=False)