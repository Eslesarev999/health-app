// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const thumbsUpIcons = document.querySelectorAll('.thumbs-up');
    const thumbsDownIcons = document.querySelectorAll('.thumbs-down');

    thumbsUpIcons.forEach(function (thumbsUpIcon) {
        thumbsUpIcon.addEventListener('click', function () {
            if (!thumbsUpIcon.classList.contains('highlighted')) {
                toggleIconColor(thumbsUpIcon);
                // Check if the associated thumbs-down icon is already highlighted and unhighlight it
                const associatedThumbsDownIcon = thumbsUpIcon.parentElement.querySelector('.thumbs-down');
                if (associatedThumbsDownIcon.classList.contains('highlighted')) {
                    toggleIconColor(associatedThumbsDownIcon);
                }
            }
        });
    });

    thumbsDownIcons.forEach(function (thumbsDownIcon) {
        thumbsDownIcon.addEventListener('click', function () {
            if (!thumbsDownIcon.classList.contains('highlighted')) {
                toggleIconColor(thumbsDownIcon);
                // Check if the associated thumbs-up icon is already highlighted and unhighlight it
                const associatedThumbsUpIcon = thumbsDownIcon.parentElement.querySelector('.thumbs-up');
                if (associatedThumbsUpIcon.classList.contains('highlighted')) {
                    toggleIconColor(associatedThumbsUpIcon);
                }
            }
        });
    });
});

function toggleIconColor(icon) {
    icon.classList.toggle('highlighted');
}
