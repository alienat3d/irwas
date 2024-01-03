import checkNumInputsFunc from './check-num-inputs';
// import { showModalByTime } from './modals';

const formsFunc = (state) => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input');

  const message = {
    loading: 'Идёт загрузка...',
    success: 'Заявка успешно отправлена! Скоро с вами свяжется наш консультант.',
    failure: 'Просим прощения, но что-то пошло не так, попробуйте отправить заявку снова.'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

    let resp = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await resp.text();
  };

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    });
  };

  forms.forEach(form => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);
      const formData = new FormData(form);

      if (form.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData)
        .then(() => {
          statusMessage.textContent = message.success;
          // clearTimeout(showModalByTime);
        })
        .catch(() => {
          statusMessage.classList.add('failure');
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });

  checkNumInputsFunc('input[name="user_phone"]');
};

export default formsFunc;