import checkNumInputsFunc from './check-num-inputs';

const changeModalStateFunc = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  const bindActionsToElements = (event, element, property) => {
    element.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[property] = index;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0 ? state[property] = 'Холодное' : state[property] = 'Тёплое';
              element.forEach((checkbox, idx) => {
                checkbox.checked = false;
                if (index == idx) {
                  checkbox.checked = true;
                }
              });
            } else {
              state[property] = item.value;
            }
            break;
          case 'SELECT':
            state[property] = item.value;
            break;
        }
        console.log(state);
      });
    });
  };

  /* windowForm.forEach((choice, index) => {
    choice.addEventListener('click', () => {
      state.form = index;
    });
  }); */

  checkNumInputsFunc('#width');
  checkNumInputsFunc('#height');
  bindActionsToElements('click', windowForm, 'form');
  bindActionsToElements('input', windowWidth, 'width');
  bindActionsToElements('input', windowHeight, 'height');
  bindActionsToElements('change', windowType, 'type');
  bindActionsToElements('change', windowProfile, 'profile');
};

export default changeModalStateFunc;