// Function to handle workout type selection
function handleWorkoutSelection(event: Event) {
    const selectedWorkout = event.currentTarget as HTMLElement;

    // Replace workout selection with difficulty selection
    const selectionContainer = document.getElementById('selection-container');
    if (selectionContainer) {
        // Clear current content
        selectionContainer.innerHTML = '';

        // Create difficulty options
        const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
        difficulties.forEach(level => {
            const div = document.createElement('div');
            div.className = 'w-1/4 p-8 bg-white shadow-md cursor-pointer text-center workout-option';
            div.innerHTML = `<h2 class="text-xl font-bold">${level}</h2>`;
            div.addEventListener('click', handleIntensitySelection);
            selectionContainer.appendChild(div);
        });
    }
}

// Function to handle intensity selection
function handleIntensitySelection(event: Event) {
    // Remove the 'selected' class from all intensity buttons
    const buttons = document.querySelectorAll('#selection-container > div');
    buttons.forEach(button => button.classList.remove('selected'));

    // Add the 'selected' class to the clicked button
    const target = event.currentTarget as HTMLElement;
    target.classList.add('selected');

    // Show the result section with download button
    const resultSection = document.getElementById('result');
    if (resultSection) {
        resultSection.classList.remove('hidden');
    }

    // Display selected choices
    const workoutType = document.querySelector('.selected h2')?.textContent;
    const intensity = target.querySelector('h2')?.textContent;
    const selectedChoices = document.getElementById('selected-choices');
    if (selectedChoices && workoutType && intensity) {
        selectedChoices.textContent = `Selected: ${workoutType} - ${intensity}`;
    }
}

// Function to handle restart button click
function handleRestart() {
    // Reset the selection container to the original workout options
    const selectionContainer = document.getElementById('selection-container');
    if (selectionContainer) {
        selectionContainer.innerHTML = `
            <div id="cardio" class="w-1/4 p-8 bg-white shadow-md cursor-pointer text-center workout-option">
                <img src="path/to/cardio.jpg" alt="Cardio" class="w-full h-40 object-cover mb-4">
                <h2 class="text-xl font-bold">Cardio</h2>
            </div>
            <div id="gym" class="w-1/4 p-8 bg-white shadow-md cursor-pointer text-center workout-option">
                <img src="path/to/gym.jpg" alt="Gym Workout" class="w-full h-40 object-cover mb-4">
                <h2 class="text-xl font-bold">Gym Workout</h2>
            </div>
            <div id="home" class="w-1/4 p-8 bg-white shadow-md cursor-pointer text-center workout-option">
                <img src="path/to/home.jpg" alt="Home Workout" class="w-full h-40 object-cover mb-4">
                <h2 class="text-xl font-bold">Home Workout</h2>
            </div>
        `;

        // Reattach the event listeners to the newly created workout options
        document.querySelectorAll('.workout-option').forEach(button => {
            button.addEventListener('click', handleWorkoutSelection);
        });
    }

    // Hide the result section
    const resultSection = document.getElementById('result');
    if (resultSection) {
        resultSection.classList.add('hidden');
    }
}

// Attach event listeners to workout type buttons
document.querySelectorAll('.workout-option').forEach(button => {
    button.addEventListener('click', handleWorkoutSelection);
});

// Attach event listener to the restart button
const restartButton = document.getElementById('restart-button');
if (restartButton) {
    restartButton.addEventListener('click', handleRestart);
}
