import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const dateTimeInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let chosenDate = null;
let currentDate = null
let timeToFinish = 0;
let timerId = 0;

flatpickr(dateTimeInput, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        chosenDate = new Date(selectedDates[0])
        if (chosenDate.getTime() < Date.now()) {
            Notiflix.Notify.failure('Choose datetime in future!');
            startBtn.disabled = true;
        } else {
            Notiflix.Notify.success('Click start');
            startBtn.disabled = false;
        }
    },
});

startBtn.addEventListener('click', event => {
    startBtn.disabled = true;
    dateTimeInput.disabled = true;

    timerId = setInterval(() => {
        timeToFinish = chosenDate.getTime() - Date.now();

        const { days, hours, minutes, seconds } = convertMs(timeToFinish);

        daysEl.textContent = addLeadingZero(days);
        hoursEl.textContent = addLeadingZero(hours);
        minutesEl.textContent = addLeadingZero(minutes);
        secondsEl.textContent = addLeadingZero(seconds);

        if(timeToFinish < 1000) {
            clearInterval(timerId);
            startBtn.disabled = false;
            dateTimeInput.disabled = false;
        }
    }, 1000);
});

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

function addLeadingZero(value) {
    return `${value}`.padStart(2, '0');
}