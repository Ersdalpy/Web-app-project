from django.shortcuts import render
from django.http import HttpResponse
from .models import WorkoutPlan
import os

def download_plan(request, workout_type, difficulty):
    try:
        # Fetch the workout plan from the database based on workout type and difficulty
        workout_plan = WorkoutPlan.objects.get(workout_type=workout_type, difficulty=difficulty)

        # Extract the base file name without the path
        base_filename = os.path.basename(workout_plan.file.name)
        
        # Prepare the file response
        response = HttpResponse(workout_plan.file, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="{base_filename}"'
        
        return response
    except WorkoutPlan.DoesNotExist:
        return HttpResponse("WOOPS, something went wrong.", status=404)
    
def index(request):
    # Renders your main template
    return render(request, 'index.html')
