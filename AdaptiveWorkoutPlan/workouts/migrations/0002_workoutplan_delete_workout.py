# Generated by Django 5.1 on 2024-08-27 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workouts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkoutPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workout_type', models.CharField(choices=[('Cardio', 'Cardio'), ('Gym', 'Gym'), ('Home', 'Home')], max_length=50)),
                ('difficulty', models.CharField(choices=[('Beginner', 'Beginner'), ('Intermediate', 'Intermediate'), ('Advanced', 'Advanced')], max_length=50)),
                ('file', models.FileField(upload_to='plans/')),
            ],
        ),
        migrations.DeleteModel(
            name='Workout',
        ),
    ]
