const getSlidesCount = (selector) => {
  const num = document.querySelectorAll(`${selector} .swiper-slide`).length;
  return (num < 10) ? `0${num}` : num;
};

export const KITprops = {
  direction: 'horizontal',
  speed: 400,
  slidesPerView: 'auto',
  spaceBetween: 30,
  noSwipingSelector: 'button',
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
  slidesPerView: 1.3,
  spaceBetween: 30,
  speed: 400,
  slideToClickedSlide: true,
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
    1400: {
      slidesPerView: 4.2,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3.6,
    },
    768: {
      slidesPerView: 3.4,
      spaceBetween: 45,
      slideToClickedSlide: false,
    },
    640: {
      slidesPerView: 3.2,
    },
    480: {
      slidesPerView: 2.5,
    },
    320: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
  }
}

export const CUBICLEprops = {
  effect: 'cube',
  speed: 500,
  allowTouchMove: false,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 60,
    shadowScale: 0.9,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  zoom: {
    maxRatio: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
    renderBullet: function(index, className) {
      return `<span class="${className} no-select"><img src=${this.imagesToLoad[index].getAttribute('src')} alt="tumbnail"></span>`;
    },
  },
}