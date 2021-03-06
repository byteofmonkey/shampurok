export default class {
  constructor() {
    this.menu = document.querySelector('header nav');
    this.menuOpenButton = document.querySelector('.header__openMenuBtn');
    this.menuNavButtons = document.querySelectorAll('header nav button:not(.icon-close)');
    this.menuSocialButtons = document.querySelectorAll('header nav a');
    this.menuCloseButton = document.querySelector('header nav .icon-close');

    /////////////////////////////////_________________________________ target sections:
    this.targetEl = [
      '.intro',
      '.tiles',
      '.sliderKit',
      '.custom',
      '.order',
      '.accordion',
      '.cardsCompare',
      '.cardsOrder',
      '.questionsForm',
      '.footer',
    ].map(target => document.querySelector(target));


    /////////////////////////////////_________________________________ underline in menu for current position
    const observeNavitems = (target, i) => {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.menuNavButtons.forEach(item => item.style = "");
            this.menuNavButtons[i].style = 'border-color: #BDA180;';
          }
        });
      }, {
        threshold: [0.99, 1],
      });
      io.observe(target);
    };
    this.targetEl.forEach(observeNavitems);


    /////////////////////////////////_________________________________ scroll to section:
    this.menuNavButtons.forEach((button, i) => {
      button.addEventListener('click', () => {
        this.close();

        this.targetEl[i].scrollIntoView({
          block: 'center',
          behavior: "smooth",
        });
      });
    })


    /////////////////////////////////_________________________________ open & close nav menu
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.menuOpenButton.addEventListener('click', this.open);
    this.menuCloseButton.addEventListener('click', this.close);
    this.menuNavButtons[9].addEventListener('blur', this.close);

    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape") this.close();
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('header nav') && !e.target.closest('.header__openMenuBtn')) this.close();
    });


    /////////////////////////////////_________________________________ observer - menu close
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
    if (window.innerWidth < 640 || window.innerWidth < 992 && window.innerWidth > window.innerHeight) {
      document.body.style.overflow = 'hidden';
    }
  }

  close() {
    this.menu.classList.remove('open');
    this.menuSocialButtons.forEach(btn => btn.setAttribute('tabindex', 0));
    document.body.style.overflow = '';
  };
};