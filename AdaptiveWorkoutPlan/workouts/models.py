from django.db import models

class WorkoutPlan(models.Model):
    WORKOUT_TYPES = (
        ('Cardio', 'Cardio'),
        ('Gym', 'Gym'),
        ('Home', 'Home'),
    )
    DIFFICULTY_LEVELS = (
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    )
    
    workout_type = models.CharField(max_length=50, choices=WORKOUT_TYPES)
    difficulty = models.CharField(max_length=50, choices=DIFFICULTY_LEVELS)
    file = models.FileField(upload_to='plans/')  # Assumes you're storing files in the 'plans' directory under media

    def __str__(self):
        return f"{self.difficulty} {self.workout_type} Workout Plan"