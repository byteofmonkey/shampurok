export default class {
  constructor() {
    this.accordionItems = document.querySelectorAll('.accordion li');
    this.toggleItems = this.toggleItems.bind(this);

    this.accordionItems.forEach(item => item.addEventListener('click', this.toggleItems))
  }

  toggleItems(e) {
    const target = e.target.closest('li');
    for (let item of this.accordionItems) {
      (item === target) ? item.classList.add('open'): item.classList.remove('open')
    }
  }
}