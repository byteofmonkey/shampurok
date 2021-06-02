export default class {
  constructor() {
    this.menu = document.querySelector('header nav');
    this.menuOpenButton = document.querySelector('.header__openMenuBtn');
    this.menuNavButtons = document.querySelectorAll('header nav button:not(.icon-close)');
    this.menuSocialButtons = document.querySelectorAll('header nav a');
    this.menuCloseButton = document.querySelector('header nav .icon-close');

    /////////////////////////////////______ scroll to sections
    this.targetEl = [
      '.intro',
      '.tiles',
      '.sliderKit',
      '.custom',
      '.quiz',
      '.accordion',
      '.cardsCompare',
      '.cardsOrder',
      '.questionsForm',
      '.footer',
    ].map(target => document.querySelector(target));

    this.menuNavButtons.forEach((button, i) => {
      button.addEventListener('click', () => {
        this.close();
        this.targetEl[i].scrollIntoView({
          block: 'center'
        });
      });
    })
    /////////////////////////////////______ end scroll to section

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.menuOpenButton.addEventListener('click', this.open);
    this.menuCloseButton.addEventListener('click', this.close);
    this.menuNavButtons[9].addEventListener('blur', this.close);

    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape") this.close();
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('header nav') && !e.target.closest('.header__openMenuBtn')) this.close();;
    });
  }

  open() {
    this.menu.classList.add('open');
    this.menuSocialButtons.forEach(btn => btn.setAttribute('tabindex', -1));
  }

  close() {
    document.body.style.overflow = "";
    this.menu.classList.remove('open');
    this.menuSocialButtons.forEach(btn => btn.setAttribute('tabindex', 0));
  };
};