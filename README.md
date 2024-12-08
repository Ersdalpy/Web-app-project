# Adaptive Workout Plan

Adaptive Workout Plan is a single-page web application that provides personalized workout plans based on user-selected workout type and difficulty level. Users can download a PDF of their workout plan, restart the process, and view personalized trainer details.

---

## Features

- **Dynamic Workout Selection:** Choose your workout type and difficulty level.
- **Personalized Trainer:** See tailored trainer message at the end.
- **PDF Download:** Download your workout plan as a PDF.
- **Responsive Design:** Works across different screen sizes.

---

## Technology Stack Used

- **Frontend:** HTML, TypeScript, Tailwind CSS
- **Backend:** Django, SQLite

---

## Installation Guide

### Prerequisites

To review this project, you need:

1. **Python** (3.9 or higher):  
   [Download Python](https://www.python.org/downloads/)
2. **A Modern Browser** (e.g., Chrome, Firefox, Edge).  
   No additional installations are required for Tailwind CSS, as the project uses the CDN.


### Setup Instructions

1. **Download the Project Files**
    Clone or download the repository:
        ```bash
        git clone https://github.com/Ersdalpy/Web-app-project.git
        cd Web-app-project

2. **Install Python Dependencies**
    Install the required backend libraries:
        pip install -r requirements.txt

3. **Apply Database Migrations**
    Set up the SQLite database in terminal:
        python manage.py makemigrations
        python manage.py migrate

4. **Run the Development Server**
    Start the Django server:
        python manage.py runserver

5. **Open the Application**
    In your browser, enter the following address:
        http://127.0.0.1:8000