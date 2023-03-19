function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};
let intervalId = null;

const changeBodyBgColor = () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
};

const colorSwitcherByClick = () => {
  intervalId = setInterval(changeBodyBgColor, 1000);

  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.stopBtn.removeAttribute('disabled');
};

const stopColorSwitcherByClick = () => {
  clearInterval(intervalId);

  refs.stopBtn.setAttribute('disabled', 'disabled');
  refs.startBtn.removeAttribute('disabled');
};

refs.startBtn.addEventListener('click', colorSwitcherByClick);

refs.stopBtn.addEventListener('click', stopColorSwitcherByClick);
