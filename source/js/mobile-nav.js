const mainNav = document.querySelector('.main-nav');
const toggle = document.querySelector('.header__toggle');

mainNav.classList.remove('main-nav--no-js');
toggle.classList.add('header__toggle--closed');

toggle.addEventListener('click', () => {
  if (toggle.classList.contains('header__toggle--closed')) {
    toggle.classList.remove('header__toggle--closed');
    toggle.classList.add('header__toggle--opened');
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    toggle.classList.add('header__toggle--closed');
    toggle.classList.remove('header__toggle--opened');
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
