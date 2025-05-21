// > LOGICAL OPERATOR
// OR ||
// Apabila salah 1 kondisi bernilai true, maka hasil akhir akan true
// Apabila hasil akhir ingin bernilai false, maka semua kondisi harus bernilai false
console.log(5 === 5 || 1 <= 3); // TRUE || TRUE ---> TRUE
console.log(3 == 3 || 5 >= 1000); // TRUE || FALSE ---> TRUE
console.log(3 === '3' || 5 >= 100); // FALSE || FALSE ---> FALSE

// AND &&
// Apabila salah 1 kondisi bernilai false, maka hasil akhir akan false
// Apabila hasil akhir ingin bernilai true, maka semua kondisi harus bernilai true
console.log(5 == '5' && 'abc' === 'ABC'); // TRUE && FALSE ---> FALSE
console.log('1' === 1 && 1 === 1 && 3 > 1); // FALSE && TRUE && TRUE ---> FALSE

let username = 'mdefryan';

if (username && username.length > 5) { // TRUE && TRUE ---> TRUE
  console.log('Username is valid');
} else {
  console.log('Username invalid');
}
