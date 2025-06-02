// > OBJECT

const cars = {
  brand: 'BMW',
  price: 100000000000,
  color: 'Black',
};

console.log(cars.brand);
console.log(cars['brand']);

cars.brand = 'Toyota';
cars['brand'] = 'BYD';
console.log(cars);

delete cars.brand;
console.log(cars);

// Array of Object
const products = [
  { name: 'Apel', price: 30000, stocks: 100 },
  { name: 'Jeruk', price: 15000, stocks: 200 },
];

// Challenge. Looping data producs, dan tampilkan masing-masing data product di terminal
for (let product of products) {
  console.log(product.name);
  console.log(product.price);
  console.log(product.stocks);
}

// Optional Chaining
const user = {};

console.log(user?.address); // Undefined
console.log(user?.address?.street); // Error

// Destructuring Object
// Metode penyimpanan property kedalam masing-masing variable

const student = {
  fullName: 'Defryan',
  address: 'Bogor',
  hobby: 'Futsal',
};

// const { fullName, address, hobby } = student;
// console.log(fullName);
// console.log(address);
// console.log(hobby);

function Greeting() {
  let fullName = 'Defryan';
  let hobby = 'Futsal';

  return { fullName, hobby };
}

const { hobby, fullName } = Greeting();
console.log(fullName);
console.log(hobby);
