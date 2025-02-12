// Get the custom cursor element
const cursor = document.querySelector(".custom-cursor");

// Update cursor position on mouse move
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Ensure cursor stays visible on hover
document.addEventListener("mouseover", () => {
    cursor.style.opacity = "1";
});
document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
});




let slideIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    slideIndex += direction;

    // Loop back when reaching the last or first image
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Move the carousel
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}