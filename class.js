// > CLASS
// Cetakan untuk membuat object.

const products = [
  { name: 'Apel', price: 15000, stock: 100 },
  { nama: 'Jeruk', price: 20000, stock: 150 },
  { nama: 'Anggur', price: 25000, stock: 200 },
];

for (let product of products) {
  console.log(`${product.name}: ${product.price} (Stock: ${product.stock})`);
}

class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

const product1 = new Product('Apel', 15000, 10);

const arrayOfProducts = [
  new Product('Apel', 15000, 10),
  new Product('Anggur', 20000, 20),
  new Product('Jeruk', 25000, 30),
];

/*
    Challenge. 
    Disebuah supermarket terdapat banyak sekali kategori produk, seperti snack, pakaian, dan elektronik. 
    01 - Tentukan entitas apa saja yang terdapat di tiap-tiap kategori produk
    Snack: brand, name, price, stock, expiryDate, sku
    Clothes: brand, name, price, stock, size, color
    Electronic: brand, name, price, stock, SN, type, guarante

    02 - Buatkan class untuk tiap-tiap kategori produk
*/

class Product {
    constructor(brand, name, price, stock){
        this.brand = brand; 
        this.name = name; 
        this.price = price; 
        this.stock = stock;
    }
}

class Snack extends Product {
  constructor(brand, name, price, stock, expiryDate, sku) {
    super(brand, name, price, stock)
    this.expiryDate = expiryDate;
    this.sku = sku;
  }
}

class Clothes extends Product {
  constructor(brand, name, price, stock, size, color) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.size = size;
    this.color = color;
  }
}

class Electronic extends Product {
  constructor(brand, name, price, stock, sn, type, guarante) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.sn = sn;
    this.type = type;
    this.guarante = guarante;
  }
}
