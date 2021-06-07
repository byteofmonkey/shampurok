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
  grabCursor: true,
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
    draggable: true,
    el: '#sliderORDbar',
    dragSize: 180,
    snapOnRelease: true,
  },
  on: {
    scrollbarDragStart: function() {
      document.documentElement.style.cursor = 'grabbing';
    },
    scrollbarDragEnd: function() {
      document.documentElement.style.cursor = '';
    },
    touchStart: function() {
      document.documentElement.style.cursor = 'grabbing';
    },
    touchEnd: function() {
      document.documentElement.style.cursor = '';
    },
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
  grabCursor: true,
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
    draggable: true,
    el: '#sliderFBbar',
    dragSize: 100,
    snapOnRelease: true,
    cursor: 'grab',
  },
  on: {
    scrollbarDragStart: function() {
      document.documentElement.style.cursor = 'grabbing';
    },
    scrollbarDragEnd: function() {
      document.documentElement.style.cursor = '';
    },
    touchStart: function() {
      document.documentElement.style.cursor = 'grabbing';
    },
    touchEnd: function() {
      document.documentElement.style.cursor = '';
    },
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