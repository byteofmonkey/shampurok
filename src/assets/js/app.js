import Swiper from 'swiper/bundle';
import SimpleBar from 'simplebar/dist/simplebar';
import menu from './menu';

import {
  sliderORD,
  sliderFB
} from './slider.js';

menu();

new SimpleBar(document.getElementById('headerMenu'), {
  autoHide: false
});

new Swiper('#sliderORD', sliderORD);
new Swiper('#sliderFB', sliderFB);


//////////////////////////////////////////////////////////////////////////////
const options1 = {
  effect: 'cube',
  speed: 400,
  enabled: false,
  allowTouchMove: false, // скорее всего можно добавить через breakpoints - для телефона
  zoom: {
    maxRatio: 2,
  },
  pagination: {
    el: ".swiper-tumbnails",
    clickable: true,
    renderBullet: function(index, className) {
      return `<img class=${className} src="./assets/images/sliderPopup/slide${index+1}.jpg" alt="tumbnail">`;
    },
  },
}


// document.querySelector('.swiper-container').addEventListener('dragstart', (e) => {
//   e.preventDefault()
// })

//////////////////////////////////////////////////////////////////////////////
const swiper1 = new Swiper('.swiper', options1);

const popUpSliderWrapper = document.querySelector('.popUp__slider');
const sliderItem = document.querySelector('.swiper-wrapper');
const openPopUp = function(e) {
  e.preventDefault();
  popUpSliderWrapper.classList.toggle('popUp_open');

  if (popUpSliderWrapper.classList.contains('popUp_open')) {
    document.body.style.overflow = 'hidden';
    swiper1.enable();
    swiper1.update();
    return;
  }

  swiper1.disable()
  document.body.style.overflow = '';
}
document.querySelector('.popUp__openLink').addEventListener('click', openPopUp);


//////////////////////////////////////////////////////////////////////////////



















// swiper.isEnd
// swiper.slideNext(speed, runCallbacks)
// allowTouchMove: false // можно свайпать только по slidePrev or slideNext


// const menuButton = document.querySelector('.menu-button');

// const onMenu = () => {
//   swiper.enable();

//   console.log(swiper.isBeginning, swiper.isEnd);

//   if (swiper.isBeginning) {
//     swiper.slideNext();
//   } else {
//     swiper.slidePrev();
//   }
// };

// var swiper = new Swiper('#menuSlider', {
//   slidesPerView: 'auto',
//   initialSlide: 0,
//   resistanceRatio: 0.8,
//   enabled: false,
//   slideToClickedSlide: true,

//   on: {
//     beforeInit: function() {
//       menuButton.addEventListener('click', onMenu, true);
//     },
//     transitionEnd: function() {
//       if (swiper.isEnd) {
//         console.log('end')
//         menuButton.classList.add('closebtnn');
//       }

//       if (swiper.isBeginning) {
//         console.log("beginning");
//         menuButton.classList.remove('closebtnn');
//         swiper.disable();
//       }


//     },
//   },
// });



















const accorderon = document.querySelector('#accordeon');

const accordeonItems = accordeon.children;

// console.log(accordeonItems);
accordeonItems[0].classList.add('open');

const toggleItems = (e) => {
  const target = e.target.closest('li');

  for (let item of accordeonItems) {
    (item === target) ? item.classList.add('open'): item.classList.remove('open')
  }
}
accordeonItems.forEach(item => item.addEventListener('click', toggleItems))


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const openModal = document.querySelector('#openModal');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', () => {
  modal.classList.add('error');
})