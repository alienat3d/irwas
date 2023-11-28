import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';

// Заметка: в то время, как все действия с модальным окнами мы скрыли внутри модуля modals. Это удобнее, т.к. внутри есть и функция bindModals(), которая подвязывает модальные окна к определённым триггерам и также функция, которая отвечает за вызов модального окна через определённое время. Вкладки лучше импортировать, как отдельную функцию и прямо здесь её настроить.
window.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});