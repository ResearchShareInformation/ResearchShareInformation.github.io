document.addEventListener("DOMContentLoaded", function() {
    // Define the slides
    const slides = [
        "Slide 1: FPV Drone Basics",
        "Slide 2: FPV Technology Overview",
        "Slide 3: Advanced FPV Components"
    ];

    // Target an existing section to append slides (e.g., #overview)
    const slideContainer = document.createElement('div');
    slideContainer.id = 'slide-container';

    // Add slides to the container
    slides.forEach(slide => {
        const slideElement = document.createElement('p');
        slideElement.textContent = slide;
        slideContainer.appendChild(slideElement);
    });

    // Append the container to a specific section (e.g., #overview)
    const targetSection = document.querySelector('#overview');
    if (targetSection) {
        targetSection.appendChild(slideContainer);
    } else {
        console.error("Target section not found!");
        document.body.appendChild(slideContainer); // Fallback
    }
});