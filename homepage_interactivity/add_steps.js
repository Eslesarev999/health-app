let currentSteps = 0; // Global variable to store the current steps
const maxSteps = 100000; // Max steps for the day

document.getElementById('H_plus').addEventListener('click', function() {
    const manualEntry = document.getElementById('H_manual-entry');
    manualEntry.style.display = manualEntry.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('H_confirm-steps').addEventListener('click', function() {
    // Get manual steps and target
    const manualSteps = parseInt(document.getElementById('H_manual-steps').value);
    const targetSteps = parseInt(document.getElementById('H_manual-target').value);

    if (isNaN(manualSteps) || isNaN(targetSteps)) {
        alert("Please enter valid numbers for both target steps and steps taken!");
        return;
    }
    currentSteps = manualSteps; // Set currentSteps to manualSteps
    // Update the progress bar and steps left
    updateProgressBar(targetSteps);
    // Hide the manual entry
    document.getElementById('H_manual-entry').style.display = 'none';
});

function updateProgressBar(targetSteps) {
    const progressBar = document.querySelector('.H_progress-bar');
    const stepsLeftElem = document.getElementById('H_steps-left');
    const percentageProgress = (currentSteps / targetSteps) * 100;
    
    // Update the conic-gradient with dynamic percentage
    progressBar.style.background = `
      radial-gradient(closest-side, #D8EDFE 77%, transparent 80% 100%),
      conic-gradient(rgb(0, 39, 97) ${percentageProgress}%, white ${percentageProgress}% 100%)`;
    
    // Set steps taken in progress bar
    progressBar.setAttribute("data-steps", currentSteps);

    // Calculate and update the steps left
    const remainingSteps = targetSteps - currentSteps;
    stepsLeftElem.textContent = `${remainingSteps} Steps Left!`;
    updateBarGraph(currentSteps);
}
document.querySelectorAll(".H_group input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        // Redirect to the meal_input.html page
        window.location.href = 'meal_input.html';
    });
});
function updateBarGraph(steps) {
    // Assuming each bar can be a maximum of 100% height for the target steps.
    const percentageOfTarget = (steps / maxSteps) * 100 + 15;


    // Get current day
    const currentDay = new Date().getDay();

    let barId;
    switch (currentDay) {
        case 0:
            barId = 'sunday-bar';
            break;
        case 1:
            barId = 'monday-bar';
            break;
        case 2:
            barId = 'tuesday-bar';
            break;
        case 3:
            barId = 'wednesday-bar';
            break;
        case 4:
            barId = 'thursday-bar';
            break;
        case 5:
            barId = 'friday-bar';
            break;
        case 6:
            barId = 'saturday-bar';
            break;
    }

    // Get bar and update its height and value
    const bar = document.getElementById(barId);
    const barValue = bar.querySelector('.H_bar-value');

    bar.style.height = `${percentageOfTarget}%`;
    barValue.textContent = steps;
}
