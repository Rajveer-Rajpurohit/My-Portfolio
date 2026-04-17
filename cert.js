const cards = document.querySelectorAll(".card");
const desc = document.getElementById("cert-desc");
let index = 0;

function updateCarousel(){
    cards.forEach(card => card.classList.remove("active"));
    cards[index].classList.add("active");
    desc.textContent = cards[index].dataset.desc;
}
document.getElementById("next").onclick = () => {
    index = (index+1)%cards.length;
    updateCarousel();
};
document.getElementById("prev").onclick = () => {
    index = (index - 1 + cards.length)%cards.length;
    updateCarousel();
};
cards.forEach((card,i) =>{
    card.addEventListener('mouseenter',() => {
        index = i;
        updateCarousel();
    });
});