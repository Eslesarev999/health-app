// redirect to add meal page upon click of "add a new meal" button in metrics page
document.addEventListener("DOMContentLoaded", function () {
    const left = document.getElementById("left-arrow");

    left.addEventListener("click", function () {
        window.history.back();     
    });


});
