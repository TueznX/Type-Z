const MobileMenu = document.querySelector('.header__mobile-menu');
const MobileMenuIcon = document.getElementById('header__mobile-icon');

function MobileMenuShow() {
    const isOpen = MobileMenu.classList.toggle('header__menu-open');

    MobileMenuIcon.classList.toggle('fa-x', isOpen);
    MobileMenuIcon.classList.toggle('fa-list', !isOpen);
}

function MobileMenuClose() {
    MobileMenu.classList.remove('header__menu-open');
    MobileMenuIcon.classList.remove('fa-x');
    MobileMenuIcon.classList.add('fa-list');
}

document.querySelectorAll('.header__mobile-menu a, .header__mobile-menu button')
    .forEach(item => {
        item.addEventListener('click', MobileMenuClose);
    });



const header = document.getElementById('header');
const sentinel = document.getElementById('header__sentinel');

const observer = new IntersectionObserver(
    ([entry]) => {
        header.classList.toggle('fixed', !entry.isIntersecting);
    },
    { threshold: 0 }
);

observer.observe(sentinel);

document.querySelectorAll('.HomeButton').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const isHome =
            location.pathname === '/' ||
            location.pathname.endsWith('/index.html');

        if (isHome) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});