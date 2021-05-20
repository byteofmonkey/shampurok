"use strict"

import Swiper from 'swiper/bundle';







const options = {
  slidesPerView: 3,
  direction: 'horizontal',
  speed: 400,
  spaceBetween: 100,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',

    renderFraction: function(currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        ' - ' +
        '<span class="' + totalClass + '"></span>';
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 200,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
}

const swiper = new Swiper('.swiper-container', options);


















let test = document.querySelector('#test');
test.addEventListener('click', show);

let wrapper = document.querySelector('.swiper-wrapper');

function show() {

  this.classList.toggle('popUpActive');
  wrapper.classList.toggle('popUp');
}