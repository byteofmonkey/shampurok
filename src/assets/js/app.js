import Swiper from 'swiper/bundle';
import SimpleBar from 'simplebar/dist/simplebar';

import Menu from './plugins/menu';
import Accordion from './plugins/accordion';
import modalCallBack from './plugins/modalCallBack';

import {
  sliderORD,
  sliderFB,
  shmiperOptions,
} from './plugins/slider.js';

new Menu();
new Accordion();
new modalCallBack();

// new SimpleBar();

new Swiper('#sliderORD', sliderORD);
new Swiper('#sliderFB', sliderFB);

new Swiper('#shmiper', shmiperOptions);

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















































const introBtn1 = document.querySelector('.intro .btn-solid');

introBtn1.addEventListener('click', () => {

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

fitText(document.getElementById('fittext'), 1.3)