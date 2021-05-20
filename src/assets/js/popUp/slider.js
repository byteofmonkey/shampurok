const popUpSliderOptions = {
  slidesPerView: 3,
  direction: 'horizontal',
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
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

export {
  popUpSliderOptions
};