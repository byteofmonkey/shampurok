import SimpleBar from 'simplebar/dist/simplebar';
import fitText from './plugin/fittext.js';

//_____________________________________________________________________________render data
import Slider from "./blocks/slider/render";
import dataKit from './blocks/slider/dataKit';
import dataFeedback from './blocks/slider/dataFeedback';
import kit from './blocks/slider/kit';
import feedback from './blocks/slider/feedback';
import {
  KITprops,
  FBprops,
} from './blocks/slider/swiperProps.js';

import Menu from './blocks/headerMenu';
import Accordion from './blocks/accordion';
import ModalKit from "./blocks/modalKit/render";
import ModalOrder from "./blocks/modalOrder/render";


fitText(document.querySelector('h1'), 1.3);

new Slider("#swiperKIT", kit, dataKit, KITprops).render();
new Slider("#swiperFB", feedback, dataFeedback, FBprops).render();

new Menu();
new Accordion();
new ModalOrder().render();
new ModalKit().render();



/////////////////////////////////////////////////////////////////////////////////////////////////////
// установка события на кнопку intro - узнать ингридиент
const introBtn = document.querySelector('.intro .btn-solid');

introBtn.addEventListener('click', () => {
  document.querySelector('.tiles').scrollIntoView({
    block: 'center'
  });
});
/////////////////////////////////////////////////////////////////////////
const allModal = document.querySelectorAll('[data-modal]');
const closeBtn = document.querySelectorAll('[data-close]');
const modalWrapper = document.querySelectorAll('.modal-wrapper');

const closeAllModal = () => {
  allModal.forEach(item => item.classList.remove('open'));

};

closeBtn.forEach((item) => {
  item.addEventListener('click', closeAllModal);
});

modalWrapper.forEach(item => item.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-wrapper')) closeAllModal();
}));

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape") closeAllModal();
});

/////////////////////////////////////////////////////////////////////////
const openModalCallbackBtn = document.querySelectorAll('[data-callBack]');
const modalCallback = document.querySelector('.modalCallBack');
const doc = document.body;

openModalCallbackBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    closeAllModal();
    modalCallback.classList.add('open');
    doc.style = 'overflow:hidden';
  });
});
/////////////////////////////////////////////////////////////////////////
const openModalOrderBtn = document.querySelector('.order .btn-solid');
const modalOrder = document.querySelector('.modalOrder');

openModalOrderBtn.addEventListener('click', () => {
  closeAllModal();
  modalOrder.classList.add('open');
});
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// Parallax
const ttt = document.documentElement;
const targetMain = document.querySelector('main');
document.addEventListener('scroll', (e) => {
  let a = ttt.scrollTop * 0.7 + 'px';
  targetMain.style = `background-position: center ${a};`;
});