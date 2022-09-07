// live bar values 
rangeBar.addEventListener('input', e => {
  rangeNumber.innerHTML = rangeBar.value;
  // return range;/
})

const generate = e => {
  const passwordArray = [];
  const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const symbolLetters = ['!', '@', '#', '$', '%', '^', '&', '*'];

  // For every item from 0 to the set range, the random function will create a character

  for (let i = -1; i < rangeNumber.innerHTML; i++) {
    let randomUppercase = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
    let randomLowercase = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
    let randomNumber = Math.floor(Math.random() * 9 + 0);
    let randomSymbol = symbolLetters[Math.floor(Math.random() * symbolLetters.length)]
    password.innerHTML = passwordArray.join('');
    let masterRandom = [randomUppercase, randomLowercase, randomSymbol, randomNumber]

    // Checkbox conditions
    if (!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked) {
      passwordArray.push(masterRandom[Math.floor(Math.random() * masterRandom.length)]);
    }
  }
}

rangeBar.addEventListener('input', generate)
button.addEventListener('click', generate);
button.click()