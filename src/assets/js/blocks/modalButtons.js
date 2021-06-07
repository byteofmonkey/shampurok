export default class {

  constructor() {
    this.allModal = document.querySelectorAll('[data-modal]');
    this.closeBtn = document.querySelectorAll('[data-close]');
    this.modalWrapper = document.querySelectorAll('.modal-wrapper');
    this.openModalCallbackBtn = document.querySelectorAll('[data-callBack]');
    this.modalCallback = document.querySelector('.modalCallBack');
    this.openModalOrderBtn = document.querySelector('.order .btn-solid');
    this.modalOrder = document.querySelector('.modalOrder');

    this.closeAllModal = this.closeAllModal.bind(this);

    this.closeBtn.forEach((item) => {
      item.addEventListener('click', this.closeAllModal);
    });

    this.modalWrapper.forEach(item => item.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-wrapper')) this.closeAllModal();
    }));

    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape") this.closeAllModal();
    });

    this.openModalCallbackBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        this.closeAllModal();
        this.modalCallback.classList.add('open');
        document.documentElement.style = 'overflow: hidden';
      });
    });

    this.openModalOrderBtn.addEventListener('click', () => {
      this.closeAllModal();
      this.modalOrder.classList.add('open');
      document.documentElement.style = 'overflow: hidden';
    });
  }



  closeAllModal() {
    this.allModal.forEach(item => item.classList.remove('open'));
    document.documentElement.style = '';
  };
}