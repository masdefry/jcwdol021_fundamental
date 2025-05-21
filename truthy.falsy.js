// > TRUTHY-FALSY
// Tipe data non-boolean yang akan dikonversi menjadi nilai boolean (true/false)
// Falsy: "", 0, undefined, null, NaN
// Truthy: " ", "abc", 1, 2, 3, [], {}

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(' '));
console.log(Boolean(1));

// Case. Buatlah pengkondisian, apabila value nya 0 maka tampilkan console.log(Invalid), apabila valuenya > 0 maka tampilkan console.log(Valid)
let value = 0;
if (value === 0) {
  console.log('Invalid');
} else if (value > 0) {
  console.log('Valid');
}

if(value){ // if(Boolean(0)) ---> FALSE
    console.log('Valid')
}else if(!value){ // else if(!Boolean(0)) ---> !FALSE ---> TRUE
    console.log('Invalid')
}

let input = "..."

if(input){ // if(Boolean("...")) ---> TRUE
    console.log('Input is valid')
}else{
    console.log('Input is required')
}
