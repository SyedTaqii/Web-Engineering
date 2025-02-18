document.addEventListener("DOMContentLoaded", (event) => {
  const cursor = document.createElement("div");
  cursor.style.width = "20px";
  cursor.style.height = "20px";
  cursor.style.borderRadius = "50%";
  cursor.style.backgroundColor = "green";
  cursor.style.position = "absolute";
  cursor.style.pointerEvents = "none";
  cursor.style.zIndex = "1000";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX - 10}px`;
    cursor.style.top = `${e.pageY - 10}px`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check for saved user preference
  if (localStorage.getItem("theme") === "dark") {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "light") {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });
});

const home = document.getElementById("home");

const skills = ["Good", "an Athele", "a Software Engineer"];
let wordIndex = 0,
letterIndex = 0,
isDeleting = false;

function typeEffect() {
    let p = document.getElementById("skills");
    const typingElement = document.getElementById("typing-text");
    let currentWord = skills[wordIndex];
    let displayText = isDeleting
    ? currentWord.substring(0, letterIndex--)
    : currentWord.substring(0, letterIndex++);
    typingElement.innerHTML = displayText;
    
    if (!isDeleting && letterIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Wait before deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % skills.length; // Move to next word
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}
home.addEventListener("click", typeEffect);
document.addEventListener("DOMContentLoaded", typeEffect)

document.addEventListener("DOMContentLoaded", () => {
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            const isOpen = button.classList.contains("active");

            // Close all answers
            document.querySelectorAll(".faq-answer").forEach(ans => {
                ans.style.maxHeight = "0";
                ans.style.padding = "0 15px";
            });

            document.querySelectorAll(".faq-question").forEach(btn => {
                btn.classList.remove("active");
            });

            // Open the clicked one
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = "15px";
                button.classList.add("active");
            }
        });
    });
});
