class modalCallBack {
  constructor() {
    this.openBtn = document.querySelectorAll('[data-callBack]');
    this.closeBtn = document.querySelectorAll('[data-close]');
    this.modal = document.querySelectorAll('.modalCallBack');


    this.open = this.open.bind(this);
    this.openBtn.forEach(btn => {
      btn.addEventListener('click', this.open);
    })








    // modal.forEach(item => item.addEventListener('click', (e) => {
    //   if (e.target.matches('.icon-close') || e.target.matches('.modal-wrapper')) {
    //     closeModal();
    //   }
    // }))


    // closeBtn.forEach(item => item.addEventListener('click', closeModal))
    // modalWrapper.forEach(item => item.addEventListener('click', (e) => {
    //   closeModal
    // }))


    // const quizModal = document.querySelector('#quizModal');
    // const openQuizModalBtn = document.querySelector('#openQuizModal');
    // openQuizModalBtn.addEventListener('click', () => {
    //   quizModal.classList.add('open')
    // });

  }

  open() {
    this.modal.classList.add('open');
  }

  close() {
    this.modal.classList.remove('open');
  }



}

export default modalCallBack;