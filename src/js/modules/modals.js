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
// 1.0.5 Теперь перейдём к закрытию модального окна. Здесь в обработчике события нам уже объект события не нужен и мы делаем обратную операцию
const modals = () => {
  function bindModal(trigger, modal, close) {
    trigger.addEventListener('click', (evt) => {
      if (evt.target) {
        evt.preventDefault();
      }

      modal.style.display = 'block';

      document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';

      document.body.style.overflow = '';
    });
  }
};

export default modals;