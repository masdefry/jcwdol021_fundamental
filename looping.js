// > LOOPING
// 1. While Loop
// 2. Do-While Loop
// 3. For-Loop

// 1. While Loop
/*
    InitialCondition; 
    Condition; 
    ExitWay;

    Syntax:

    while(condition){
        task;
    }
*/

let start = 1;
while (start <= 10) {
  // 11 <= 10? FALSE;
  console.log('Purwadhika');
  start += 2;
}

let i = 5; // 5 ---> 6
while (i <= 5) {
  // 6 <= 5? FALSE
  console.log('Hello'); // 1x
  i += 1;
}

let j = 3; // 3 ---> 6 ---> 9 ---> 12
while (j <= 9) {
  // 12 <= 9? FALSE!
  console.log('Hai'); // 3x
  j += 3;
}

// 2. Do-While
/*
    Syntax:

    do{
        task;
    }while(condition)
*/
let startLoop = 1; // 1 ---> 2 ---> 3 ---> 4 ... 10 ---> 11
do {
  console.log('Purwadhika'); // 10x
  startLoop++;
} while (startLoop <= 10); // 11 <= 10? FALSE

let startWhileLoop = 1;
while (startWhileLoop < 1) {
  // 1 < 1? FALSE!
  console.log('While Loop');
  startWhileLoop += 3;
}
// >>>
let startDoWhile = 1; // 1 ---> 4
do {
  console.log('Do While'); // 1x
  startDoWhile += 3;
} while (startDoWhile < 1); // 4 < 1? FALSE!

// 3. FOR LOOP (Mirip Seperti While)
/*
    Syntax:
    for(initialValue; condition; exitWay){
        task;
    }
*/
for (let i = 1; i <= 10; i++) {
  console.log('Purwadhika'); // 3x
}

for (let j = 100; j <= 103; j += 3) {
  console.log('Web Development'); // 2x
}
