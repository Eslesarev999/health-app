document.addEventListener('DOMContentLoaded', function () {
    const chartIcon = document.getElementById('chartIcon');
    const weightIcon = document.getElementById('weightIcon');
    const usersIcon = document.getElementById('usersIcon');

    chartIcon.addEventListener('click', () => {
        window.location.href = 'homepage.html';
    });

    weightIcon.addEventListener('click', () => {
        window.location.href = 'metrics_page.html';
    });

    usersIcon.addEventListener('click', () => {
        // Redirect to the specific HTML page for users
        window.location.href = 'community.html'; //doesn't currently exist
    });
});