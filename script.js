// Typing effect for hero section
const typingText = document.querySelector('.typing-text');
const texts = ["Developer", "Discord Bot Creator", "Roblox Scripter", "Automation Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typingText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000); // start typing after 1s
});

// Timeline scroll animation
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimeline() {
  const triggerBottom = window.innerHeight * 0.85;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkTimeline);
window.addEventListener('load', checkTimeline);
