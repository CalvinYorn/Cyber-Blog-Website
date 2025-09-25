const text = "Welcome to My Cybersecurity Blog";  //header effect
const typingElement = document.getElementById("type_effect"); // grabs id from html

let index = 0; // current character index

// Typing effect function
function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // typing speed (ms)
    }
}

// Start typing when page loads
window.onload = typeEffect;


//