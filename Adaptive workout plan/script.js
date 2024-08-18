"use strict";
// Function to handle workout type selection
function handleWorkoutSelection(event) {
    var _a;
    const selectedWorkout = ((_a = event.currentTarget.querySelector("h2")) === null || _a === void 0 ? void 0 : _a.textContent) || "";
    const selectionContainer = document.getElementById('selection-container');
    if (selectionContainer) {
        selectionContainer.innerHTML = ''; // Clear current content
        // Create the selected workout div
        const selectedDiv = document.createElement('div');
        selectedDiv.className = 'workout-option hover-scale'; // Add hover-scale class here
        selectedDiv.innerHTML = `
            <img src="./Pictures/${selectedWorkout.replace(/\s/g, '')}Workout.jpg" alt="${selectedWorkout}">
            <h2>${selectedWorkout}</h2>
        `;
        // Append selected workout
        selectionContainer.appendChild(selectedDiv);
        // Create difficulty selection divs
        const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
        const difficultyContainer = document.createElement('div');
        difficultyContainer.className = 'difficulty-container';
        difficulties.forEach(level => {
            const difficultyDiv = document.createElement('div');
            difficultyDiv.className = 'difficulty-option hover-scale'; // Add hover-scale class here
            difficultyDiv.textContent = level;
            difficultyDiv.addEventListener('click', () => handleIntensitySelection(selectedWorkout, level));
            difficultyContainer.appendChild(difficultyDiv);
        });
        // Append difficulty options
        const workoutDifficultyContainer = document.createElement('div');
        workoutDifficultyContainer.className = 'workout-difficulty-container';
        workoutDifficultyContainer.appendChild(selectedDiv);
        workoutDifficultyContainer.appendChild(difficultyContainer);
        selectionContainer.appendChild(workoutDifficultyContainer);
    }
}
// Function to handle intensity selection
function handleIntensitySelection(workoutType, intensity) {
    const selectionContainer = document.getElementById('selection-container');
    if (selectionContainer) {
        selectionContainer.innerHTML = ''; // Clear current content
        // Display selected workout and intensity
        const resultDiv = document.createElement('div');
        resultDiv.className = 'workout-option'; // No hover-scale class here
        resultDiv.innerHTML = `
            <img src="./Pictures/${workoutType.replace(" ", "")}Workout.jpg" alt="${workoutType}">
            <h2>${workoutType}</h2>
        `;
        selectionContainer.appendChild(resultDiv);
        const difficultyContainer = document.createElement('div');
        difficultyContainer.className = 'difficulty-container';
        // Create difficulty selection divs
        const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
        difficulties.forEach(level => {
            const difficultyDiv = document.createElement('div');
            difficultyDiv.className = 'difficulty-option'; // No hover-scale class here
            difficultyDiv.textContent = level;
            if (level === intensity) {
                difficultyDiv.classList.add('bg-green-300'); // Highlight selected difficulty
            }
            difficultyContainer.appendChild(difficultyDiv);
        });
        selectionContainer.appendChild(difficultyContainer);
        // Show the result section with buttons
        const resultSection = document.getElementById('result');
        if (resultSection) {
            resultSection.classList.remove('hidden');
        }
    }
}
// Attach event listeners to workout type buttons
document.querySelectorAll('.workout-option').forEach(button => {
    button.classList.add('hover-scale'); // Add hover-scale class to initial options
    button.addEventListener('click', handleWorkoutSelection);
});
// Attach event listener to the restart button
const restartButtons = document.getElementById('restart-buttons');
if (restartButtons) {
    restartButtons.addEventListener('click', () => {
        location.reload(); // Simple reload to reset the page
    });
}
