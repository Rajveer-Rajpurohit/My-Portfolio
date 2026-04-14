const text = ["a Web Developer", "a Frontend Learner", "a Problem Solver","an Engineering Student"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (index >= text.length) index = 0;

    currentText = text[index];

    if (isDeleting) {
        document.getElementById("typing").textContent = currentText.substring(0, charIndex--);
    } else {
        document.getElementById("typing").textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        // setTimeout(type, 10);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(type, isDeleting ? 70 : 120);
}
type();
