document.addEventListener("DOMContentLoaded", function () {
    // Select the Add Exercise button
    const addExerciseButton = document.getElementById("add-exercise-button");
    const addExer1 = document.getElementById("editIcon-1");
    const addExer2 = document.getElementById("editIcon-2");

    const createEditFunctionality = function (editButton, exerciseNameSelector, exerciseDurationSelector) {
        editButton.addEventListener("click", function () {
            // Get the existing exercise name and duration elements
            const exerciseName = document.querySelector(exerciseNameSelector);
            const exerciseDuration = document.querySelector(exerciseDurationSelector);

            // Create an input field for editing the exercise title
            const titleInputField = document.createElement("input");
            titleInputField.type = "text";
            titleInputField.value = exerciseName.textContent;
            titleInputField.className = "exercise-title-input";

            titleInputField.addEventListener("focus", function () {
                document.getElementById("keyboard").style.display = "block"; // Show keyboard
            });

            titleInputField.addEventListener("blur", function () {
                exerciseName.textContent = titleInputField.value;
                document.getElementById("keyboard").style.display = "none";
            });

            titleInputField.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    exerciseName.textContent = titleInputField.value;
                    document.getElementById("keyboard").style.display = "none";
                }
            });

            // Create an input field for editing the exercise duration
            const durationInputField = document.createElement("input");
            durationInputField.type = "text";
            durationInputField.value = exerciseDuration.textContent;
            durationInputField.className = "exercise-duration-input";

            durationInputField.addEventListener("blur", function () {
                exerciseDuration.textContent = durationInputField.value;
            });

            durationInputField.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    exerciseDuration.textContent = durationInputField.value;
                }
            });

            exerciseName.textContent = "";
            exerciseName.appendChild(titleInputField);

            exerciseDuration.textContent = "";
            exerciseDuration.appendChild(durationInputField);

            titleInputField.focus();
        });
    };

    createEditFunctionality(addExer1, ".mp_exercise-section .mp_exercise-name", ".mp_exercise-section .mp_exercise-item");
    createEditFunctionality(addExer2, ".mp_exercise-section .mp_exercise-name-2", ".mp_exercise-section .mp_exercise-item-2");


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
            titleInputField.className = "exercise-title-input";

            titleInputField.addEventListener("focus", function () {
                document.getElementById("keyboard").style.display = "block"; // Show keyboard
            });
        
            titleInputField.addEventListener("blur", function () {
                exerciseName.textContent = titleInputField.value;
                document.getElementById("keyboard").style.display = "none";
            });

            titleInputField.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    exerciseName.textContent = titleInputField.value;
                    document.getElementById("keyboard").style.display = "none";
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

