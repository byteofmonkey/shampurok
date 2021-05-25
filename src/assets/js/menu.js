function menu() {

  const openMenu = document.querySelector('#openMenu');
  const closeMenu = document.querySelector('#closeMenu');
  const menu = document.querySelector('#menu');
  const mainContent = document.querySelector('main');
  const header = document.querySelector('header nav');
  const links = document.querySelectorAll('header nav a');

  const closeOnBody = (e) => {
    if (e.target.closest('header nav') !== header) {
      close()
    };
  }

  const open = (e) => {
    document.body.style = 'overflow:hidden;';
    menu.classList.add('open');
    mainContent.addEventListener('click', closeOnBody, true);
  };
  const close = () => {
    document.body.style = '';
    menu.classList.remove('open');
    mainContent.removeEventListener('click', closeOnBody, true);
  };

  openMenu.addEventListener('click', open);
  closeMenu.addEventListener('click', close);
  links.forEach(item => item.addEventListener('click', close));
}

export default menu;