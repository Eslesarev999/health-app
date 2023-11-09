document.addEventListener("DOMContentLoaded", function () {
    const addExerciseButton = document.getElementById("add-exercise-button");
    const addExer1 = document.getElementById("editIcon-1");
    const addExer2 = document.getElementById("editIcon-2");

    const createEditFunctionality = function (editButton, exerciseNameSelector, exerciseDurationSelector) {
        editButton.addEventListener("click", function () {
            const exerciseName = document.querySelector(exerciseNameSelector);
            const exerciseDuration = document.querySelector(exerciseDurationSelector);

           
            const titleInputField = document.createElement("input");
            titleInputField.type = "text";
            titleInputField.value = exerciseName.textContent;
            titleInputField.className = "exercise-title-input";

            titleInputField.addEventListener("focus", function () {
                document.getElementById("keyboard").style.display = "block"; 
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


    addExerciseButton.addEventListener("click", function () {
        const exerciseContainer = document.createElement("div");
        exerciseContainer.className = "exercise-edit";

        const checkmark = document.createElement("div");
        checkmark.className = "mp_checkmark";
        checkmark.textContent = "✓";

        const exerciseName = document.createElement("span");
        exerciseName.className = "mp_exercise-item";
        exerciseName.textContent = "New Exercise";

        const editButton = document.createElement("i");
        editButton.className = "fas fa-edit mp_edit-exercise-icon";

        const exerciseInput = document.createElement("span");
        exerciseInput.textContent = "0 mins";
        exerciseInput.className = "mp_exercise-input";

        exerciseContainer.appendChild(checkmark);
        exerciseContainer.appendChild(exerciseName);
        exerciseContainer.appendChild(editButton);
        exerciseContainer.appendChild(exerciseInput);
        exerciseContainer.appendChild(document.createElement("br"));
        exerciseContainer.appendChild(document.createElement("br"));


        const exerciseSection = document.querySelector(".mp_exercise-section");
        exerciseSection.insertBefore(exerciseContainer, addExerciseButton);

        editButton.addEventListener("click", function () {
            const titleInputField = document.createElement("input");
            titleInputField.type = "text";
            titleInputField.value = exerciseName.textContent;
            titleInputField.className = "exercise-title-input";

            titleInputField.addEventListener("focus", function () {
                document.getElementById("keyboard").style.display = "block"; 
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

