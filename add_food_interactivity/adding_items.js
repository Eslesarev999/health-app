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

    function updateDoneButtonState() {
        doneButton.disabled = !areAllInputsFilled();
    }
 
    foodNameInput.addEventListener("input", updateDoneButtonState);
    caloriesInput.addEventListener("input", updateDoneButtonState);
    fatInput.addEventListener("input", updateDoneButtonState);
    carbsInput.addEventListener("input", updateDoneButtonState);
    proteinInput.addEventListener("input", updateDoneButtonState);
    
    updateDoneButtonState();

    doneButton.addEventListener("click", function () {
        if (areAllInputsFilled()) {
            const foodName = foodNameInput.value;
            const calories = caloriesInput.value;
            const fat = fatInput.value;
            const carbs = carbsInput.value;
            const protein = proteinInput.value;

            const foodEntry = {
                name: foodName,
                calories: calories,
                fat: fat,
                carbs: carbs,
                protein: protein
            };

            // check if there's existing data in local storage
            const existingData = localStorage.getItem("foodHistory");
            let foodHistory = [];

            if (existingData) {
                foodHistory = JSON.parse(existingData);
            }
            
            foodHistory.push(foodEntry);
            localStorage.setItem("foodHistory", JSON.stringify(foodHistory));
        }
    });
});
