function handleAddFoodButtonClick() {
    window.location.href = 'add_food.html';
}

function handleBackButtonClick() {
    window.history.back();     
}

function togglePlusToCheckmark() {
    const plusSigns = document.querySelectorAll('.meal_plus-sign');

    plusSigns.forEach((plusSign) => {
        plusSign.addEventListener('click', () => {
            if (plusSign.textContent === '+') {
                plusSign.textContent = '✓';
            } else {
                plusSign.textContent = '+'; 
            }
        });
    });
}

function resetListItems() {
    const foodList = document.getElementById('foodList');
    const foodItems = foodList.getElementsByTagName('li');
    for (let i = 0; i < foodItems.length; i++) {
        foodItems[i].style.display = ''; 
    }
}

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

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('meal_searchbar');
    const clearButton = document.getElementById('clear_search');
    const addButton = document.querySelector('.meal_add_food_button');
    const backArrows = document.getElementById('meal_arrow');
    
    backArrows.addEventListener("click", function () {
        window.history.back(); 
    });

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
});