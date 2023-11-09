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
    currentSteps = manualSteps;
    updateProgressBar(10000);
    document.getElementById('H_manual-entry').style.display = 'none';
});

function updateProgressBar(targetSteps) {
    const progressBar = document.querySelector('.H_progress-bar');
    const stepsLeftElem = document.getElementById('H_steps-left');
    const percentageProgress = (currentSteps / 10000) * 100;
    
    
    progressBar.style.background = `
      radial-gradient(closest-side, #D8EDFE 77%, transparent 80% 100%),
      conic-gradient(rgb(0, 39, 97) ${percentageProgress}%, white ${percentageProgress}% 100%)`;
    
    
    progressBar.setAttribute("data-steps", currentSteps);

    // Calculate and update the steps left
    const remainingSteps = 10000 - currentSteps;
    stepsLeftElem.textContent = `${remainingSteps} Steps Left!`;
    updateBarGraph(currentSteps);
}

document.querySelectorAll(".H_group input[type='checkbox']").forEach(checkbox => {
    breakfast.addEventListener('click', function() {
        window.location.href = 'breakfast_input.html';
    });

    lunch.addEventListener('click', function() {
        window.location.href = 'lunch_input.html';
    });

    snack.addEventListener('click', function() {
        window.location.href = 'snack_input.html';
    });

    dinner.addEventListener('click', function() {
        window.location.href = 'dinner_input.html';
    });
});

function updateBarGraph(steps) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

   
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

        
        let percentageOfTarget = (steps / 10000) * 100;
        percentageOfTarget = percentageOfTarget > 100 ? 100 : percentageOfTarget; 

        bar.style.height = `${percentageOfTarget}%`;
        barValue.textContent = steps; 
   
}

var currentInput;


function showKeyboard(element) {
  currentInput = element; 
  document.getElementById('keyboard').style.display = 'block'; 
}


function typeKey(keyValue) {
  currentInput.value += keyValue; 
}


function closeKeyboard() {
  document.getElementById('keyboard').style.display = 'none'; 
}


document.addEventListener('click', function(event) {
  var isClickInsideElement = currentInput.contains(event.target) || document.getElementById('keyboard').contains(event.target);
  if (!isClickInsideElement) {
    closeKeyboard();
  }
});
function backspaceKey() {
    var currentValue = currentInput.value;
    if (currentValue.length > 0) {
      currentInput.value = currentValue.substring(0, currentValue.length - 1);
    }
  }
