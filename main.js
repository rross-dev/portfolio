// Vanilla JavaScript
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loading').classList.add('hide');
  }, 1000); // 2000 milliseconds = 2 seconds
});

// Vanilla JavaScript
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loading-inv').classList.add('hide');
  }, 1000); // 2000 milliseconds = 2 seconds
});



$(document).ready(function() {
    const projectThumbnails = document.querySelectorAll('.project-thumbnails img');
    const projectThumbnails2 = document.querySelectorAll('.project-thumbnails2 img');
    const projectThumbnails4 = document.querySelectorAll('.project-thumbnails4 img');
    const rsImg = document.querySelectorAll('.right-side img');
    const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
    const fullscreenImage = document.querySelector('.fullscreen-image');
    const exitFullscreenButton = document.querySelector('.exit-fullscreen-button');

    projectThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const thumbnailSrc = thumbnail.getAttribute('src');
            fullscreenImage.setAttribute('src', thumbnailSrc);
            fullscreenOverlay.style.display = 'block';
        });
    });

    projectThumbnails2.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const thumbnailSrc = thumbnail.getAttribute('src');
            fullscreenImage.setAttribute('src', thumbnailSrc);
            fullscreenOverlay.style.display = 'block';
        });
    });

    projectThumbnails4.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const thumbnailSrc = thumbnail.getAttribute('src');
            fullscreenImage.setAttribute('src', thumbnailSrc);
            fullscreenOverlay.style.display = 'block';
        });
    });

    rsImg.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const thumbnailSrc = thumbnail.getAttribute('src');
            fullscreenImage.setAttribute('src', thumbnailSrc);
            fullscreenOverlay.style.display = 'block';
        });
    });



    function exitFullscreen() {
        fullscreenOverlay.style.display = 'none';
    }

    exitFullscreenButton.addEventListener('click', exitFullscreen);

    fullscreenOverlay.addEventListener('click', function(event) {
        if (event.target === fullscreenOverlay) {
            exitFullscreen();
        }
    });
});

