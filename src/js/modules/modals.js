// ? Прежде, чем приступать к выполнению очередной задачи, лучше сперва составить план того, что нам требуется сделать - проговорить словами, что и за чем идёт и какие операции будут выполняться. Таким образом, даже самая сложная задача покажется довольно простой, когда мы её проговорим.

// * 1.0.0 Итак, у нас есть некий триггер (то, с чем будет взаимодействовать пользователь), в данном случае этим триггером является кнопка "Вызвать замерщика".
// 1.0.1 Далее, после события "click" по кнопке будет показ модального окна с классом "popup_engineer".
// 1.0.2 Также нам нужно отследить действия, которые происходят с крестиком или подложкой модального окна. По сути говоря, это область, которая не входит в контент модального окна. И здесь также мы отслеживаем клики пользователя мышкой на эти два элемента. И когда это происходит мы будем скрывать это модальное окно.
// 1.0.3 Скрывать можно либо изменяя CSS-свойство "display", либо если у нас есть готовые CSS-классы, то меняем эти классы. Предпочтительнее второе, т.к. с классами мы можем также реализовывать различные CSS-анимации.
// * 1.0.0 Как мы заметили, модальных окон у на не одно, а сразу несколько, и поэтому, чтобы каждый раз не прописывать один и тот же алгоритм для каждого из них, мы создадим общий алгоритм, который будет принимать в себя разные аргументы, таким образом он будет универсальным.
// 1.0.1 Создадим функцию bindModal(), которая будет отвечать за привязку модального окна к определённому триггеру и в аргументы запишем trigger (селектор кнопки, по которой пользователь будет кликать), modal (селектор модального окна, которое будет открываться) и close (селектор, который будет закрывать модальное окно, собственно "Х").
// 1.0.2 Т.к. некоторые триггеры у нас являются ссылками, то нужно запретить им стандартное поведение. Но сперва в условии проверяем, что этот элемент существует.
// ? Вообще, такие проверки на evt.target (объект события) делаются не просто так, а по причине того, что некоторые элементы на странице не поддерживают определённые события, некоторые не имеют свойство target и т.д. Конечно это скорее редкость, но всё же лучше это проверять.
// 1.0.3 Сперва пропишем простейшую реализацию просто поменяв элементу модального окна свойство "display".
// 1.0.4 Также допишем очень распространённый для модального окна кусочек кода. Т.к. без него при открытом модальном окне и при скролле мышкой будет скроллиться и вся страница. Обычно это поведение убирают, чтобы скроллилось только модальное окно, а страница сзади замирала, пока оно открыто.
// 1.0.5 Теперь перейдём к закрытию модального окна. Здесь в обработчике события нам уже объект события не нужен и мы делаем обратную операцию.
// 1.0.6 Также нам нужно реализовать, чтобы если пользователь кликнул на область вне нашего модального окна, то оно тоже закроется.
// 1.0.7 Получаем необходимые нам элементы из вёрстки.
// 1.0.8 Вызываем функцию и передаём туда нужные нам элементы.
// 1.1.0 Так как у нас несколько разных триггеров, то имеет смысл найти псевдо-коллекцию методом querySelectorAll(), а addEventListener поместить в метод перебора массивов forEach().
const modals = () => {
  // const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
  //   modalEngineer = document.querySelector('.popup_engineer'),
  //   modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

  const bindModal = (triggerSelector, modalSelector, closeSelector) => {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach(btn => {
      btn.addEventListener('click', (evt) => {
        if (evt.target) {
          evt.preventDefault();
        }

        modal.style.display = 'block';
        // document.body.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      // document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    });
    // 1.0.9 Скрываем модальное окно по клику на подложке (вне области контента модального окна). Подробнее говоря о том, как это работает: когда мы кликаем вне области контента модального окна, то это и будет родительский элемент из переменной modal, а если внутри области контента модального окна, то уже дочерние, например "form", "input" и т.д. и по клику на них модальное окно закрываться соответственно не будет.
    modal.addEventListener('click', (evt) => {
      if (evt.target === modal) {
        modal.style.display = 'none';
        // document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
      }
    });

    window.addEventListener('keydown', (evt) => {
      if (evt.code === 'Escape') {
        modal.style.display = 'none';
        // document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
      }
    });
  };
  // 1.2.0 Также для 10-го пункта ТЗ нам понадобится функция-таймер, чтобы модальное окно всплывало через 180 секунд. Функция будет принимать два аргумента - селектор модального окна и значение таймера
  // FIXME: вернуть перед выкатом на прод.
  // const showModalByTime = (selector, timer) => {
  //   setTimeout(() => {
  //     document.querySelector(selector).style.display = 'block';
  //     document.body.style.overflow = 'hidden';
  //   }, timer);
  // };

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  // FIXME: вернуть перед выкатом на прод.
  // showModalByTime('.popup', '180000');
};

export default modals;