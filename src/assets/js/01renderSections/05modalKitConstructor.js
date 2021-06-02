export default class {

  constructor(id, data) {

    this.images = document.querySelectorAll('#cubicle img');
    this.titleEl = document.querySelector('.modalProductCard__colDescription h3')
    this.descriptionEl = document.querySelector('.modalProductCard__colDescription ul')

    this.id = id;
    this.data = data[id];

    this.title = this.data.title;

    this.description = this.data.description.map(item => `<li>${item}</li>`).join('');

    return this;
  }

  render() {
    this.slides = this.data.alt.map((item, i) => {
      this.images[i].src = `./assets/images/sliderKit/kit${this.id}/slide${i}.jpg`;
      this.images[i].alt = item;
    });
    this.titleEl.innerHTML = this.title;
    this.descriptionEl.innerHTML = this.description;
  }
}