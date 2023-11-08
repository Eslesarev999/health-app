document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the checked state for Lunch from localStorage
    const lunchItem = document.getElementById("lunchItem");
    const lunchCheckedState = localStorage.getItem("Lunch");

    if (lunchCheckedState === 'checked') {
        // If Lunch is checked, populate it in the metrics page
        lunchItem.textContent = "Salad, Chicken, Rice";
    }
})