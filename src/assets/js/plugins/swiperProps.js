const getSlidesCount = (selector) => {
  const num = document.querySelectorAll(`${selector} .swiper-slide`).length;
  return (num < 10) ? `0${num}` : num;
};

export const KITprops = {
  direction: 'horizontal',
  speed: 400,
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '#sliderORDpag',
    type: 'fraction',
    renderFraction: function(currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '&nbsp; - &nbsp;' +
        '<span class="' + totalClass + '"></span>';
    },
    formatFractionCurrent: function(num) {
      return (num < 10) ? `0${num}` : num;
    },
    formatFractionTotal: function() {
      return getSlidesCount('#swiperKIT');
    }
  },
  scrollbar: {
    el: '#sliderORDbar',
    dragSize: 200,
  },
  breakpoints: {
    1500: {
      spaceBetween: 80,
    },
    1280: {
      spaceBetween: 60,
    },
    768: {
      spaceBetween: 50,
    }
  }
}

export const FBprops = {
  direction: 'horizontal',
  slidesPerView: 1.5,
  spaceBetween: 30,
  speed: 400,
  pagination: {
    el: '#sliderFBpag',
    type: 'fraction',
    renderFraction: function(currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '&nbsp; - &nbsp;' +
        '<span class="' + totalClass + '"></span>';
    },
    formatFractionCurrent: function(num) {
      return (num < 10) ? `0${num}` : num;
    },
    formatFractionTotal: function() {
      return getSlidesCount('#swiperFB');
    }
  },
  scrollbar: {
    el: '#sliderFBbar',
    dragSize: 200,
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  }
}

export const CUBICLEprops = {
  effect: 'cube',
  speed: 1000,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 60,
    shadowScale: 0.9,
  },
  // enabled: false,
  allowTouchMove: false,
  // скорее всего можно добавить через breakpoints - для телефона
  zoom: {
    maxRatio: 2,
  },
  pagination: {
    el: "#thumbnails",
    clickable: true,
    renderBullet: function(index, className) {
      return `<img class=${className} src="./assets/images/sliderPopup/slide${index+1}.jpg" alt="tumbnail">`;
    },
  },
}