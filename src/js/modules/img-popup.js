const imgPopup = () => {
  const popup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImg = document.createElement('img');

  popup.classList.add('popup_image');
  workSection.appendChild(popup);

  popup.classList.add('flex-centered');
  popup.style.display = 'none';
  popup.appendChild(bigImg);

  workSection.addEventListener('click', (evt) => {
    evt.preventDefault();

    let target = evt.target;

    if (target && target.classList.contains('preview')) {
      popup.style.display = 'flex';
      popup.classList.add('faded-fast');
      const path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
    }

    if (target && target.matches('div.popup_image')) {
      popup.style.display = 'none';
    }
  });
};

export default imgPopup;