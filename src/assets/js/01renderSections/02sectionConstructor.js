export default class {

  constructor(parentSelector, cardClassName, innerHTML, content) {

    this.parentElement = document.querySelector(parentSelector);
    this.cardClassName = cardClassName;
    this.innerHTML = innerHTML;
    this.content = content;

    return this;
  }

  render() {
    this.content.map(content => {
      const element = document.createElement('div');
      element.classList.add(this.cardClassName);
      element.innerHTML = this.innerHTML(...content);

      this.parentElement.append(element);
    })
  }
}