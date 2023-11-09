// Function to handle the "Add New Food" button click event
function handleAddFoodButtonClick() {
    // Redirect to the "add_food.html" page in the same directory
    window.location.href = 'add_food.html';
}

function handleBackButtonClick() {
    window.history.back();     
}

// Function to toggle plus sign to checkmark icon
function togglePlusToCheckmark() {
    const plusSigns = document.querySelectorAll('.meal_plus-sign');

    plusSigns.forEach((plusSign) => {
        plusSign.addEventListener('click', () => {
            if (plusSign.textContent === '+') {
                plusSign.textContent = '✓'; // Change to checkmark
            } else {
                plusSign.textContent = '+'; // Change back to plus symbol
            }
        });
    });
}

// Function to reset the list items to their original state
function resetListItems() {
    const foodList = document.getElementById('foodList');
    const foodItems = foodList.getElementsByTagName('li');
    for (let i = 0; i < foodItems.length; i++) {
        foodItems[i].style.display = ''; // Reset to default display value
    }
}

// Function to filter list items based on search text
function filterListItems(searchText) {
    const foodList = document.getElementById('foodList');
    const foodItems = foodList.getElementsByTagName('li');
    for (let i = 0; i < foodItems.length; i++) {
        const foodItem = foodItems[i];
        const foodName = foodItem.textContent.toLowerCase();

        if (foodName.includes(searchText)) {
            foodItem.style.display = '';
        } else {
            foodItem.style.display = 'none';
        }
    }
}

function toggleKeyboard(inputField) {
    var keyboard = document.getElementById("keyboard");
    if (keyboard.style.display === "none") {
        keyboard.style.display = "block";
     
    } else {
        keyboard.style.display = "none";
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('meal_searchbar');
    const clearButton = document.getElementById('clear_search');
    const addButton = document.querySelector('.meal_add_food_button');
<<<<<<< HEAD
=======
<<<<<<<< HEAD:meals_interactivity/dinner_page.js
    const foodList = document.getElementById("foodList");

========
>>>>>>> d3566e9 (local storage not possible but other edits have occured)
    const backArrows = document.getElementById('meal_arrow');

    backArrows.addEventListener("click", function () {
        window.history.back(); // Navigate back to the previous page
    });
<<<<<<< HEAD
=======
>>>>>>>> c553352 (local storage not possible but other edits have occured):meals_interactivity/meals_global.js
>>>>>>> d3566e9 (local storage not possible but other edits have occured)

    searchInput.addEventListener('focus', function() {
        toggleKeyboard(searchInput);
    });

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        filterListItems(searchText);
    });

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        resetListItems();
    });
    addButton.addEventListener('click', handleAddFoodButtonClick);


    togglePlusToCheckmark();
<<<<<<< HEAD
=======

    foodList.addEventListener("click", function (event) {
        if (event.target.classList.contains("meal_plus-sign")) {
            // Toggle the checkmark
            const listItem = event.target.parentElement;
            const isCheck = listItem.querySelector(".meal_plus-sign").textContent === '✓';
            listItem.querySelector(".meal_plus-sign").textContent = isCheck ? '+' : '✓';

            // Save the checked state in localStorage
            const foodName = listItem.querySelector(".food-name").textContent;
            const checkedState = isCheck ? 'checked' : 'unchecked';
            localStorage.setItem(foodName, checkedState);
        }
    });

>>>>>>> d3566e9 (local storage not possible but other edits have occured)
});