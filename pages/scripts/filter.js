const applyBtn = document.getElementById('applyFilter');
const filtersMenu = document.querySelector('.boosts__filters');
const filtersToggleBtn = document.getElementById('filters__button');
const resetBtn = document.getElementById('filters__reset-button');

const checkboxes = filtersMenu.querySelectorAll('input[type="checkbox"]');
const cards = document.querySelectorAll('.boosts__card');

filtersToggleBtn.addEventListener('click', () => {
  filtersMenu.classList.toggle('active');
});

applyBtn.addEventListener('click', () => {
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  if (selected.length === 0 || selected.includes('all')) {
    cards.forEach(card => {
      card.style.display = 'block';
    });
  } else {
    cards.forEach(card => {
      const platform = card.dataset.platform;
      card.style.display = selected.includes(platform) ? 'block' : 'none';
    });
  }

  filtersMenu.classList.remove('active');

  resetBtn.style.display = 'inline-flex';
});

resetBtn.addEventListener('click', () => {
  checkboxes.forEach(cb => cb.checked = false);

  const allCheckbox = filtersMenu.querySelector('input[value="all"]');
  if (allCheckbox) allCheckbox.checked = true;

  cards.forEach(card => {
    card.style.display = 'block';
  });

  resetBtn.style.display = 'none';
});

checkboxes.forEach(input => {
  input.addEventListener('change', () => {
    if (input.checked) {
      checkboxes.forEach(other => {
        if (other !== input) {
          other.checked = false;
        }
      });
    }
  });
});
