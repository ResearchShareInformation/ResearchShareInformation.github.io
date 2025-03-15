// You can add JavaScript functionality here to manage your FPV drone content dynamically

document.addEventListener("DOMContentLoaded", function() {
    // Example of dynamically loading slides or content
    /*const slides = [
        "Slide 1: FPV Drone Basics",
        "Slide 2: FPV Technology Overview",
        "Slide 3: Advanced FPV Components"
    ];*/
    
    const slideContainer = document.createElement('div');
    slideContainer.id = 'slide-container';
    
    slides.forEach(slide => {
        const slideElement = document.createElement('p');
        slideElement.textContent = slide;
        slideContainer.appendChild(slideElement);
    });

    document.body.appendChild(slideContainer);
});
