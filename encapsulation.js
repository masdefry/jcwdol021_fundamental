// > ENCAPSULATION
// Metode untuk menyatukan data dan method, membatasi akses ke data yang ada didalamnya (public property & private propery)

class User {
  name;
  #email;

  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }
}

const user = new User('Defryan', 'defryan@gmail.com');
Object.seal(user);
console.log(user.getEmail());
