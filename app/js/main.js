(() => {
    const langButton = document.querySelector('.lang__button');
    const language = langButton.querySelectorAll('.lang__toggle')

    langButton.addEventListener('click', () => {
        language.forEach(element => element.classList.toggle('lang__toggle--on' ))
    });
})();

(() => {
    const menuButton = document.querySelector('.menu__button');
    const burgerOpen = menuButton.firstElementChild
    const menuList = document.querySelector('.menu__list');

    menuButton.addEventListener('click', () => {
        let expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !expanded);
        burgerOpen.classList.toggle('menu__burger--cross' );
        menuList.classList.toggle('menu__list--open');
           });
})();
