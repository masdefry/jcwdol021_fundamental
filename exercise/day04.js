// 02 - FizzBuzz
function FizzBuzz(n) {
  const output = [];
  for (let i = 1; i <= n; i++) {
    // i = 15
    if (i % 3 === 0 && i % 5 === 0) {
      // 15 % 3 === 0? TRUE;
      output.push('FizzBuzz');
    } else if (i % 5 === 0) {
      output.push('Buzz');
    } else if (i % 3 === 0) {
      output.push('Fizz');
    } else {
      output.push(i);
    }
  }

  return output;
}

console.log(FizzBuzz(15));

// 03 - BMI
function BMI(weight, height) {
  const bmi = weight / Math.pow(height, 2);

  if (bmi < 18.5) {
    return 'Less Weight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Ideal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  }
}

BMI(85, 1.68);

// 04 - Remove Odd Numbers in Array

function RemoveOddNumbers(arrOfNumbers) {
  const evenNumbers = [];

  for (let number of arrOfNumbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

console.log(RemoveOddNumbers([1, 2, 4, 6, 7, 9, 10]));

// 01 - Triangle Pattern

function PatternTriangle(height) {
  let pattern = '';

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += '*';
    }
    pattern += '\n'
  }

  return pattern;
}

console.log(PatternTriangle(3));
