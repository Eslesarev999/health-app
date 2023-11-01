// redirect to add meal page upon click of "add a new meal" button in metrics page
document.addEventListener("DOMContentLoaded", function () {
    const addMealButton = document.getElementById("add-meal-button");
    const editMealButton1 = document.getElementById("edit-icon-1");
    const editMealButton2 = document.getElementById("edit-icon-2");

    addMealButton.addEventListener("click", function () {
        window.location.href = "add_food.html";
    });

    editMealButton1.addEventListener("click", function () {
        window.location.href = "add_food.html";
    });

    editMealButton2.addEventListener("click", function () {
        window.location.href = "add_food.html";
    });
});
