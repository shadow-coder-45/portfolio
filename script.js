<<<<<<< HEAD
// Improved Navbar Toggle Logic with better mobile support
const navbar = document.querySelector(".dropdown");
const navLinks = document.querySelectorAll(".dropdown a");
const hamburgIcon = document.querySelector(".hamburg");
const cancelIcon = document.querySelector(".cancel");

// Better handling for mobile navigation
function hamburg() {
    navbar.classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function cancel() {
    navbar.classList.remove("show");
    document.body.style.overflow = ""; // Restore scrolling
}

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (navbar.classList.contains("show") && 
        !navbar.contains(event.target) && 
        event.target !== hamburgIcon && 
        !hamburgIcon.contains(event.target)) {
        cancel();
    }
});

// Enhanced Typewriter Effect with smoother transitions
const texts = ["DEVELOPER", "CODER", "STUDENT", "PROBLEM SOLVER"];
=======
// Navbar functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
    
    // Add event listener to close navbar when clicking anywhere
    setTimeout(() => {
        document.addEventListener('click', closeNavbarOnClickOutside);
    }, 10);
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
    
    // Remove the event listener
    document.removeEventListener('click', closeNavbarOnClickOutside);
}

function closeNavbarOnClickOutside(event) {
    const navbar = document.querySelector(".dropdown");
    const hamburg = document.querySelector(".hamburg");
    
    // Close navbar if click is outside navbar and not on hamburger icon
    if (!navbar.contains(event.target) && event.target !== hamburg) {
        cancel();
    }
}

// Typewriter effect
const texts = ["DEVELOPER", "CODER", "STUDENT"];
let speed = 100;
>>>>>>> corrected-fix
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;
let isTyping = true;
let typewriterTimer;

// Adaptive typing speed based on device performance
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const typeSpeed = isMobile ? 120 : 100;
const eraseSpeed = isMobile ? 60 : 50;
const pauseDelay = 1500; // Longer pause at completed words

function typeWriter() {
    if (!textElement) return;
    
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        typewriterTimer = setTimeout(typeWriter, typeSpeed);
    } else {
        typewriterTimer = setTimeout(eraseText, pauseDelay);
    }
}

function eraseText() {
    if (!textElement) return;
    
    if (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        typewriterTimer = setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        typewriterTimer = setTimeout(typeWriter, 500);
    }
}

<<<<<<< HEAD
// Resource optimization for animations
// Pause animations when not in viewport to save resources
const animatedSections = document.querySelectorAll("section");
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Pause/resume animations based on visibility
        const animatedElements = entry.target.querySelectorAll("[data-aos]");
        if (entry.isIntersecting) {
            animatedElements.forEach(el => {
                // Refresh AOS animations for this section
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            });
        }
    });
}, observerOptions);

animatedSections.forEach(section => {
    sectionObserver.observe(section);
});

// Smooth scrolling for navigation links with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Skip if it's just "#"
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        // Calculate navbar height dynamically for better offset
        const navHeight = document.querySelector('nav').offsetHeight;
        
        window.scrollTo({
            top: targetElement.offsetTop - navHeight,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navbar.classList.contains("show")) {
            cancel();
        }
    });
});

// Better visibility change handling
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        clearTimeout(typewriterTimer);
        isTyping = false;
    } else if (!isTyping) {
        isTyping = true;
        typeWriter();
    }
});

// Initialize typewriter on page load
window.addEventListener('load', function() {
    // Start typewriter effect
    typeWriter();
    
    // Performance optimization - add passive listeners where appropriate
    window.addEventListener('scroll', function() {
        // Dynamic header transparency based on scroll position
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
        } else {
            nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        }
    }, { passive: true });
    
    // Initialize AOS with better mobile support
    if (typeof AOS !== 'undefined') {
        AOS.init({ 
            offset: 100,
            duration: 800,
            once: true,
            disable: window.innerWidth < 768 ? 'phone' : false,
            startEvent: 'DOMContentLoaded'
        });
    }
});
=======
window.onload = typeWriter;
>>>>>>> corrected-fix
