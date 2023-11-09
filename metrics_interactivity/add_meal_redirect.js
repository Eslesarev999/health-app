document.addEventListener("DOMContentLoaded", function () {
    const addMealButton = document.getElementById("add-meal-button");
    const breakfast = document.getElementById("breakfast");
    const lunch = document.getElementById("lunch");

    addMealButton.addEventListener("click", function () {
        window.location.href = "dinner_input.html";
    });

    breakfast.addEventListener("click", function () {
        window.location.href = "breakfast_input.html";
    });

    lunch.addEventListener("click", function () {
        window.location.href = "lunch_input.html";
    });
});
