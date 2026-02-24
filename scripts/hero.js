const images = document.querySelectorAll('.hero__banner-images img');
const buttons = document.querySelectorAll('.banner__buttons button');

let currentIndex = 0;
let interval;

function showSlide(index) {
  images.forEach(img => img.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  images[index].classList.add('active');
  buttons[index].classList.add('active');

  currentIndex = index;
}

function nextSlide() {
  let next = currentIndex + 1;
  if (next >= images.length) next = 0;
  showSlide(next);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    showSlide(Number(button.dataset.index));
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

showSlide(0);

interval = setInterval(nextSlide, 5000);