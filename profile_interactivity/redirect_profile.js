document.addEventListener('DOMContentLoaded', function () {
    const prof = document.getElementById('profile-pic');
   

    prof.addEventListener('click', () => {
        window.location.href = 'profile.html';
    });

});