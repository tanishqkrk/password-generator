// Selectors
const password = document.querySelector('.app__password--container');
const copy = document.querySelector('.app__password-copy');
let range = document.querySelector('#range').value;
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
const button = document.querySelector('.app__password--refresh');
let checkboxes = document.querySelectorAll('.checkBoxes');

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

const review = e => {
  let reviewArray = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      reviewArray.push(checkboxes[i].checked);
    }
  }
  // console.log(reviewArray);
  if (rangeBar.value < 8 && reviewArray.length == 1) {
    easy.style.display = 'block';
    medium.style.display = 'none';
    hard.style.display = 'none';
    document.getElementById('1').style.background = '#A3FFAB';
    document.getElementById('2').style.background = 'none';
    document.getElementById('3').style.background = 'none';
    document.getElementById('4').style.background = 'none';
  } else if (rangeBar.value < 8 && reviewArray.length == 2) {
    easy.style.display = 'block';
    medium.style.display = 'none';
    hard.style.display = 'none';
    document.getElementById('1').style.background = '#A3FFAB';
    document.getElementById('2').style.background = 'none';
    document.getElementById('3').style.background = 'none';
    document.getElementById('4').style.background = 'none';
  } else if (rangeBar.value < 8 && reviewArray.length == 3) {
    easy.style.display = 'block';
    medium.style.display = 'none';
    hard.style.display = 'none';
    document.getElementById('1').style.background = '#A3FFAB'
    document.getElementById('2').style.background = 'none';
    document.getElementById('3').style.background = 'none';
    document.getElementById('4').style.background = 'none';;
  } else if (rangeBar.value < 8 && reviewArray.length == 4) {
    easy.style.display = 'none';
    medium.style.display = 'block';
    hard.style.display = 'none';
    document.getElementById('1').style.background = 'rgb(255, 214, 12)';
    document.getElementById('2').style.background = 'rgb(255, 214, 12)';
    document.getElementById('3').style.background = 'rgb(255, 214, 12)';
    document.getElementById('4').style.background = 'none';
  } else if (9 < rangeBar.value < 12 && reviewArray.length == 1) {
    easy.style.display = 'block';
    medium.style.display = 'none';
    hard.style.display = 'none';
    document.getElementById('1').style.background = '#A3FFAB';
    document.getElementById('2').style.background = 'none';
    document.getElementById('3').style.background = 'none';
    document.getElementById('4').style.background = 'none';
  } else if (9 < rangeBar.value < 12 && reviewArray.length == 2) {
    easy.style.display = 'none';
    medium.style.display = 'block';
    hard.style.display = 'none';
    document.getElementById('1').style.background = 'rgb(255, 214, 12)';
    document.getElementById('2').style.background = 'rgb(255, 214, 12)';
    document.getElementById('3').style.background = 'rgb(255, 214, 12)';
    document.getElementById('4').style.background = 'none';
  } else if (9 < rangeBar.value < 12 && reviewArray.length == 3) {
    easy.style.display = 'none';
    medium.style.display = 'block';
    hard.style.display = 'none';
    document.getElementById('1').style.background = 'rgb(255, 214, 12)';
    document.getElementById('2').style.background = 'rgb(255, 214, 12)';
    document.getElementById('3').style.background = 'rgb(255, 214, 12)';
    document.getElementById('4').style.background = 'none';
  } else if (9 < rangeBar.value < 12 && reviewArray.length == 4) {
    easy.style.display = 'none';
    medium.style.display = 'none';
    hard.style.display = 'block';
    document.getElementById('1').style.background = 'red';
    document.getElementById('2').style.background = 'red';
    document.getElementById('3').style.background = 'red';
    document.getElementById('4').style.background = 'red';
  } else if (13 <= rangeBar.value && reviewArray.length == 1) {
    easy.style.display = 'none';
    medium.style.display = 'block';
    hard.style.display = 'none';
    document.getElementById('1').style.background = 'rgb(255, 214, 12)';
    document.getElementById('2').style.background = 'rgb(255, 214, 12)';
    document.getElementById('3').style.background = 'rgb(255, 214, 12)';
    document.getElementById('4').style.background = 'none';
  } else if (13 <= rangeBar.value && reviewArray.length == 2) {
    easy.style.display = 'none';
    medium.style.display = 'none';
    hard.style.display = 'block';
    document.getElementById('1').style.background = 'red';
    document.getElementById('2').style.background = 'red';
    document.getElementById('3').style.background = 'red';
    document.getElementById('4').style.background = 'red';
  } else if (13 <= rangeBar.value && reviewArray.length == 3) {
    easy.style.display = 'none';
    medium.style.display = 'none';
    hard.style.display = 'block';
    document.getElementById('1').style.background = 'red';
    document.getElementById('2').style.background = 'red';
    document.getElementById('3').style.background = 'red';
    document.getElementById('4').style.background = 'red';
  } else if (13 <= rangeBar.value && reviewArray.length == 4) {
    easy.style.display = 'none';
    medium.style.display = 'none';
    hard.style.display = 'block';
    document.getElementById('1').style.background = 'red';
    document.getElementById('2').style.background = 'red';
    document.getElementById('3').style.background = 'red';
    document.getElementById('4').style.background = 'red';
  }
  // console.log(rangeBar.value);
}

function copyToClipBoard(e) {
  window.navigator.clipboard.writeText(password.innerHTML)
}

copy.addEventListener('click', copyToClipBoard)
copy.click()

rangeBar.addEventListener('input', generate)
rangeBar.addEventListener('input', review)
button.addEventListener('click', generate);
button.addEventListener('click', review);
uppercase.addEventListener('input', generate)
lowercase.addEventListener('input', generate)
numbers.addEventListener('input', generate)
symbols.addEventListener('input', generate)
uppercase.addEventListener('input', review)
lowercase.addEventListener('input', review)
numbers.addEventListener('input', review)
symbols.addEventListener('input', review)
button.click()