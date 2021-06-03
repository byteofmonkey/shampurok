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
    /////////////////////////////////______ open & close nav menu

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

    /////////////////////////////////______ observer

    const target = document.querySelector('.intro');
    const header = document.querySelector('.header');
    new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0.2) this.close();
      if (entries[0].intersectionRatio > 0.05) header.classList.remove('sticky');
      if (entries[0].intersectionRatio < 0.05) header.classList.add('sticky');
    }, {
      threshold: [0.01, 0.2, 0.5],
      rootMargin: '100px'
    }).observe(target);

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


// const sections = document.querySelectorAll('section:not(.intro)');
// console.log(sections);

// const lazyLoad = (target, i) => {
//   const io = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         console.log(i);
//         // указать пункты меню навигациии

//         // li:nth-of-type(2) button {
//         //   border-bottom: 1px solid $defaultColor;
//         //   color: $defaultColor;
//         // }

//       }
//     });
//   });
//   io.observe(target);
// };
// sections.forEach(lazyLoad);