console.log("👋 Hello there, curious 37signals reviewer! Thanks for checking under the hood.");

//On load, add a click listener to all project images
document.addEventListener('DOMContentLoaded', () => {

    const scrollPerImage = 25;
    const carousels = document.querySelectorAll('.project-image-carousel');

    // Iterate over each carousel
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.project-image'); 

        images.forEach(image => {
            image.addEventListener('click', () => {
                if (window.innerWidth < 768) return;

                const index = image.getAttribute('data-index');
                console.log(`Carousel image ${index} clicked`);
                const scrollAmount = index * scrollPerImage
                carousel.style.transform = `translateX(-${scrollAmount}%)`;

                image.classList.add('active');

                const imagesToRemoveClassFrom = carousel.querySelectorAll('.project-image:not([data-index="' + index + '"])');
                imagesToRemoveClassFrom.forEach(otherImage => {
                    otherImage.classList.remove('active');
                });
            });
        });
    });
});
