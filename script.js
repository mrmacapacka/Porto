// Typing Animation (already in place)
const textArray = ["Developer", "Discord Bot Maker", "API Builder", "Roblox Scripter", "Automation Enthusiast"];
let typingText = document.querySelector(".typing-text");
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  if (i < textArray.length) {
    if (!isDeleting && j <= textArray[i].length) {
      currentText = textArray[i].substring(0, j++);
      typingText.textContent = currentText;
    } else if (isDeleting && j >= 0) {
      currentText = textArray[i].substring(0, j--);
      typingText.textContent = currentText;
    }

    if (j === textArray[i].length) {
      isDeleting = true;
      setTimeout(type, 1000); 
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === textArray.length) i = 0;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
document.addEventListener("DOMContentLoaded", type);

// Timeline Scroll Reveal
const timelineItems = document.querySelectorAll(".timeline-item");

function revealTimeline() {
  const triggerBottom = window.innerHeight * 0.85;
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealTimeline);
document.addEventListener("DOMContentLoaded", revealTimeline);
