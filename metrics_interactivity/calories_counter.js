document.addEventListener("DOMContentLoaded", function () {
    // Select the Add Meal button
    const addMealButton = document.getElementById("add-meal-button");

    // Add a click event listener to the Add Meal button
    addMealButton.addEventListener("click", function () {
        // Create a new meal container
        const mealContainer = document.createElement("div");
        mealContainer.className = "meal-edit";

        // Create the checkmark and meal name
        const checkmark = document.createElement("div");
        checkmark.className = "mp_checkmark";
        checkmark.textContent = "✓";

        const mealName = document.createElement("span");
        mealName.className = "mp_meal-item";
        mealName.textContent = "New Meal";

        // Create a new edit button for this meal
        const editButton = document.createElement("i");
        editButton.className = "fas fa-edit mp_edit-icon-1";

        // Append the checkmark, meal name, and edit button to the meal container
        mealContainer.appendChild(checkmark);
        mealContainer.appendChild(mealName);
        mealContainer.appendChild(editButton);

        // Create the total calories container
        const totalCalories = document.createElement("div");
        totalCalories.className = "mp_total-calories";

        // Create an input field for editing total calories
        const caloriesInput = document.createElement("input");
        caloriesInput.type = "number";
        caloriesInput.value = 0;
        caloriesInput.className = "calories-input";

        // Append the calories input field to the total calories container
        totalCalories.appendChild(caloriesInput);

        // Append the meal container and total calories to the calories section
        const caloriesSection = document.querySelector(".mp_calories-section");
        caloriesSection.insertBefore(mealContainer, addMealButton);
        caloriesSection.insertBefore(totalCalories, addMealButton);

        // Function to handle editing the meal name for this meal
        editButton.addEventListener("click", function () {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = mealName.textContent;

            inputField.addEventListener("blur", function () {
                mealName.textContent = inputField.value;
            });

            mealName.textContent = "";
            mealName.appendChild(inputField);

            inputField.focus();
        });

        // Function to handle editing total calories
        caloriesInput.addEventListener("blur", function () {
            const inputNumber = parseInt(caloriesInput.value);
            if (!isNaN(inputNumber)) {
                totalCalories.textContent = inputNumber + " cal";
            } else {
                totalCalories.textContent = "0 cal";
            }
        });
    });
});
