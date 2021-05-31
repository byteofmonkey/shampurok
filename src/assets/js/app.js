import Swiper from 'swiper/bundle';
import SimpleBar from 'simplebar/dist/simplebar';

import Menu from './plugins/menu';
import Accordion from './plugins/accordion';
import modalCallBack from './plugins/modalCallBack';




import Section from "./cards/constructor";
import {
  sliderFeebackData,
  sliderKitData,
  modalKitData,
} from "./cards/data";

import sliderFeedback from "./cards/sliderFeedback";
import sliderKit from "./cards/sliderKit";
import ModalKit from "./cards/modalKit";



import {
  KITprops,
  CUBICLEprops,
  FBprops,
} from './plugins/swiperProps.js';

// Section(parentSelector, cardClassName, innerHTMLfunction, contentArray)
new Section("#swiperFB .swiper-wrapper", "swiper-slide", sliderFeedback, sliderFeebackData).render();
new Section("#swiperKIT .swiper-wrapper", "swiper-slide", sliderKit, sliderKitData).render();







new Swiper('#swiperKIT', KITprops);
new Swiper('#swiperFB', FBprops);


new Menu();
new Accordion();
new modalCallBack();
// new SimpleBar();



// const images = document.querySelectorAll('.modalProductCard img');
// images.forEach(item => {
//   item.addEventListener('dragmove', (e) => e.preventDefault());

// })
// const popUpSliderWrapper = document.querySelector('.popUp__slider');
// const sliderItem = document.querySelector('.swiper-wrapper');
// const openPopUp = function(e) {
//   e.preventDefault();
//   popUpSliderWrapper.classList.toggle('popUp_open');

//   if (popUpSliderWrapper.classList.contains('popUp_open')) {
//     document.body.style.overflow = 'hidden';
//     swiper1.enable();
//     swiper1.update();
//     return;
//   }

//   swiper1.disable()
//   document.body.style.overflow = '';
// }
// document.querySelector('.popUp__openLink').addEventListener('click', openPopUp);
//////////////////////////////////////////////////////////////////////////////


const introBtn = document.querySelector('.intro .btn-solid');

introBtn.addEventListener('click', () => {
  document.querySelector('.tiles').scrollIntoView({
    block: 'center',
  });
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








const buttonsKit = document.querySelectorAll('#swiperKIT .link');
console.dir(buttonsKit[1].dataset.card);

new ModalKit(0, modalKitData).render();
let swp = new Swiper('#cubicle', CUBICLEprops);

setTimeout(() => {
  new ModalKit(1, modalKitData).render();
  swp.destroy();
  swp = new Swiper('#cubicle', CUBICLEprops);
}, 3000)