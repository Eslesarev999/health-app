document.addEventListener("DOMContentLoaded", function () {
    const left = document.getElementById("left-arrow");

    left.addEventListener("click", function () {
        window.history.back();     
    });


});
