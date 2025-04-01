// Navbar Toggle Logic
const navbar = document.querySelector(".dropdown");
const hamburgIcon = document.querySelector(".hamburg");
const cancelIcon = document.querySelector(".cancel");

// Menu toggle function 
function toggleMenu() {
    navbar.classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    // Only run this if menu is open
    if (navbar.classList.contains("show") && 
        !navbar.contains(event.target) && 
        !hamburgIcon.contains(event.target)) {
        toggleMenu();
    }
});

// Add touch support for better mobile experience
hamburgIcon.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevent default only when interacting with the hamburger
    toggleMenu();
}, { passive: false });

cancelIcon.addEventListener("touchstart", (e) => {
    e.preventDefault();
    toggleMenu();
}, { passive: false });

// Typewriter Effect
const texts = ["DEVELOPER", "CODER", "STUDENT"];
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;
let speed = 100;

function typeWriter() {
    let currentText = texts[textIndex];
    
    if (charIndex < currentText.length) {
        textElement.innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Start typewriter effect on page load
window.onload = typeWriter;
