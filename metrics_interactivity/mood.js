document.addEventListener("DOMContentLoaded", function () {
    const addMoodButton = document.getElementById("add-mood-button");
    const moodIcons = document.getElementById("moodIcons");

    // Event listener for the "Add More" button
    addMoodButton.addEventListener("click", function () {
        // Create and show the mood icon modal
        const moodIconModal = document.createElement("div");
        moodIconModal.id = "moodIconModal";
        moodIconModal.className = "modal";
        moodIconModal.innerHTML = `
            <div class="modal-content">
                <img src="icons/Happy (1).png" alt="Happy Icon" class="mood-option" onclick="selectMood('happy')">
                <img src="icons/Sad (1).png" alt="Sad Icon" class="mood-option" onclick="selectMood('sad')">
                <img src="icons/Angry (1).png" alt="Angry Icon" class="mood-option" onclick="selectMood('angry')">
                <img src="icons/Neutral (1).png" alt="Neutral Icon" class="mood-option" onclick="selectMood('neutral')">
            </div>
        `;

        moodIconModal.className = "mp_modal";

        // Append the mood icon modal to the moodIcons section
        moodIcons.appendChild(moodIconModal);

        // Prevent clicks in the modal from closing the modal
        moodIconModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    // Event listener to close the mood icon modal when clicking outside the modal
    window.addEventListener("click", function (event) {
        const moodIconModal = document.getElementById("moodIconModal");
        if (moodIconModal && event.target === moodIconModal) {
            moodIconModal.remove();
        }
    });
});

// Function to select a mood icon and add it to the Mood Tracker section
function selectMood(mood) {
    const moodSection = document.getElementById("moodIcons");
    const newMoodDiv = document.createElement("div");
    const addMoodButton = document.getElementById("add-mood-button");
    
    newMoodDiv.className = "mp_new-mood-icon";

    const img = document.createElement("img");
    img.src = `icons/${mood} (1).png`;
    img.alt = `${mood} Icon`;

    const moodText = document.createElement("div");
    moodText.className = "mp_mood-text-new";
    moodText.textContent = "Evening";

    newMoodDiv.appendChild(img);
    newMoodDiv.appendChild(moodText);
    moodSection.appendChild(newMoodDiv);

    // adding new icons before the add new mood button
    moodSection.insertBefore(newMoodDiv, addMoodButton);

    const moodIconModal = document.getElementById("moodIconModal");
    moodIconModal.remove();
}
