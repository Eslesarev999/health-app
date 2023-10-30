document.addEventListener("DOMContentLoaded", function () {
    // Select the Add Exercise button
    const addExerciseButton = document.getElementById("add-exercise-button");

    // Add a click event listener to the Add Exercise button
    addExerciseButton.addEventListener("click", function () {
        // Create a new exercise container
        const exerciseContainer = document.createElement("div");
        exerciseContainer.className = "exercise-edit";

        // Create the checkmark and exercise name
        const checkmark = document.createElement("div");
        checkmark.className = "mp_checkmark";
        checkmark.textContent = "✓";

        const exerciseName = document.createElement("span");
        exerciseName.className = "mp_exercise-item";
        exerciseName.textContent = "New Exercise";

        // Create a new edit button for this exercise
        const editButton = document.createElement("i");
        editButton.className = "fas fa-edit mp_edit-exercise-icon";

        // Append the checkmark, exercise name, and edit button to the exercise container
        exerciseContainer.appendChild(checkmark);
        exerciseContainer.appendChild(exerciseName);
        exerciseContainer.appendChild(editButton);

        // Create the total exercise duration container
        const totalExerciseDuration = document.createElement("div");
        totalExerciseDuration.className = "mp_total-exercises";

        // Create an input field for editing exercise duration
        const exerciseInput = document.createElement("input");
        exerciseInput.type = "text";
        exerciseInput.value = "0 mins";
        exerciseInput.className = "exercise-input";

        // Append the exercise input field to the total exercise duration container
        totalExerciseDuration.appendChild(exerciseInput);

        // Append the exercise container and total exercise duration to the exercise section
        const exerciseSection = document.querySelector(".mp_exercise-section");
        exerciseSection.insertBefore(exerciseContainer, addExerciseButton);
        exerciseSection.insertBefore(totalExerciseDuration, addExerciseButton);

        // Function to handle editing the exercise name for this exercise
        editButton.addEventListener("click", function () {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = exerciseName.textContent;

            inputField.addEventListener("blur", function () {
                exerciseName.textContent = inputField.value;
            });

            exerciseName.textContent = "";
            exerciseName.appendChild(inputField);

            inputField.focus();
        });

        // Function to handle editing exercise duration
        exerciseInput.addEventListener("blur", function () {
            exerciseInput.value = exerciseInput.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
            const inputNumber = parseInt(exerciseInput.value);
            if (!isNaN(inputNumber)) {
                totalExerciseDuration.textContent = inputNumber + " mins";
            } else {
                totalExerciseDuration.textContent = "0 mins";
            }
        });
    });
});
