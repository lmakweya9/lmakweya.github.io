// === Dynamic Typing Effect ===
const typedTextSpan = document.querySelector("#typed-text");
const textArray = ["Aspiring AI/ML Engineer", "Machine Learning Practitioner", "Data Scientist", "Problem Solver"]; // Your phrases
const typingDelay = 100; // Milliseconds per character
const erasingDelay = 50; // Milliseconds per character
const newTextDelay = 2000; // Delay before typing new text (milliseconds)
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!typedTextSpan.classList.contains("typing")) typedTextSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        typedTextSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!typedTextSpan.classList.contains("erasing")) typedTextSpan.classList.add("erasing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        typedTextSpan.classList.remove("erasing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100); // Delay before typing next phrase
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Only start typing effect if the element exists
    if (typedTextSpan) {
        setTimeout(type, newTextDelay + 250);
    }
});

// === Smooth Scrolling for Navigation (Optional - if not already handled by CSS scroll-behavior) ===
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// === Sticky Navigation (Optional - A more robust way using JS) ===
const header = document.querySelector("header");
const navOffset = header.offsetTop; // Get initial offset of the header

function stickyNav() {
    if (window.pageYOffset > navOffset) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
window.addEventListener("scroll", stickyNav);

// Add CSS for .sticky class if you use the sticky nav JS
/*
// In your styles.css
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
}
*/