import Simplebar from 'simplebar';
import fitText from './plugin/fittext.js';
import Rellax from 'rellax';

import Slider from "./blocks/slider/render";
import dataKit from './blocks/slider/dataKit';
import dataFeedback from './blocks/slider/dataFeedback';
import kit from './blocks/slider/kit';
import feedback from './blocks/slider/feedback';
import {
  KITprops,
  FBprops,
} from './blocks/slider/swiperProps.js';

import HeaderMenu from './blocks/headerMenu';
import Accordion from './blocks/accordion';
import ModalKit from "./blocks/modalKit/render";
import ModalOrder from "./blocks/modalOrder/render";


fitText(document.querySelector('h1'), 1.3);
new Rellax('.parallax div');

new Slider("#swiperKIT", kit, dataKit, KITprops).render();
new Slider("#swiperFB", feedback, dataFeedback, FBprops).render();

new HeaderMenu();
new Accordion();
new ModalOrder().render();
new ModalKit().render();

/////////////////////////////////////////////////////////////////////////
const allModal = document.querySelectorAll('[data-modal]');
const closeBtn = document.querySelectorAll('[data-close]');
const modalWrapper = document.querySelectorAll('.modal-wrapper');
const openModalCallbackBtn = document.querySelectorAll('[data-callBack]');
const modalCallback = document.querySelector('.modalCallBack');
const openModalOrderBtn = document.querySelector('.order .btn-solid');
const modalOrder = document.querySelector('.modalOrder');
const introBtn = document.querySelector('.intro .btn-solid');



openModalCallbackBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    closeAllModal();
    modalCallback.classList.add('open');
    document.documentElement.style = 'overflow: hidden';
  });
});

openModalOrderBtn.addEventListener('click', () => {
  closeAllModal();
  modalOrder.classList.add('open');
  document.documentElement.style = 'overflow: hidden';
});



const closeAllModal = () => {
  allModal.forEach(item => item.classList.remove('open'));
  document.documentElement.style = '';
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



introBtn.addEventListener('click', () => {
  document.querySelector('.tiles').scrollIntoView({
    block: 'center'
  });
});