(function () {
    const loaderHTML = `
    <div id="page-loader">
    <div class="loader__image"><img src="./images/Type-Z.svg"></div>
</div>
  `;

    document.addEventListener('DOMContentLoaded', () => {
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    });
})();

window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.classList.add('hide');
    }
});

document.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link) return;

    const href = link.getAttribute('href');

    if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('javascript:') ||
        link.target === '_blank'
    ) {
        return;
    }

    if (link.hasAttribute('download')) return;

    const isExternal = link.hostname && link.hostname !== window.location.hostname;
    if (isExternal) return;

    e.preventDefault();

    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.classList.remove('hide');
    }

    setTimeout(() => {
        window.location.href = href;
    }, 250);
});
