import modalOrderData from './data.js';

export default class {

  constructor() {

    this.parentElement = document.querySelector('.modalOrder__row');
    this.data = modalOrderData;

    return this;
  }

  render() {
    this.renderContent();
    this.addEvents();
  }



  addEvents() {
    const nextBtn = document.querySelector('.modalOrder__nav .btn-solid');
    const prevBtn = document.querySelector('.modalOrder__nav .btn-border');
    const navButtons = document.querySelector('.modalOrder__nav');
    const hiddenElements = document.querySelectorAll('.modalOrder__row [data-hide]');
    const firstStepElements = document.querySelectorAll('.modalOrder__row [data-step="0"]');
    const bar = document.querySelector('.modalOrder__bar div');
    const barDigits = document.querySelectorAll('.modalOrder__steps span');
    const radio = document.querySelectorAll('.modalOrder .radio input');
    let current = 0;


    firstStepElements.forEach(item => item.classList.add('show'));

    radio.forEach(btn => btn.addEventListener('click', function() {
      this.blur();
    }));

    const renderNext = function() {
      if (current === 6) return;

      current++;

      if (current === 6) navButtons.style.display = "none";
      bar.style.width = 6 + current * 16.5 + '%';
      barDigits.forEach((digit, i) => (i === current) ? digit.classList.add('active') : digit.classList.remove('active'));

      hiddenElements.forEach(item => item.classList.remove('show'));
      const nextStepElements = document.querySelectorAll(`.modalOrder__row [data-step="${current}"]`);
      nextStepElements.forEach(item => item.classList.add('show'));
    }

    const renderPrevious = function() {
      if (current <= 0) return;

      current--;

      bar.style.width = 6 + current * 16.5 + '%';
      barDigits.forEach((digit, i) => (i === current) ? digit.classList.add('active') : digit.classList.remove('active'));

      hiddenElements.forEach(item => item.classList.remove('show'));
      const previousStepElements = document.querySelectorAll(`.modalOrder__row [data-step="${current}"]`);
      previousStepElements.forEach(item => item.classList.add('show'));
    }

    nextBtn.addEventListener('click', function() {
      this.blur();
      renderNext();
    });

    prevBtn.addEventListener('click', function() {
      this.blur();
      renderPrevious();
    });
  }




  renderContent() {
    this.parentElement.innerHTML = `
    <div class="modalOrder__col">

        ${this.renderTitle(this.data)}
        <p data-step="6" data-hide >заполните форму и Ваш персональный менеджер свяжется с Вами в ближайшее время</p>
      
        <form method='POST' action="handler.php" name='orderForm' novalidate >
      
            <div class="modalOrder__formCol">

                  ${this.renderInputLeft(this.data)}
                  <label class="input-text" data-step=6 data-hide>
                      <input type="text" autocomplete="off" required>
                      <span>Ваше имя</span>
                  </label>
                  <label class="input-text" data-step=6 data-hide>
                      <input type="text" autocomplete="off" required>
                      <span>Ваш телефон</span>
                  </label>
            </div>
        
            <div class="modalOrder__formCol">
                  ${this.renderInputRight(this.data)}
                  <button class="btn-solid" data-step=6 data-hide >отправить</button>
            </div>
      
        </form><!-- end form -->
      
        <div class="modalOrder__nav">
            <button class="btn-border">назад</button>
            <button class="btn-solid">далее</button>
        </div>
    </div>

    <div class="modalOrder__imageFrame">
          ${this.renderImage(this.data)}
    </div>
  `;
  }

  renderTitle(data) {
    return data.title.map((title, i) => `<h2 data-step='${i}' data-hide >${title}</h2>`).join('');
  }

  renderImage(data) {
    return data.alt.map((alt, i) => `<img src="./assets/images/modalOrder/modal${i}.jpg" alt='${alt}' data-step=${i} data-hide></img>`).join('');
  }

  renderInputLeft(data) {
    return data.inputLeft.map((label, i) => `
                                            <label class="radio" data-step=${i} data-hide>
                                                <input type="radio" name='${data.name[i]}' value='${label}'>
                                                <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                  <circle cx="10" cy="10" r="9"></circle>
                                                  <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" class="inner"></path>
                                                  <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" class="outer"></path>
                                                </svg>
                                                <span>${label}</span>
                                            </label>
                                          `).join('');
  }

  renderInputRight(data) {
    return data.inputRight.map((label, i) => `
                                            <label class="radio" data-step=${i} data-hide>
                                                <input type="radio" name='${data.name[i]}' value='${label}'>
                                                <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                  <circle cx="10" cy="10" r="9"></circle>
                                                  <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" class="inner"></path>
                                                  <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" class="outer"></path>
                                                </svg>
                                                <span>${label}</span>
                                            </label>
                                          `).join('');
  }
}