const consoleContainer = document.getElementById("line-container");
const accessEl = document.getElementById("access");

const cfg = {
  username: "CalvinYorn",
  password: "hunter2",
  maskChar: "*",
  typeSpeed: 250,
  pauseAfterType: 2000,
};

// Type text with cursor following
function typeText(parentEl, text, speed, mask=false, maskChar="*") {
  return new Promise(resolve => {
    const span = document.createElement("span");
    span.classList.add("value");

    // Add cursor inside same span
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    cursor.textContent = "|";
    span.appendChild(cursor);

    parentEl.appendChild(span);

    let i = 0;
    const step = () => {
      // Insert typed character before cursor
      const charNode = document.createTextNode(mask ? maskChar : text.charAt(i));
      span.insertBefore(charNode, cursor);
      i++;
      if (i < text.length) setTimeout(step, speed);
      else resolve();
    };
    step();
  });
}

// Create a line with label
function createLine(label) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.style.display = "flex";
  line.style.alignItems = "center";

  const labelSpan = document.createElement("span");
  labelSpan.textContent = label;
  labelSpan.style.marginRight = "10px";
  line.appendChild(labelSpan);

  consoleContainer.appendChild(line);
  return line;
}

// Main sequence
async function runSequence() {
  // 1) Username
  let userLine = createLine("Username:");
  await typeText(userLine, cfg.username, cfg.typeSpeed, false);
  await new Promise(r => setTimeout(r, cfg.pauseAfterType));
  consoleContainer.removeChild(userLine);

  // 2) Password
  let passLine = createLine("Password:");
  await typeText(passLine, cfg.password, cfg.typeSpeed, true, cfg.maskChar);
  await new Promise(r => setTimeout(r, cfg.pauseAfterType));
  consoleContainer.removeChild(passLine);

  // 3) Access granted
  accessEl.style.opacity = "1";
  accessEl.style.transform = "scale(1)";
  accessEl.setAttribute("aria-hidden", "false");
}

// Start typing when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(runSequence, 500);
});
