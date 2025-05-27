// Variable
let fullName: string = 'Defryan';
fullName = 'Tridya';
console.log(fullName);

let isMarried: boolean = true;
isMarried = 'true';

let description: string | number | undefined = '';
description = 628121418000000;
description = undefined;

// Array
// Array dengan Tipe Data yg Seragam
const fruits: string[] = ['Apel', 'Jeruk', 'Anggur'];

// Array Tupple: Array dengan Tipe Data yg Beragam
const randomArray: [number, boolean, string] = [123, true, 'Hello'];

// Function
function greeting(username: string, hobby: string | number) {
  console.log(`Hello, ${username}, my hobby is ${hobby}.`);
}

greeting('Defryan', 'Coding');