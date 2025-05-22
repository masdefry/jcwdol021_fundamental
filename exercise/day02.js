// 01 - Even or Odd
let inputNumber = 10;

if (inputNumber % 2 === 0) {
  console.log(`${inputNumber} is Even`);
} else {
  console.log(`${inputNumber} is Odd`);
}

// 02 - Is Prime
{
  let inputNumber = 4;
  let isPrime = true;

  for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${inputNumber} is Prime`);
  } else {
    console.log(`${inputNumber} Not Prime`);
  }
}

{
  // 03 - Sum Number 1 to N
  let inputNumber = 5;
  let total = 0; // 0 += 1 = 1; 1 += 2 = 3; 3 += 3 = 6; ...
  for (let i = 1; i <= inputNumber; i++) {
    total += i;
  }
  console.log(total);
}

{
  // 04 - Factorial
  let inputNumber = 3;
  let total = 1;
  for (let i = inputNumber; i > 0; i--) {
    total *= i;
  }
  console.log(total);
}

{
  // 05 - Fibonacci
  let firstFibo = 1;
  let secondFibo = 1;
  let n = 15;
  let totalNFibo;

  for (let i = 3; i <= n; i++) {
    let total = firstFibo + secondFibo;

    // Swap firstFibo menjadi secondFibo, dan secondFibo menjadi currentTotal
    firstFibo = secondFibo;
    secondFibo = total;

    // Apabila i sudah berada di looping terakhir (i === 15)
    if (i === n) {
      totalNFibo = total;
    }
  }

  console.log(totalNFibo);
}
