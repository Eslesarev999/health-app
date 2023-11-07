document.addEventListener('DOMContentLoaded', function () {
    const chartIcon = document.getElementById('chartIcon');
    const weightIcon = document.getElementById('weightIcon');
    const usersIcon = document.getElementById('usersIcon');
    const profIcon = document.getElementById('profIcon');
    const tutIcon = document.getElementById('newIcon');

    chartIcon.addEventListener('click', () => {
        window.location.href = 'homepage.html';
    });

    weightIcon.addEventListener('click', () => {
        window.location.href = 'today_metrics.html';
    });

    usersIcon.addEventListener('click', () => {
        window.location.href = 'community.html';
    });
    profIcon.addEventListener('click', () => {
        window.location.href = 'profile.html';
    });
    tutIcon.addEventListener('click', () => {
        window.location.href = 'tutorial.html';
    });
});
