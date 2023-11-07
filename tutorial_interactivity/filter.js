// JavaScript for filtering videos
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const videoContainers = document.querySelectorAll('.mp_container');

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const filter = button.textContent;
            filterVideos(filter);
        });
    });

    function filterVideos(filter) {
        videoContainers.forEach(function (container) {
            const containerFilter = container.getAttribute('data-filter');

            if (filter === 'All' || filter === containerFilter) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }
});
