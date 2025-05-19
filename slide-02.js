
// Var vs Let vs Const
// Var
// 1. Memperbolehkan Penamaan yang Sama
var program = 'Javascript';
var program = 'PHP';

// 2. Value bisa di update
var number = 100;
number = 1000;
console.log(number)

// 3. Tidak punya batasan scope

// Let
// 1. Tidak Diperbolehkan Penamaan yang Sama
// let car = 'Wuling'
// let car = 'BYD'

// 2. Value bisa di update
let discount = 10
discount = 100
console.log(discount)

// 3. Punya batasan scope

// Const
// 1. Tidak Diperbolehkan Penamaan yang Sama
// const car = 'Wuling'
// const car = 'BYD'

// 2. Value tidak bisa di update
const money = 100000
money = 1000

// 3. Punya batasan scope