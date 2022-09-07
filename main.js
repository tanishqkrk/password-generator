// Selectors
const password = document.querySelector('.app__password--container');
const copy = document.querySelector('.app__password i');
const range = document.querySelector('#range').value;
const rangeBar = document.querySelector('.app__main--range-slider');
const rangeNumber = document.querySelector('.app__main--length-value label');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');
const bar = document.querySelectorAll('.app__main--strength-meter-bars-bar');
const button = document.querySelector('.app__main--button-button');

// live bar values 
rangeBar.addEventListener('input', e => {
  rangeNumber.innerHTML = rangeBar.value;
  // return range;/
})

const generate = e => {
  const passwordArray = [];
  const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const symbolLetters = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '`', '~', '|'];

  // For every item from 0 to the set range, the random function will create a character

  for (let i = -1; i < rangeNumber.innerHTML; i++) {
    let randomUppercase = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
    let randomLowercase = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
    let randomNumber = Math.floor(Math.random() * 9 + 0);
    let randomSymbol = symbolLetters[Math.floor(Math.random() * symbolLetters.length)]
    password.innerHTML = passwordArray.join('');

    // Checkbox conditions
    if (uppercase.checked && lowercase.checked && numbers.checked && symbols.checked) {
      let masterRandom = [randomUppercase, randomLowercase, randomSymbol, randomNumber]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked) {
      let masterRandom = [randomUppercase]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (!uppercase.checked && lowercase.checked && !numbers.checked && !symbols.checked) {
      let masterRandom = [randomLowercase]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (!uppercase.checked && !lowercase.checked && numbers.checked && !symbols.checked) {
      let masterRandom = [randomNumber]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (!uppercase.checked && !lowercase.checked && !numbers.checked && symbols.checked) {
      let masterRandom = [randomSymbol]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (uppercase.checked && lowercase.checked && !numbers.checked && !symbols.checked) {
      let masterRandom = [randomUppercase, randomLowercase]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (uppercase.checked && !lowercase.checked && numbers.checked && !symbols.checked) {
      let masterRandom = [randomUppercase, randomNumber]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (uppercase.checked && !lowercase.checked && !numbers.checked && symbols.checked) {
      let masterRandom = [randomUppercase, randomSymbol]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (!uppercase.checked && lowercase.checked && !numbers.checked && symbols.checked) {
      let masterRandom = [randomLowercase, randomSymbol]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (!uppercase.checked && lowercase.checked && numbers.checked && !symbols.checked) {
      let masterRandom = [randomLowercase, randomNumber]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (!uppercase.checked && !lowercase.checked && numbers.checked && symbols.checked) {
      let masterRandom = [randomNumber, randomSymbol]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (uppercase.checked && lowercase.checked && numbers.checked && !symbols.checked) {
      let masterRandom = [randomUppercase, randomLowercase, randomNumber]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (uppercase.checked && !lowercase.checked && numbers.checked && symbols.checked) {
      let masterRandom = [randomUppercase, randomNumber, randomSymbol]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (uppercase.checked && lowercase.checked && !numbers.checked && symbols.checked) {
      let masterRandom = [randomUppercase, randomLowercase, randomSymbol]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    } else if (!uppercase.checked && lowercase.checked && numbers.checked && symbols.checked) {
      let masterRandom = [randomLowercase, randomNumber, randomSymbol]
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    }
  }
}

// const review = e => {
//   if (range < 20) {
//     easy.style.display = 'block';
//   }
// }

rangeBar.addEventListener('input', generate)
button.addEventListener('click', generate);
// button.addEventListener('click', review);
uppercase.addEventListener('input', generate)
lowercase.addEventListener('input', generate)
numbers.addEventListener('input', generate)
symbols.addEventListener('input', generate)
button.click()