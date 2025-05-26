// > FUNCTION
// Merupakan sebuah penampung baris code yang dapat digunakan berulang kali.

// Tipe-tipe function:
// 1. Function Declaration
function greet() {
  console.log('Hello, World!');
}

greet();

// 2. Function Expression
const sayHello = function () {
  console.log('Hello, World!');
};

sayHello();

// 3. Arrow Function
const sayHi = () => {
  console.log('Hi, World!');
};

sayHi();

// > PARAMETER FUNCTION
const greeting = (_name, _hobby = 'Unknown') => {
  console.log(`Hello, ${_name}! My hobby is ${_hobby}`); // Hello, my name is name! My hobby is hobby!
};

greeting('Defryan');
greeting('John', 'Reading');

// > RETURN FUNCTION
// Function yang dapat mengembalikan nilai

// Case. Buatlah 2 buah function, dimana function pertama melakukan penjumlahan 2 angka,
// dan function kedua menampilkan hasil penjumlahannya

const Sum = (number1, number2) => {
  return number1 + number2;
};

const Output = (result) => {
  console.log('Hasil penjumlahan =' + result);
};

const resultSum = Sum(10, 5); // 15
Output(resultSum);
