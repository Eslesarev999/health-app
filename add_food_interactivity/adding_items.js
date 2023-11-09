document.addEventListener("DOMContentLoaded", function () {
    const doneButton = document.getElementById("done_button");
    const foodNameInput = document.getElementById("addf_foodName");
    const caloriesInput = document.getElementById("calories");
    const fatInput = document.getElementById("fat");
    const carbsInput = document.getElementById("carbs");
    const proteinInput = document.getElementById("protein");

    // Function to check if all input fields are filled
    function areAllInputsFilled() {
        return (
            foodNameInput.value.trim() !== "" &&
            caloriesInput.value.trim() !== "" &&
            fatInput.value.trim() !== "" &&
            carbsInput.value.trim() !== "" &&
            proteinInput.value.trim() !== ""
        );
    }

    // Function to update the "Done" button state
    function updateDoneButtonState() {
        doneButton.disabled = !areAllInputsFilled();
    }

    // Add event listeners for input fields
    foodNameInput.addEventListener("input", updateDoneButtonState);
    caloriesInput.addEventListener("input", updateDoneButtonState);
    fatInput.addEventListener("input", updateDoneButtonState);
    carbsInput.addEventListener("input", updateDoneButtonState);
    proteinInput.addEventListener("input", updateDoneButtonState);

    // Initially set the button state
    updateDoneButtonState();

    doneButton.addEventListener("click", function () {
        if (areAllInputsFilled()) {
            // Get user input
            const foodName = foodNameInput.value;
            const calories = caloriesInput.value;
            const fat = fatInput.value;
            const carbs = carbsInput.value;
            const protein = proteinInput.value;

            // Create an object to represent the food entry
            const foodEntry = {
                name: foodName,
                calories: calories,
                fat: fat,
                carbs: carbs,
                protein: protein
            };

            // Check if there's existing data in local storage
            const existingData = localStorage.getItem("foodHistory");
            let foodHistory = [];

            if (existingData) {
                foodHistory = JSON.parse(existingData);
            }

            // Add the new entry to the food history
            foodHistory.push(foodEntry);

            // Store the updated food history in local storage
            localStorage.setItem("foodHistory", JSON.stringify(foodHistory));
        }
    });
});
