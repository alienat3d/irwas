import './slider';

import modalsFunc from './modules/modals';
import tabsFunc from './modules/tabs';
import forms from './modules/forms';

// Заметка: в то время, как все действия с модальным окнами мы скрыли внутри модуля modals. Это удобнее, т.к. внутри есть и функция bindModals(), которая подвязывает модальные окна к определённым триггерам и также функция, которая отвечает за вызов модального окна через определённое время. Вкладки лучше импортировать, как отдельную функцию и прямо здесь её настроить.
window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  modalsFunc();
  tabsFunc('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabsFunc('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabsFunc('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  forms();
});