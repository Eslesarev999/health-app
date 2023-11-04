document.addEventListener('DOMContentLoaded', function () {
    const chartIcon = document.getElementById('chartIcon');
    const weightIcon = document.getElementById('weightIcon');
    const usersIcon = document.getElementById('usersIcon');

    chartIcon.addEventListener('click', () => {
        window.location.href = 'homepage.html';
    });

    weightIcon.addEventListener('click', () => {
        window.location.href = 'today_metrics.html';
    });

    usersIcon.addEventListener('click', () => {
        window.location.href = 'community.html';
    });
});