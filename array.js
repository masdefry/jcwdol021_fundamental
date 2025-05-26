// > ARRAY
// Merupakan struktur data yang digunakan untuk menyimpan sekumpulan data dalam satu variabel.
// Case. List data buah
const fruit01 = 'Anggur';
const fruit02 = 'Apel';
const fruit03 = 'Jeruk';

const fruits = ['Anggur', 'Apel', 'Jeruk'];
console.log(fruits[1]); // fruits index ke-01
fruits[2] = 'Mangga'; // Mengubah nilai index ke-02
console.log(fruits);

delete fruits[0];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// > ARRAY METHOD
// 01 - Length : Menghitung jumlah element/item didalam array
const alphabets = ['a', 'b', 'c'];
console.log(alphabets.length);

// 02 - Push : Menambahkan element/item baru di index paling akhir
const cars = ['Toyota', 'Honda', 'Suzuki'];
cars.push('BYD');
console.log(cars);

// 03 - Unshift : Menambahkan element/item baru di index paling awal
cars.unshift('Tesla');
console.log(cars);

// 04 - Pop : Menghapus element/item paling akhir
cars.pop();
console.log(cars);

// 05 - Unshift : Menghapus element/item paling awal
cars.shift();
console.log(cars);

// 06 - IndexOf : Mencari index dari suatu element/item
const motors = ['Beat', 'Vario', 'Scoopy'];
console.log(motors.indexOf('Vario'));

// 07 - LastIndexOf : Mencari index dari suatu element/item dari belakang
const numbers = [1, 2, 3, 4, 3, 5];
console.log(numbers.lastIndexOf(3));

// 08 - Includes : Mengecek apakah suatu element/item ada didalam array
const pets = ['Kucing', 'Anjing', 'Burung'];
console.log(pets.includes('buaya')); // true

// 09 - Slice : Mengambil sebagian element/item dari array
const colors = ['Merah', 'Hijau', 'Biru', 'Kuning'];
console.log(colors.slice(0, 3));

// 10 - Splice : Menambahkan atau menghapus element/item pada index tertentu
// .splce(index, jumlah yang dihapus, item baru)
const vegetables = ['Wortel', 'Bayam', 'Kangkung'];
vegetables.splice(0, 1);
console.log(vegetables);

const foods = ['Nasi', 'Ayam', 'Sayur'];
foods.splice(1, 0, 'Ikan');
console.log(foods);

const drinks = ['Teh', 'Kopi', 'Susu'];
drinks.splice(2, 1, 'Jus');
console.log(drinks);

const products = ['Laptop', 'Smartphone', 'Tablet', 'Smartwatch', 'Headphone'];
products.splice(1, 2, 'Smart Speaker', 'Smart TV');
console.log(products);