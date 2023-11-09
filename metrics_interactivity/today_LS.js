document.addEventListener("DOMContentLoaded", function () {
    const lunchItem = document.getElementById("lunchItem");
    const lunchCheckedState = localStorage.getItem("Lunch");

    if (lunchCheckedState === 'checked') {
        lunchItem.textContent = "Salad, Chicken, Rice";
    }
})