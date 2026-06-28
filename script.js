const roles = [
  "Frontend Developer",
  "Web Developer",
  "JavaScript Enthusiast",
  "React Learner",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex++);
  } else {
    typingText.textContent = currentRole.substring(0, charIndex--);
  }

  let speed = isDeleting ? 70 : 120;

  if (!isDeleting && charIndex > currentRole.length) {
    isDeleting = true;
    speed = 1200; // Pause after typing
  }

  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
