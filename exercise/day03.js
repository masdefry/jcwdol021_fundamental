// 01
const displayMultiplicationTable = (_number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${_number} x ${i}`);
  }
};

displayMultiplicationTable(9);

// 02
const capitalizeFirstLetter = (str) => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      newStr += str[i].toUpperCase();
    } else if (str[i - 1] === ' ') {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
};

console.log(capitalizeFirstLetter('hello world'));

// 03
const swapCase = (str) => {
  let newStr = '';

  for (let character of str) {
    if (character === character.toUpperCase()) {
      newStr += character.toLowerCase();
    } else {
      newStr += character.toUpperCase();
    }
  }

  return newStr;
};

console.log(swapCase('Hello World'));

// 04
const sortNumbers = (num1, num2, num3) => {
    let lowest = num1; 
    let middle = num1;
    let highest = num1;

    if(num2){
        if(num2 < lowest){
            lowest = num2;
        }

        if(num2 > highest){
            highest = num2;
        }
    }

    if(num3){
        if(num3 < lowest){
            lowest = num3;
        }

        if(num3 > highest){
            highest = num3;
        } 
    }

    return [lowest, highest];
}

console.log(sortNumbers(100, 50, 25));