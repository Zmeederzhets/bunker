(() => {
    const langButton = document.querySelector('.lang__button');
    let arr = langButton.getElementsByTagName('*')

    langButton.addEventListener('click', () => {
        for (let i of arr) {
            i.classList.toggle('lang__toggle--on' );
        }
    });
})();

(() => {
    const menuButton = document.querySelector('.menu__button');
    let burgerOpen = menuButton.firstElementChild
    const menuList = document.querySelector('.menu__list');

    menuButton.addEventListener('click', () => {
        let expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !expanded);
        burgerOpen.classList.toggle('menu__cross' );
        burgerOpen.classList.toggle('menu__burger' );
        menuList.classList.toggle('menu__list--open');
           });
})();
