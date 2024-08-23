from django.db import models

class Workout(models.Model):
    workout_type = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=50)
    file = models.FileField(upload_to='workouts/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.workout_type} - {self.difficulty}"