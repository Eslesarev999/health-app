document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.style.setProperty('--circle-bg', 'green');
                label.style.setProperty('--circle-border', 'green');
            } else {
                label.style.setProperty('--circle-bg', 'white');
                label.style.setProperty('--circle-border', '#075685');
            }
        });
    });
});