import './style.css'
// Selectors
const password = document.querySelector('.app__password--container');
const copy = document.querySelector('.app__password i');
const range = document.querySelector('#range');
const rangeNumber = document.querySelector('.app__main--length-value label');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');
const bar = document.querySelectorAll('.app__main--strength-meter-bars-bar');
const button = document.querySelector('.app__main--button');
const passwordArray = [];


const generate = e => {
  for (let i = 0; i < range; i++) {
    passwordArray.push(Math.random * 9 + 0)
  }
  password.innerHTML = passwordArray
}

button.addEventListener('click', generate);
button.click()