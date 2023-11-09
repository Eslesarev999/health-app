document.addEventListener("DOMContentLoaded", function () {
    function toggleKeyboard(inputField) {
        var keyboard = document.getElementById("keyboard");
        if (keyboard.style.display === "none") {
            keyboard.style.display = "block";
        } else {
            keyboard.style.display = "none";
        }
    }
   
    const weightEditButton = document.querySelector(".mp_weight-section .fa-edit");

    const weightElement = document.querySelector(".mp_weight-section");

    weightEditButton.addEventListener("click", function () {
        const weightText = weightElement.querySelector("span");
        const weightValue = weightText.textContent.trim();

        
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = weightValue;
        inputField.className = "weight-input-field"; 

     
        weightElement.replaceChild(inputField, weightText);

       
        toggleKeyboard(inputField);

        inputField.addEventListener("blur", function () {
          
            weightText.textContent = inputField.value;
           
            weightElement.replaceChild(weightText, inputField);
           
            document.getElementById("keyboard").style.display = "none";
        });

        inputField.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                
                weightText.textContent = inputField.value;
               
                weightElement.replaceChild(weightText, inputField);
              
                document.getElementById("keyboard").style.display = "none";
            }
        });

        inputField.focus();
    });
});

