export const sliderORD = {
  //   slidesPerView: 3,
  direction: 'horizontal',
  speed: 400,
  spaceBetween: 100,

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
    formatFractionTotal: function(num) {
      let i = num + 2;
      return (num < 10) ? `0${i}` : i;
    }
  },

  scrollbar: {
    el: '#sliderORDbar',
    dragSize: 200,
  },

  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
}












export const sliderFB = {
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
    formatFractionTotal: function(num) {
      return (num < 10) ? `0${num}` : num;
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
      pagination: {
        formatFractionTotal: function(num) {
          let i = num + 3;
          return (i < 10) ? `0${i}` : i;
        }
      },
    },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 30,
      pagination: {
        formatFractionTotal: function(num) {
          let i = num + 2;
          return (i < 10) ? `0${i}` : i;
        }
      },
    },
  }
}