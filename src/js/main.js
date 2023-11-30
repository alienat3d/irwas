import './slider';

import modalsFunc from './modules/modals';
import tabsFunc from './modules/tabs';
import formsFunc from './modules/forms';
import changeModalStateFunc from './modules/change-modal-state';
import timerFunc from './modules/timer';

// ? Заметка: в то время, как все действия с модальным окнами мы скрыли внутри модуля modals. Это удобнее, т.к. внутри есть и функция bindModals(), которая подвязывает модальные окна к определённым триггерам и также функция, которая отвечает за вызов модального окна через определённое время. Вкладки лучше импортировать, как отдельную функцию и прямо здесь её настроить.
// * 1.0 Создадим пустой объект состояния модального окна калькулятора балконного окна, куда мы будем заносить все выбранные и введённые данные пользователем для отправки заказа.
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let modalState = {};
  // * Чтобы таймер заработал понадобится переменная с дедлайном.
  const DEADLINE = '2023-12-01';

  modalsFunc();
  tabsFunc('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabsFunc('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabsFunc('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  // * Чтобы отправляемая форма знала о нашем объекте modalState, нужно его передать в функцию formsFunc().
  formsFunc(modalState);
  changeModalStateFunc(modalState);
  timerFunc('.container1', DEADLINE);
});