console.log("👋 Hello there, curious 37signals reviewer! Thanks for checking under the hood.");

//On load, add a click listener to all project images
document.addEventListener('DOMContentLoaded', () => {

    const scrollPerImage = 25;
    const carousel = document.querySelector('.project-image-carousel');
    const images = carousel.querySelectorAll('.project-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            //Check if window width is less than 768px
            if (window.innerWidth < 768) return;
            const index = image.getAttribute('data-index');
            console.log(index + " clicked");
            const scrollAmount = index * scrollPerImage;
            carousel.style.transform = `translateX(-${scrollAmount}%)`;

            //Add a class to the clicked image
            image.classList.add('active');

            //Remove the class from the other images
            const imagesToRemoveClassFrom = document.querySelectorAll('.project-image:not([data-index="' + index + '"])');
            imagesToRemoveClassFrom.forEach(image => {
                image.classList.remove('active');
            });
        });
    });
});
