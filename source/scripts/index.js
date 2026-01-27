/* в этот файл добавляет скрипты*/

// открытие и закрытие мобильного меню навигации
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// слайдер сравнения до и после
const container = document.querySelector('.compare-slider');
const slider = document.querySelector('.compare-slider__range-handle');

if (slider) {
  slider.addEventListener('input', (e) => {
    container.style.setProperty('--js-position', `${e.target.value}%`);
  });
}
