document.addEventListener("DOMContentLoaded", function () {
    const done = document.getElementById("done_button");

    done.addEventListener("click", function () {
        window.history.back(); 
    });

});
