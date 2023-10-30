document.addEventListener("DOMContentLoaded", function () {
    // Select the weight edit button
    const weightEditButton = document.querySelector(".mp_weight-section .mp_edit-icon");

    // Select the weight element
    const weightElement = document.querySelector(".mp_weight-section");

    // Add a click event listener to the weight edit button
    weightEditButton.addEventListener("click", function () {
        const weightText = weightElement.querySelector("span");
        const weightValue = weightText.textContent.trim();

        // Create an input field for editing the weight
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = weightValue;

        // Replace the weight text with the input field
        weightElement.replaceChild(inputField, weightText);

        inputField.addEventListener("blur", function () {
            // When the input field loses focus, update the weight value
            weightText.textContent = inputField.value;

            // Remove the input field
            weightElement.replaceChild(weightText, inputField);
        });

        inputField.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                // Update the weight value
                weightText.textContent = inputField.value;

                // Remove the input field
                weightElement.replaceChild(weightText, inputField);
            }
        });

        inputField.focus();
    });
});
