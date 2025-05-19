// > Methods
// Function siap pakai yang disediakan untuk memanipulasi data

// String Methods
// .slice
let word = 'Lorem ipsum dolor amet';
console.log(word.slice(0, 3));

// .replace
let school = 'Purwadhika Digital School';
school = school.replace('Purwadhika', 'Pwd');
console.log(school);

// .indexOf : Mencari karakter berada di index ke berapa?
let randomAlphabets = 'ksalskalskqlkslkaslak';
console.log(randomAlphabets.indexOf('a'));
console.log(randomAlphabets.lastIndexOf('a'));

// .length  : Menghitung jumlah karakter suatu string
console.log(randomAlphabets.length);

// .toUpperCase
let randomAlpha = 'PuRwAdHiKa';
console.log(randomAlpha.toUpperCase());

// .toLowerCase
console.log(randomAlpha.toLowerCase());

// Number Methods
// .toString    : Merubah tipe data number menjadi string
let discount = 70;
let disCountString = discount.toString();
console.log(disCountString);

// .toFixed
let point = 90.4;
console.log(point.toFixed());

let randoms = '1abc23';
// Number   : Merubah tipe data string menjadi number
console.log(Number(randoms));

// parseInt : Merubah tipe data string menjadi number
console.log(parseInt(randoms));

// Date Methods
let now = new Date();

let getFullYear = now.getFullYear();
let getMonth = now.getMonth();
let getDate = now.getDate();
console.log(getFullYear, getMonth + 1, getDate)
