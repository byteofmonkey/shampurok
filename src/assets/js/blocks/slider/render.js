import Swiper from 'swiper/bundle';


export default class {

  constructor(parentSelector, contentFunc, data, swiperProps) {

    this.parentSelector = parentSelector;
    this.sliderBody = document.querySelector(`${parentSelector} .swiper-wrapper`);
    this.contentFunc = contentFunc;
    this.data = data;
    this.swiperProps = swiperProps;

    return this;
  }

  render() {
    this.data.map(content => {
      const element = document.createElement('div');
      element.classList.add('swiper-slide');

      element.innerHTML = this.contentFunc(...content);
      this.sliderBody.append(element);
    })
    new Swiper(this.parentSelector, this.swiperProps);
  }
}