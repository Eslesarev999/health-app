// redirect to add meal page upon click of "add a new meal" button in metrics page
document.addEventListener("DOMContentLoaded", function () {
    const left = document.getElementById("left-arrow");
    const right = document.getElementById("right-arrow");

    left.addEventListener("click", function () {
        window.location.href = "meal_input.html";
    });


});
