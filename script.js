const text = "Welcome to My Cybersecurity Blog";  //header effect
const typingElement = document.getElementById("type_text"); // now targets the inner span where characters are injected


let index = 0; // current character index

// typing effect function
function typeEffect() {
    if (index < text.length) {
    typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150); // typing speed (ms)
    } else {
        // once done, wait a bit, then clear and restart
        setTimeout(() => {
            typingElement.textContent = "";
            index = 0;
            typeEffect();
        }, 5000); // pause before restarting (4 seconds here)
    }
}
// start typing when page loads
window.onload = typeEffect;

 
