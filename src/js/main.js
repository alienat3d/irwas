import './slider';

import modalsFunc from './modules/modals';
import tabsFunc from './modules/tabs';
import formsFunc from './modules/forms';
import changeModalStateFunc from './modules/change-modal-state';
import timerFunc from './modules/timer';
import imgPopup from './modules/img-popup';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let modalState = {};
  // const DEADLINE = '2024-01-01 09:59 UTC';
  const DEADLINE = '2024-01-29';

  modalsFunc();
  tabsFunc('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabsFunc('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabsFunc('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  formsFunc(modalState);
  changeModalStateFunc(modalState);
  timerFunc('.container1', DEADLINE);
  imgPopup();
});