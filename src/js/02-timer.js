import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let selectedDate;

const refs = {
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', 'disabled');

const checkTime = time => {
  const date = new Date();

  if (time.getTime() < date.getTime()) {
    window.alert('Please choose a date in the future');

    return;
  }
  selectedDate = time;

  refs.startBtn.removeAttribute('disabled');
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    checkTime(selectedDates[0]);
  },
};

const fp = flatpickr('input#datetime-picker', options);

refs.startBtn.addEventListener('click', () => {
  //   console.log(selectedDate.getTime());

  //   const date = new Date();

  //   console.log(convertMs(selectedDate.getTime() - date.getTime()));

  const intervalId = setInterval(() => {
    const date = new Date();

    const substraction = selectedDate.getTime() - date.getTime();

    if (substraction <= 0) {
      clearInterval(intervalId);
      return;
    }

    const timeLeft = convertMs(substraction);
    // console.log(String(timeLeft.days).padStart(2, '0'));

    refs.daysEl.textContent = String(timeLeft.days).padStart(2, '0');
    refs.hoursEl.textContent = String(timeLeft.hours).padStart(2, '0');
    refs.minutesEl.textContent = String(timeLeft.minutes).padStart(2, '0');
    refs.secondsEl.textContent = String(timeLeft.seconds).padStart(2, '0');
  }, 1000);
});

// console.log(convertMs(selectedDate.getTime));

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"
