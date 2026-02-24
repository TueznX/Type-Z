const cards = document.getElementById("products1__cards");
const btnLeft = document.querySelector(".products1__left-button");
const btnRight = document.querySelector(".products1__right-button");

const scrollAmount = 280;

btnRight.onclick = () => {
  cards.scrollBy({ left: scrollAmount, behavior: "smooth" });
};

btnLeft.onclick = () => {
  cards.scrollBy({ left: -scrollAmount, behavior: "smooth" });
};

const cards2 = document.getElementById("products2__cards");
const btnLeft2 = document.querySelector(".products2__left-button");
const btnRight2 = document.querySelector(".products2__right-button");

const scrollAmount2 = 280;

btnRight2.onclick = () => {
  cards2.scrollBy({ left: scrollAmount, behavior: "smooth" });
};

btnLeft2.onclick = () => {
  cards2.scrollBy({ left: -scrollAmount, behavior: "smooth" });
};

document.querySelectorAll('.products1__card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    window.location.href = `pages/product-details.html?id=${id}`;
  });
});

document.querySelectorAll('.products2__card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    window.location.href = `pages/product-details.html?id=${id}`;
  });
});