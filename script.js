// Navbar Toggle Logic
const navbar = document.querySelector(".dropdown");
const navLinks = document.querySelectorAll(".dropdown a");
const hamburgIcon = document.querySelector(".hamburg");
const cancelIcon = document.querySelector(".cancel");

// Menu toggle function 
function hamburg() {
    navbar.classList.add("show");
}

// Menu close function
function cancel() {
    navbar.classList.remove("show");
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    // Only run this if menu is open
    if (navbar.classList.contains("show") && 
        !navbar.contains(event.target) && 
        !hamburgIcon.contains(event.target)) {
        cancel();
    }
});

// Add touch support for better mobile experience
hamburgIcon.addEventListener("touchstart", function(e) {
    // Prevent default only on the hamburger icon
    if (e.target === hamburgIcon || e.target.closest(".hamburg")) {
        e.preventDefault();
    }
    hamburg();
}, { passive: false });

cancelIcon.addEventListener("touchstart", function(e) {
    e.preventDefault();
    cancel();
}, { passive: false });

// Typewriter Effect
const texts = ["DEVELOPER", "CODER", "STUDENT"];
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;
let speed = 100;

function typeWriter() {
    if (charIndex === 0) {
        textElement.innerHTML = ""; // Reset before typing
    }
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
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