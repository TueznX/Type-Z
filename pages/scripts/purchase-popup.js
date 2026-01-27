document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('purchase__popup');
  const popupContent = popup.querySelector('.purchase__popup-content');
  const buyButton = document.getElementById('purchase__button');

  buyButton.addEventListener('click', () => {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  popup.addEventListener('click', () => {
    closePopup();
  });

  popupContent.addEventListener('click', e => {
    e.stopPropagation();
  });

  function closePopup() {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  }
});