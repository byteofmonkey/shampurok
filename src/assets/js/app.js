import Swiper from 'swiper/bundle';
import SimpleBar from 'simplebar/dist/simplebar';
// new SimpleBar() - не нужно вызывать
import SimpleParallax from 'simple-parallax-js';

import ScrollMagic from 'scrollmagic';

import Menu from './02plugins/menu';
import Accordion from './02plugins/accordion';


import Section from "./01renderSections/02sectionConstructor";
import {
  sliderFeebackData,
  sliderKitData,
  modalKitData,
  modalOrderData,
} from "./01renderSections/01renderData";

import sliderFeedback from "./01renderSections/04sectionSliderFeedback";
import sliderKit from "./01renderSections/03sectionSliderKit";
import ModalKit from "./01renderSections/05modalKitConstructor";
import ModalOrder from "./01renderSections/06modalOrderConstructor";

import {
  KITprops,
  CUBICLEprops,
  FBprops,
} from './02plugins/swiperProps.js';


// Section(parentSelector, cardClassName, innerHTMLfunction, contentArray)
new Section("#swiperFB .swiper-wrapper", "swiper-slide", sliderFeedback, sliderFeebackData).render();
new Section("#swiperKIT .swiper-wrapper", "swiper-slide", sliderKit, sliderKitData).render();

new ModalOrder(modalOrderData).render();

new Swiper('#swiperKIT', KITprops);
new Swiper('#swiperFB', FBprops);



new Menu();
new Accordion();


/////////////////////////////////////////////////////////////////////////
const swp = new Swiper('#cubicle', CUBICLEprops);

const buttonsKit = document.querySelectorAll('#swiperKIT .link');

buttonsKit.forEach(item => {
  item.addEventListener('click', function() {
    const modal = document.querySelector('.modalProductCard');

    const id = this.dataset.card;

    modal.classList.add('open');
    new ModalKit(id, modalKitData).render();

    swp.update();
    swp.slideTo(0, 600);

  })
});

/////////////////////////////////////////////////////////////////////////
// установка события на кнопку intro - узнать ингридиент
const introBtn = document.querySelector('.intro .btn-solid');

introBtn.addEventListener('click', () => {
  document.querySelector('.tiles').scrollIntoView({
    block: 'center'
  });
});
/////////////////////////////////////////////////////////////////////////
const allModal = document.querySelectorAll('[data-modal]');
const closeBtn = document.querySelectorAll('[data-close]');
const modalWrapper = document.querySelectorAll('.modal-wrapper');

const closeAllModal = () => {
  allModal.forEach(item => item.classList.remove('open'));
};

closeBtn.forEach((item) => {
  item.addEventListener('click', closeAllModal);
});

modalWrapper.forEach(item => item.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-wrapper')) closeAllModal();
}));

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape") closeAllModal();
});

/////////////////////////////////////////////////////////////////////////
const openModalCallbackBtn = document.querySelectorAll('[data-callBack]');
const modalCallback = document.querySelector('.modalCallBack');

openModalCallbackBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    closeAllModal();
    modalCallback.classList.add('open');
  });
});
/////////////////////////////////////////////////////////////////////////
const openModalOrderBtn = document.querySelector('.order .btn-solid');
const modalOrder = document.querySelector('.modalOrder');

openModalOrderBtn.addEventListener('click', () => {
  closeAllModal();
  modalOrder.classList.add('open');
});





/////////////////////////////////////////////////////////////////////////
// const image = document.querySelector('#ps1');
// new SimpleParallax(image, {
//   delay: 0.2, // 1s, продолжает двигаться после завершения скрола
//   orientation: 'down', //right, down, left, up left, up right, down left or down right
//   scale: 10,
//   overflow: true, // поверх осталных
//   // customContainer: '#mainId', // относительно чего параллакс
//   // customWrapper: '#mainId',
//   // maxTransition: 200
//   transition: 'ease-out'
// });

// const image2 = document.querySelector('#ps2');
// new SimpleParallax(image2, {
//   delay: 1, // 1s, продолжает двигаться после завершения скрола
//   orientation: 'down', //right, down, left, up left, up right, down left or down right
//   scale: 3,
//   overflow: true, // поверх осталных
//   // customContainer: '.story', // относительно чего параллакс
//   customWrapper: '.wrapperpr',
//   // maxTransition: 200
// });

// const image3 = document.querySelector('#ps3');
// new SimpleParallax(image3, {
//   delay: 5, // 1s, продолжает двигаться после завершения скрола
//   orientation: 'down', //right, down, left, up left, up right, down left or down right
//   scale: 3,
//   overflow: true, // поверх осталных
//   // customContainer: '.story', // относительно чего параллакс
//   customWrapper: '.wrapperpr',
//   // maxTransition: 200
// });

// const image4 = document.querySelector('#ps4');
// new SimpleParallax(image4, {
//   delay: 1, // 1s, продолжает двигаться после завершения скрола
//   orientation: 'down', //right, down, left, up left, up right, down left or down right
//   scale: 2,
//   overflow: true, // поверх осталных
//   // customContainer: '.story', // относительно чего параллакс
//   // customWrapper: '.wrapperpr',
//   // maxTransition: 200
// });


const targetMain = document.querySelector('main');
const ttt = document.documentElement;
document.addEventListener('scroll', (e) => {

  let a = ttt.scrollTop * 0.7 + 'px';
  targetMain.style = `background-position: center ${a};`;
});

























/*!	
 * FitText.js 1.0 jQuery free version
 *
 * Copyright 2011, Dave Rupert http://daverupert.com 
 * Released under the WTFPL license 
 * http://sam.zoy.org/wtfpl/
 * Modified by Slawomir Kolodziej http://slawekk.info
 *
 * Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
 */
(function() {

  var addEvent = function(el, type, fn) {
    if (el.addEventListener)
      el.addEventListener(type, fn, false);
    else
      el.attachEvent('on' + type, fn);
  };

  var extend = function(obj, ext) {
    for (var key in ext)
      if (ext.hasOwnProperty(key))
        obj[key] = ext[key];
    return obj;
  };

  window.fitText = function(el, kompressor, options) {

    var settings = extend({
      'minFontSize': -1 / 0,
      'maxFontSize': 1 / 0
    }, options);

    var fit = function(el) {
      var compressor = kompressor || 1;

      var resizer = function() {
        el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
      };

      // Call once to set.
      resizer();

      // Bind events
      // If you have any js library which support Events, replace this part
      // and remove addEvent function (or use original jQuery version)
      addEvent(window, 'resize', resizer);
      addEvent(window, 'orientationchange', resizer);
    };

    if (el.length)
      for (var i = 0; i < el.length; i++)
        fit(el[i]);
    else
      fit(el);

    // return set of elements
    return el;
  };
})();

fitText(document.getElementById('fittext'), 1.3);