export default class {

  constructor(id, data) {

    this.parentElement = document.querySelector('.modalProductCard__content');
    this.id = id;
    this.data = data[id];

    this.title = this.data.title;

    this.description = this.data.description.map(item => `<li>${item}</li>`).join('');

    this.slides = this.data.alt.map((item, i) => `
                                            <div class="swiper-slide">
                                                <div class="swiper-zoom-container">
                                                    <img src="./assets/images/sliderKit/kit${this.id}/slide${i}.jpg" alt=${item}>
                                                </div>
                                            </div>
                                            `).join('');

    return this;
  }

  render() {

    this.parentElement.innerHTML = `
        <button class="icon-close" data-close></button>
        <div class="modalProductCard__row">

            <div class="modalProductCard__colSlider">
                <div class="modalProductCard__sliderBorder">

                    <div class="swiper-container" id='cubicle'>
                        <div class="swiper-wrapper">

                            ${this.slides}

                        </div>
                    </div>

                </div>

                <div class="swiper-pagination" id=thumbnails></div>
            </div>


            <div class="modalProductCard__colDescription">
                <h3>${this.title}</h3>
                <ul>
                    ${this.description}
                </ul>
                <button class="btn-border" data-callback>оформить заказ</button>
            </div>

        </div>
    `;
  }
}