document.addEventListener("DOMContentLoaded", function () {
    const doneButton = document.getElementById("done_button");

    doneButton.addEventListener("click", function () {
        // Get user input
        const foodName = document.getElementById("addf_foodName").value;
        const calories = document.getElementById("calories").value;
        const fat = document.getElementById("fat").value;
        const carbs = document.getElementById("carbs").value;
        const protein = document.getElementById("protein").value;

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

        // Redirect to meal_input.html
        window.location.href = "meal_input.html";
    });
});