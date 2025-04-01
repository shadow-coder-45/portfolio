// Navbar Toggle Logic
const navbar = document.querySelector(".dropdown");
const navLinks = document.querySelectorAll(".dropdown a");
const hamburgIcon = document.querySelector(".hamburg");
const cancelIcon = document.querySelector(".cancel");

// Prevent default on mobile touchstart to avoid unwanted behaviors
function handleTouchStart(e) {
    // Only prevent default if it's a menu toggle
    if (e.target === hamburgIcon || e.target.closest(".hamburg")) {
        e.preventDefault();
    }
}

function toggleMenu(e) {
    e.stopPropagation(); // Prevent event bubbling
    navbar.classList.toggle("show");
}

// Close menu when tapping outside - optimized for mobile
document.addEventListener("touchstart", (event) => {
    if (navbar.classList.contains("show") && 
        !navbar.contains(event.target) && 
        !hamburgIcon.contains(event.target)) {
        navbar.classList.remove("show");
    }
}, { passive: false });

// Keep the click event for non-touch devices
document.addEventListener("click", (event) => {
    if (navbar.classList.contains("show") && 
        !navbar.contains(event.target) && 
        !hamburgIcon.contains(event.target)) {
        navbar.classList.remove("show");
    }
});

// Close menu when clicking a link - improved for mobile
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        navbar.classList.remove("show");
        // Adding a small delay before navigating can help with animations
        if (link.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            setTimeout(() => {
                window.location.href = link.getAttribute("href");
            }, 300);
        }
    });
});

// Attach event listeners with proper event handling
hamburgIcon.addEventListener("touchstart", handleTouchStart, { passive: false });
hamburgIcon.addEventListener("click", toggleMenu);
cancelIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    navbar.classList.remove("show");
});

// Typewriter Effect - optimized for mobile
const texts = ["DEVELOPER", "CODER", "STUDENT"];
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;
let isTyping = false;
let typewriterTimer;

// Adjust typing speed based on device
const isMobile = window.matchMedia("(max-width: 768px)").matches;
let typeSpeed = isMobile ? 120 : 100; // Slightly slower on mobile
let eraseSpeed = isMobile ? 60 : 50;

function typeWriter() {
    if (!textElement) return; // Safety check
    
    if (charIndex === 0) {
        textElement.innerHTML = ""; // Reset before typing
    }
    
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        typewriterTimer = setTimeout(typeWriter, typeSpeed);
    } else {
        typewriterTimer = setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (!textElement) return; // Safety check
    
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        typewriterTimer = setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        typewriterTimer = setTimeout(typeWriter, 500);
    }
}

// Handle visibility changes (when user switches tabs or apps on mobile)
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        // Clear any pending timeouts when page is not visible
        clearTimeout(typewriterTimer);
        isTyping = false;
    } else if (!isTyping) {
        // Resume typewriter when page becomes visible again
        isTyping = true;
        
        // Reset current word if partially typed
        charIndex = 0;
        typeWriter();
    }
});

// Start typewriter effect on page load with better handling
window.onload = function() {
    isTyping = true;
    
    // Add resize listener to adjust for orientation changes
    window.addEventListener("resize", () => {
        const wasMobile = typeSpeed > 100;
        const nowMobile = window.matchMedia("(max-width: 768px)").matches;
        
        // Update speeds if device type changed
        if (wasMobile !== nowMobile) {
            typeSpeed = nowMobile ? 120 : 100;
            eraseSpeed = nowMobile ? 60 : 50;
        }
    });
    
    typeWriter();
};