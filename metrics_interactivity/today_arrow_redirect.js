document.addEventListener("DOMContentLoaded", function () {
    const left = document.getElementById("left-arrow");
    const right = document.getElementById("right-arrow");

    left.addEventListener("click", function () {
        window.location.href = "yesterday_metrics.html";
    });

    right.addEventListener("click", function () {
        window.location.href = "tomorrow_metrics.html";
    });
});
