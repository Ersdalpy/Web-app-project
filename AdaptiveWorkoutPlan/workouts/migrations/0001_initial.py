# Generated by Django 5.1 on 2024-08-21 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Workout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workout_type', models.CharField(max_length=100)),
                ('difficulty', models.CharField(max_length=50)),
                ('file', models.FileField(upload_to='workouts/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
