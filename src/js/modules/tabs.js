const tabsFunc = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    content.forEach(block => block.style.display = 'none');
    tab.forEach(tab => tab.classList.remove(activeClass));
  };

  const showTabContent = (index = 0) => {
    content[index].style.display = display;
    tab[index].classList.add(activeClass);
  };

  header.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
      tab.forEach((tab, index) => {
        if (target === tab || target.parentNode === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

  hideTabContent();
  showTabContent();
};

export default tabsFunc;