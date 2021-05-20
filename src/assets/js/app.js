"use strict"

import Swiper from 'swiper/bundle';
import {
  popUpSliderOptions
} from './popUp/slider.js';

const swiper = new Swiper('.swiper-container', popUpSliderOptions);

//////////////////////////////////////////////////////////////////////////////
const options1 = {
  effect: 'fade',
  slidesPerView: 2,
  loop: false,
  speed: 300,
  enabled: false,
  allowTouchMove: false, // скорее всего можно добавить через breakpoints - для телефона
  zoom: {
    maxRatio: 2,
  },
  pagination: {
    el: ".swiper-miniatures",
    clickable: true,
    renderBullet: function(index, className) {
      return `<img class=${className} src="./assets/images/sliderPopup/slide${index+1}.jpg" alt="tumbnail">`;

    },
  },
}


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