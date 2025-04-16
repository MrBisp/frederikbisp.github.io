console.log("👋 Hello there, curious 37signals reviewer! Thanks for checking under the hood.");

//On load, add a click listener to all project images
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.project-image-carousel');

    // Iterate over each carousel
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.project-image'); 
        const imageCount = images.length;

        // Set initial state
        images[0].classList.add('active');

        images.forEach(image => {
            image.addEventListener('click', () => {
                const activeImage = carousel.querySelector('.project-image.active');
                if (!activeImage) return;

                const activeImageIndex = parseInt(activeImage.getAttribute('data-index'), 10);

                // Set the current active image as prev
                activeImage.classList.remove('active');
                activeImage.classList.add('prev');

                // Calculate and set new active image
                const newIndex = (activeImageIndex + 1) % imageCount;
                const newActiveImage = carousel.querySelector('.project-image[data-index="' + newIndex + '"]');
                newActiveImage.style.zIndex = '5';

                // Remove prev class from any image that had it
                const prevImages = carousel.querySelectorAll('.project-image.prev');
                prevImages.forEach(prevImage => {
                    // Remove prev class after transition duration (500ms)
                    setTimeout(() => {
                        prevImage.classList.remove('prev');
                        newActiveImage.classList.add('active');
                        newActiveImage.style.zIndex = '';
                    }, 250);
                });

            });
        });
    });
});
