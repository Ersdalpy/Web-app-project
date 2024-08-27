// Creating a function to handle the workout type selection, also giving it a Event parameter so it can be used in the event listener later on.
function handleWorkoutSelection(event: Event) {

    // Defining a variable selectedWorkout to fetch and store the content of the selected workout.
    const selectedWorkout = (event.currentTarget as HTMLElement).querySelector("h2")?.textContent || "";

    // A variable that fetches the information of the div with id 'selection-container'. This will be the parent container displaying our selections.
    const selectionContainer = document.getElementById('selection-container');

    //This if statement checks if the selectionContainer exists.
    if (selectionContainer) {

        // If the block is executed, the current HTML content within the container will be cleared.
        selectionContainer.innerHTML = '';

        // Generate the correct image path using Django's static URL structure.
        const imagePath = `${window.location.origin}/static/pictures/${selectedWorkout.replace(/\s/g, '')}Workout.jpg`;

        // Creating the new selected workout div.
        const selectedDiv = document.createElement('div');

        // Adding a class name to the selectedDiv for easier targeting.
        selectedDiv.className = 'workout-option';

        // Adding the image and title of the selected workout to the new div.
        selectedDiv.innerHTML = `
            <img src="${imagePath}" alt="${selectedWorkout}">
            <h2>${selectedWorkout}</h2>
        `;

        // Adding the selected workout to the selection container, here it will be displayed with the other selected options.
        selectionContainer.appendChild(selectedDiv);

        // Creating an array of the difficulties.
        const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

        //Making the div that will hold the difficulty options.
        const difficultyContainer = document.createElement('div');

        // Adding a class name to the difficultyContainer for easier targeting.
        difficultyContainer.className = 'difficulty-container';

        // Creating the difficulty options, the code block is executed for each element in the difficulties array.
        difficulties.forEach(level => {
            // Making the difficulty 'button' divs.
            const difficultyDiv = document.createElement('div');

            // Adding some classes to each 'button'. This will help us manipulate them.
            difficultyDiv.className = 'difficulty-option hover-scale';

            // Adding the 'button' text content.
            difficultyDiv.textContent = level;

            // Attaching a click event listener to each 'button' that will call the handleIntensitySelection function.
            difficultyDiv.addEventListener('click', () => handleIntensitySelection(selectedWorkout, level));

            // Appending the 'button' to the difficultyContainer.
            difficultyContainer.appendChild(difficultyDiv);
        });

        // Making the parent div that will hold the selected workout and the difficulty options.
        const workoutDifficultyContainer = document.createElement('div');

        // Adding a class name to the workoutDifficultyContainer for easier targeting.
        workoutDifficultyContainer.className = 'workout-difficulty-container';

        // Appending the selected workout and the difficulty options to the workoutDifficultyContainer.
        workoutDifficultyContainer.appendChild(selectedDiv);
        workoutDifficultyContainer.appendChild(difficultyContainer);

        // Appending the workoutDifficultyContainer to the selectionContainer
        selectionContainer.appendChild(workoutDifficultyContainer);
    }
}

// Making the function to handle intensity selection. Specifying that the arguments must be strings.
function handleIntensitySelection(workoutType: string, intensity: string) {

    // A variable that fetches the information of the div with id 'selection-container'.
    const selectionContainer = document.getElementById('selection-container');

    // This if statement checks if the selectionContainer exists.
    if (selectionContainer) {

        // If the block is executed, the current HTML content within the container will be cleared.
        selectionContainer.innerHTML = ''; // Clear current content

        // Generate the correct image path using Django's static URL structure
        const imagePath = `${window.location.origin}/static/Pictures/${workoutType.replace(" ", "")}Workout.jpg`;

        // Making the div that will hold the end result.
        const resultDiv = document.createElement('div');

        // Adding a class name to the resultDiv for easier targeting.
        resultDiv.className = 'workout-option';

        // Adding the image and title of the selected workout to the new div.
        resultDiv.innerHTML = `
            <img src="${imagePath}" alt="${workoutType}">
            <h2>${workoutType}</h2>
        `;

        //Appending the resultDiv to the selectionContainer
        selectionContainer.appendChild(resultDiv);

        // Making the div that will hold the difficulty options in the end result.
        const difficultyContainer = document.createElement('div');

        // Adding a class name to the difficultyContainer for easier targeting.
        difficultyContainer.className = 'difficulty-container';

        // Creating an array of the difficulties.
        const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

        // Creating the difficulty options, the code block is executed for each element in the difficulties array.
        difficulties.forEach(level => {
            
            // Making the difficulty 'button' div.
            const difficultyDiv = document.createElement('div');

            // Adding a class name to each 'button'. This will help us manipulate them.
            difficultyDiv.className = 'difficulty-option';

            // Adding the 'button' text content.
            difficultyDiv.textContent = level;

            // If level is not equal to intensity, the block will be executed.
            if (level != intensity) {
                // Hiding the difficulties that didnt match the criteria.
                difficultyDiv.classList.add('hidden');
            }

            // Appending the difficultyDiv to the difficultyContainer.
            difficultyContainer.appendChild(difficultyDiv);
        });

        //Appending the difficultyContainer to the selectionContainer.
        selectionContainer.appendChild(difficultyContainer);

        // Variable resultSection that fetches the information of the div with id 'result'.
        const resultSection = document.getElementById('result');

        // This if statement checks if the resultSection exists.
        if (resultSection) {

            // If the block is executed, we remove the 'hidden' class from the resultSection, making it visible to the user.
            resultSection.classList.remove('hidden');

            // Variable downloadButton that fetches the information of the button with id 'download-button'.
            const downloadButton = document.getElementById('download-button');

            // Generate download link using Django view path
            const downloadUrl = `${window.location.origin}/download/${workoutType}/${intensity}/`;
            downloadButton?.setAttribute('href', downloadUrl);
        }
    }
}

// Here we are targeting all the divs with the class name 'workout-option'.
document.querySelectorAll('.workout-option').forEach(button => {
    
    // Adding the hover-scale class to the corresponding buttons.
    (button as HTMLElement).classList.add('hover-scale');

    // Attaching the click event listener that is calling the function handleWorkoutSelection when the button is clicked.
    (button as HTMLElement).addEventListener('click', handleWorkoutSelection);
});


// Declaring the variable restartButtons that fetches the information of the button with id 'restart-buttons'.
const restartButtons = document.getElementById('restart-buttons');

// If the restartButtons exists, enter block of code.
if (restartButtons) {
    
    // Attaching the click event listener that will call the reload method, reloading the page when the button is clicked.
    restartButtons.addEventListener('click', () => {
        location.reload();
    });
}
