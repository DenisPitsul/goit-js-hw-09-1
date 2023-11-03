const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.disabled = true;
let timerId = null;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(()=>{
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopBtn.addEventListener('click', () => {    
    clearInterval(timerId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}