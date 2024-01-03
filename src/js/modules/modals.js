const modalsFunc = () => {
  const scroll = calcScroll();
  const bindModal = (triggerSelector, modalSelector, closeSelector, clickCloseOverlay = true) => {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]');

    trigger.forEach(btn => {
      btn.addEventListener('click', (evt) => {
        if (evt.target) {
          evt.preventDefault();
        }

        windows.forEach(window => window.style.display = 'none');
        modal.style.display = 'block';
        // document.body.classList.add('modal-open');
        document.body.style.cssText = `
          overflow: hidden;
          margin-right: ${scroll}px;
        `;
      });
    });

    close.addEventListener('click', () => {
      windows.forEach(window => window.style.display = 'none');
      // modal.style.display = 'none';
      // document.body.classList.remove('modal-open');
      document.body.style.cssText = `
        overflow: visible;
        margin-right: 0;
      `;
    });
    modal.addEventListener('click', (evt) => {
      if (evt.target === modal && clickCloseOverlay) {
        windows.forEach(window => window.style.display = 'none');
        // modal.style.display = 'none';
        // document.body.classList.remove('modal-open');
        document.body.style.cssText = `
          overflow: visible;
          margin-right: 0;
        `;
      }
    });

    window.addEventListener('keydown', (evt) => {
      if (evt.code === 'Escape') {
        windows.forEach(window => window.style.display = 'none');
        // modal.style.display = 'none';
        // document.body.classList.remove('modal-open');
        document.body.style.cssText = `
          overflow: visible;
          margin-right: 0;
        `;
      }
    });
  };
  // FIXME: вернуть перед выкатом на прод.
  const showModalByTime = (selector, timer, scrollWidth) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.cssText = `
        overflow: hidden;
        margin-right: ${scrollWidth}px;
      `;
    }, timer);
  };

  function calcScroll () {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');

  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  // FIXME: вернуть перед выкатом на прод.
  showModalByTime('.popup', '30000', scroll);
};

export default modalsFunc;