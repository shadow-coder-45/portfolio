const navbar = document.querySelector(".dropdown");
const navLinks = document.querySelectorAll(".dropdown a");
const textElement = document.querySelector(".typewriter-text");

if (navbar && textElement) {

    
    function hamburg() {
        navbar.classList.add('show');
        navbar.style.transform = "translateY(0px)";
    }

    function cancel() {
        navbar.classList.remove('show');
        navbar.style.transform = "translateY(-500px)";
    }

    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            cancel();
        });
    });

    
    const texts = ["DEVELOPER", "CODER", "STUDENT"];
    let speed = 100;
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
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

    
    document.addEventListener("DOMContentLoaded", typeWriter);

} else {
    console.error("Navbar or typewriter element not found!");
}
