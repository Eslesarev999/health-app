document.addEventListener("DOMContentLoaded", function () {
    const doneButton = document.getElementById("done_button");

    doneButton.addEventListener("click", function () {
        const foodName = document.getElementById("addf_foodName").value;
        const calories = document.getElementById("calories").value;
        const fat = document.getElementById("fat").value;
        const carbs = document.getElementById("carbs").value;
        const protein = document.getElementById("protein").value;

        const foodEntry = {
            name: foodName,
            calories: calories,
            fat: fat,
            carbs: carbs,
            protein: protein
        };

        const existingData = localStorage.getItem("foodHistory");
        let foodHistory = [];

        if (existingData) {
            foodHistory = JSON.parse(existingData);
        }

        foodHistory.push(foodEntry);
        localStorage.setItem("foodHistory", JSON.stringify(foodHistory));
        window.location.href = "meal_input.html";
    });
});