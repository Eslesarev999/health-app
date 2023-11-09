function loadMoreVideos() {
    const tutorialThumbnails = document.querySelector('.tutorial-thumbnails');

    
    const newContainer = document.createElement('div');
    newContainer.classList.add('mp_container');

    const newThumbnail = document.createElement('div');
    newThumbnail.classList.add('thumbnail_2');
    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = 'icons/fitness_4.png'; 
    thumbnailImage.alt = 'Video Placeholder';
    newThumbnail.appendChild(thumbnailImage);

    // Create a tutorial section
    const newTutorialSection = document.createElement('div');
    newTutorialSection.classList.add('mp_section', 'tutorial_chest');

    const newTutorialContent = document.createElement('div');
    newTutorialContent.textContent = 'Total Body for Beginners: \n \n Get ready for an epic fitness adventure in our YouTube video. \nIf you are new to the workout game, this one is for you!'; // Set the content

    newTutorialSection.appendChild(newTutorialContent);

    // Create the video feedback section
    const newVideoFeedback = document.createElement('div');
    newVideoFeedback.classList.add('video-feedback');

    const thumbsUpIcon = document.createElement('i');
    thumbsUpIcon.classList.add('fas', 'fa-thumbs-up', 'thumbs-icon', 'thumbs-up');

    const thumbsDownIcon = document.createElement('i');
    thumbsDownIcon.classList.add('fas', 'fa-thumbs-down', 'thumbs-icon', 'thumbs-down');

    newVideoFeedback.appendChild(thumbsUpIcon);
    newVideoFeedback.appendChild(thumbsDownIcon);

    newContainer.appendChild(newThumbnail);
    newContainer.appendChild(newTutorialSection);
    newContainer.appendChild(newVideoFeedback);

    tutorialThumbnails.appendChild(newContainer);

    thumbsUpIcon.addEventListener('click', function () {
        if (!thumbsUpIcon.classList.contains('highlighted')) {
            toggleIconColor(thumbsUpIcon);
            const associatedThumbsDownIcon = thumbsUpIcon.parentElement.querySelector('.thumbs-down');
            if (associatedThumbsDownIcon.classList.contains('highlighted')) {
                toggleIconColor(associatedThumbsDownIcon);
            }
        }
    });

    thumbsDownIcon.addEventListener('click', function () {
        if (!thumbsDownIcon.classList.contains('highlighted')) {
            toggleIconColor(thumbsDownIcon);
            const associatedThumbsUpIcon = thumbsDownIcon.parentElement.querySelector('.thumbs-up');
            if (associatedThumbsUpIcon.classList.contains('highlighted')) {
                toggleIconColor(associatedThumbsUpIcon);
            }
        }
    });

    function toggleIconColor(icon) {
        icon.classList.toggle('highlighted');
    }
    
}
