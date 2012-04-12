import json

from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect

def home(request):
	return render_to_response("index.html")

def venue_search(request):
	response =  [
			{ "label" : "A Bar", "value" : "a bar" }
	]
	return HttpResponse(json.dumps(response))
