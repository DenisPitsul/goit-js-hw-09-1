import Notiflix from "notiflix";
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;

  if(Number(delay.value) < 0 || Number(step.value) < 0 || Number(amount.value) < 0) {
    Notiflix.Notify.warning('❗ Please enter a positive number');
  } else {
    for (let i = 0; i < amount.value; i++) {
      const promiseDalay = Number(delay.value) + i * Number(step.value);
      createPromise(i + 1, promiseDalay)
        .then(({position, delay}) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        })
        .catch(({position, delay}) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        });
    }
    form.reset();
  }
})

function createPromise(position, delay) {  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay); 
  })
}
