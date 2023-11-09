document.addEventListener("DOMContentLoaded", function () {
    const addMoodButton = document.getElementById("add-mood-button");
    const moodIcons = document.getElementById("moodIcons");
    const helpIcon = document.getElementById("help-icon");

    let moodIconCount = 0;
    addMoodButton.addEventListener("click", function () {
        if (moodIconCount < 3) {
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
            moodIcons.appendChild(moodIconModal);
            moodIconModal.addEventListener("click", function (event) {
                event.stopPropagation();
            });

            moodIconCount++;
            if (moodIconCount >= 3) {
                // Disable the "Add More" button after adding three mood icons
                addMoodButton.style.pointerEvents = "none";
                addMoodButton.style.display = "none";
            }
        }
    });

    window.addEventListener("click", function (event) {
        const moodIconModal = document.getElementById("moodIconModal");
        if (moodIconModal && event.target === moodIconModal) {
            moodIconModal.remove();
        }
    });

    tooltip.style.display = "none";
    helpIcon.addEventListener("mouseover", function () {
        tooltip.style.display = "block";
    });

    helpIcon.addEventListener("mouseout", function () {
        tooltip.style.display = "none";
    });


});

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

    moodSection.insertBefore(newMoodDiv, addMoodButton);

    const moodIconModal = document.getElementById("moodIconModal");
    moodIconModal.remove();
}
