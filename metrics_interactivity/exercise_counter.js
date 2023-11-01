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

        // Create an input field for editing exercise duration
        const exerciseInput = document.createElement("span");
        exerciseInput.textContent = "0 mins";
        exerciseInput.className = "mp_exercise-input";

        // Append the checkmark, exercise name, edit button, and exercise input to the exercise container
        exerciseContainer.appendChild(checkmark);
        exerciseContainer.appendChild(exerciseName);
        exerciseContainer.appendChild(editButton);
        exerciseContainer.appendChild(exerciseInput);

        // Append a line break to separate exercises
        exerciseContainer.appendChild(document.createElement("br"));
        exerciseContainer.appendChild(document.createElement("br"));

        // Append the exercise container to the exercise section
        const exerciseSection = document.querySelector(".mp_exercise-section");
        exerciseSection.insertBefore(exerciseContainer, addExerciseButton);

        // Function to handle editing the exercise name and duration for this exercise
        editButton.addEventListener("click", function () {
            // Edit the exercise title
            const titleInputField = document.createElement("input");
            titleInputField.type = "text";
            titleInputField.value = exerciseName.textContent;

            titleInputField.addEventListener("blur", function () {
                exerciseName.textContent = titleInputField.value;
            });

            titleInputField.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    exerciseName.textContent = titleInputField.value;
                }
            });

            // Edit the exercise duration
            const durationInputField = document.createElement("input");
            durationInputField.type = "text";
            durationInputField.value = exerciseInput.textContent;

            durationInputField.addEventListener("blur", function () {
                exerciseInput.textContent = durationInputField.value;
            });

            durationInputField.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    exerciseInput.textContent = durationInputField.value;
                }
            });

            exerciseName.textContent = "";
            exerciseName.appendChild(titleInputField);
            exerciseInput.textContent = "";
            exerciseInput.appendChild(durationInputField);

            titleInputField.focus();
        });
    });
});
