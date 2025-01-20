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

Below both a short and a detailed setup is provided, enjoy.

#### Short Installation Guide for Experienced Users
For users familiar with Python, Django, and Git:

1.  Clone the repository:
        git clone https://github.com/Ersdalpy/Web-app-project.git
2.  cd "Web-app-project/AdaptiveWorkoutPlan"
3.  Install dependencies:
        pip install -r requirements.txt
4.  Set up the database:
        python manage.py makemigrations
        python manage.py migrate
5.  Run the development server:
        python manage.py runserver
6.  Open http://127.0.0.1:8000 in your browser.

#### Detailed Installation Guide for Every User.

1. **Download the Project Files**
    Option 1: Use Git (For Terminal Users)
        1. Open your terminal or command prompt.
        2. Enter the following command to clone the repository:
            git clone https://github.com/Ersdalpy/Web-app-project.git
        3. Navigate to the project folder:
            cd "Web-app-project/AdaptiveWorkoutPlan"
    
    Option 2: Download from GitHub Website (For Non-Terminal Users)
        1. Go to the GitHub Repository. (https://github.com/Ersdalpy/Web-app-project.git)
        Click the green "Code" button, then select "Download ZIP".
        Extract the downloaded ZIP file to a folder on your computer.
        Open the extracted folder and navigate to AdaptiveWorkoutPlan.

    Important: Ensure you navigate to the correct directory where requirements.txt and manage.py are stored before proceeding.

2. **Install Python Dependencies**
    Open a terminal in the AdaptiveWorkoutPlan directory:
        1. Windows: Right-click inside the folder and select "Open in Terminal" or "Open in PowerShell".
        2. macOS/Linux: Open the terminal, type cd, press Space, and drag the AdaptiveWorkoutPlan folder into the terminal window. Press Enter.

    Install the required dependencies by typing:
        pip install -r requirements.txt

3. **Apply Database Migrations**
    To be able to download the workout plans you must do the following:
        Set up the SQLite database in terminal by typing these commands:
            python manage.py makemigrations
            python manage.py migrate

4. **Run the Development Server**
    Start the Django server by typing this command in the terminal:
        python manage.py runserver

5. **Open the Application**
    In your browser, enter the following address:
        http://127.0.0.1:8000