const timerFunc = (selector, deadline) => {
  const addZero = (num) => {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  };

  const getTimeRemaining = (endtime) => {
    const t = (Date.parse(endtime) + (new Date().getTimezoneOffset() * 60 * 1000)) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days,
    };
  };
  
  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
      secondsElem = timer.querySelector('#seconds'),
      minutesElem = timer.querySelector('#minutes'),
      hoursElem = timer.querySelector('#hours'),
      daysElem = timer.querySelector('#days'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();
    
    function updateClock() {
      const t = getTimeRemaining(endtime);

      secondsElem.textContent = addZero(t.seconds);
      minutesElem.textContent = addZero(t.minutes);
      hoursElem.textContent = addZero(t.hours);
      daysElem.textContent = addZero(t.days);

      if (t.total <= 0) {
        secondsElem.textContent = '00';
        minutesElem.textContent = '00';
        hoursElem.textContent = '00';
        daysElem.textContent = '00';

        clearInterval(timeInterval);
      }
    }
  };

  setClock(selector, deadline);
};

export default timerFunc;