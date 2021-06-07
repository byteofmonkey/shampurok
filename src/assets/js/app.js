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
import ModalButtons from "./blocks/modalButtons";


document.addEventListener('DOMContentLoaded', () => {

  fitText(document.querySelector('h1'), 1.3);
  new Rellax('.parallax div');

  new Slider("#swiperKIT", kit, dataKit, KITprops).render();
  new Slider("#swiperFB", feedback, dataFeedback, FBprops).render();

  new HeaderMenu();
  new Accordion();

  new ModalButtons();
  new ModalOrder().render();
  new ModalKit().render();

  const introBtn = document.querySelector('.intro .btn-solid');
  introBtn.addEventListener('click', () => {
    document.querySelector('.tiles').scrollIntoView({
      block: 'center',
      behavior: "smooth",
    });
  });

})