// > Variable
// Menyimpan Data

// Ex. 10x console.log('Nama')
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');

// Declare Variable:
// var variableName = value
var name = 'Alvin';
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);

// Variable Declaration Rule:
// 1. Diawali dengan huruf, atau symbol khusus ($ dan _)
// var #name
// var 10name
var $name;
var _name;
// 2. Penamaan variable harus jelas dan deskriptif (jangan terlalu global)
var stadionName = 'Bung Karno';
var purwadhikaProgramCourse = 'Job Connector Web Development';
// 3. Format (camelCase, snake_case, PascalCase)
var StadiumName;
var stadiumName;
var stadium_name;
// 4. Case sensitive
var fruit = 'Apel';
var Fruit = 'Jeruk';
console.log(Fruit);

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