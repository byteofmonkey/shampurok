import Swiper from 'swiper/bundle';
import modalKitData from './data.js'
import swiperProps from './swiperProps.js'


export default class {

  constructor() {

    this.data = modalKitData;
    this.swiperProps = swiperProps

    this.images = document.querySelectorAll('#cubicle img');
    this.titleEl = document.querySelector('.modalProductCard__colDescription h3');
    this.descriptionEl = document.querySelector('.modalProductCard__colDescription ul');

    return this;
  }


  render(id = 0) {
    const itemData = this.data[id];

    this.slides = itemData.alt.map((item, i) => {
      this.images[i].src = `./assets/images/sliderKit/kit${id}/slide${i}.jpg`;
      this.images[i].alt = item;
    });
    this.titleEl.innerHTML = itemData.title;
    this.descriptionEl.innerHTML = itemData.description.map(item => `<li>${item}</li>`).join('');



    this.swiper = new Swiper('#cubicle', this.swiperProps);

    this.addEvents();
  }

  addEvents() {

    const buttonsKit = document.querySelectorAll('#swiperKIT .link');
    const modal = document.querySelector('.modalProductCard');

    const onClick = (e) => {
      modal.classList.add('open');

      const id = e.target.dataset.card;
      this.render(id);
    }

    buttonsKit.forEach(btn => {
      btn.addEventListener('click', (e) => onClick(e));
    });
  }
}