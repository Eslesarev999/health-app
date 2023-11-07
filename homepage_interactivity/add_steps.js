let currentSteps = 0; // Global variable to store the current steps
const maxSteps = 100000; // Max steps for the day

document.getElementById('H_plus').addEventListener('click', function() {
    const manualEntry = document.getElementById('H_manual-entry');
    manualEntry.style.display = manualEntry.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('H_confirm-steps').addEventListener('click', function() {
    // Get manual steps and target
    const manualSteps = parseInt(document.getElementById('H_manual-steps').value);
    const targetSteps = 10000;

    if (isNaN(manualSteps)) {
        alert("Please enter valid numbers for both target steps and steps taken!");
        return;
    }
    currentSteps = manualSteps; // Set currentSteps to manualSteps
    // Update the progress bar and steps left
    updateProgressBar(10000);
    // Hide the manual entry
    document.getElementById('H_manual-entry').style.display = 'none';
});

function updateProgressBar(targetSteps) {
    const progressBar = document.querySelector('.H_progress-bar');
    const stepsLeftElem = document.getElementById('H_steps-left');
    const percentageProgress = (currentSteps / 10000) * 100;
    
    // Update the conic-gradient with dynamic percentage
    progressBar.style.background = `
      radial-gradient(closest-side, #D8EDFE 77%, transparent 80% 100%),
      conic-gradient(rgb(0, 39, 97) ${percentageProgress}%, white ${percentageProgress}% 100%)`;
    
    // Set steps taken in progress bar
    progressBar.setAttribute("data-steps", currentSteps);

    // Calculate and update the steps left
    const remainingSteps = 10000 - currentSteps;
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
    // Adjust this function to take targetSteps into account
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    // Iterate over each day and update its bar graph
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
        const bar = document.getElementById(barId);
        const barValue = bar.querySelector('.H_bar-value');

        // Calculate the height of the bar as a percentage of the targetSteps, capping it at 100%
        let percentageOfTarget = (steps / 10000) * 100;
        percentageOfTarget = percentageOfTarget > 100 ? 100 : percentageOfTarget; // Ensure it doesn't exceed 100%

        bar.style.height = `${percentageOfTarget}%`;
        barValue.textContent = steps; // Update the text content with the number of steps

    // Additionally, you might want to update the goal line to reflect the target steps
   
}

var currentInput;


function showKeyboard(element) {
  currentInput = element; // Store reference to the input
  document.getElementById('keyboard').style.display = 'block'; // Show the keyboard
}


function typeKey(keyValue) {
  currentInput.value += keyValue; // Append key value to input
}


function closeKeyboard() {
  document.getElementById('keyboard').style.display = 'none'; // Hide the keyboard
}


// Bind the document click to close the keyboard if clicked outside
document.addEventListener('click', function(event) {
  var isClickInsideElement = currentInput.contains(event.target) || document.getElementById('keyboard').contains(event.target);
  if (!isClickInsideElement) {
    closeKeyboard();
  }
});
function backspaceKey() {
    var currentValue = currentInput.value;
    if (currentValue.length > 0) {
      // Remove the last character from the current value
      currentInput.value = currentValue.substring(0, currentValue.length - 1);
    }
  }
