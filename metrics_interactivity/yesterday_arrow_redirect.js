// redirect to add meal page upon click of "add a new meal" button in metrics page
document.addEventListener("DOMContentLoaded", function () {
    const right = document.getElementById("right-arrow");

    right.addEventListener("click", function () {
        window.location.href = "today_metrics.html";
    });
});
