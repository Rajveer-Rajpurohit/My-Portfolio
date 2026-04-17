const buttons = document.querySelectorAll(".plist button");
const sections = document.querySelectorAll("[id^='s']");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;

        sections.forEach(sec => sec.classList.remove("active"));
        document.getElementById(target).classList.add("active");

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

const activeSection = document.querySelector(".project-section.active");
if(activeSection){
    const id = activeSection.id;
    const activeBtn = document.querySelector(`.plist button[data-target = "${id}"]`);
    if(activeBtn) activeBtn.classList.add("active");
}