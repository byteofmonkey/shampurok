export default {
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