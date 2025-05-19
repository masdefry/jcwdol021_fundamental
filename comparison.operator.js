// > Comparison Operator
// Operator pembanding
// Hasil akhir dari perbandingan yaitu adalah boolean (true or false)
// >, >=, <, <=, ==, ===, !==

const num1 = 100;
const num2 = 1000;
console.log(num1 > num2);
console.log(num1 < num2);

console.log(100 >= 100);
console.log(99 <= 100);

// ==   : Pengecekan value saja
// ===  : Pengecekan value dan tipe datanya
console.log(100 == '100'); // true
console.log(5 === '5'); // false

console.log(5 !== 100); // true
console.log(5 !== 5); // false
