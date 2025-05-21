// > CONDITIONAL STATMENT
// Pengkondisian digunakan untuk menentukan code mana yang harus di eksekusi

// 1. if
/*
    if(condition){
        task;
    }
*/
let umur = 20;
if (umur > 17) {
  // 20 > 17? TRUE;
  console.log('Umur memenuhi syarat');
}

if (200 <= 2000) {
  // 200 <= 2000? TRUE;
  console.log('Ok!');
}

// 2. if-else
/*
    if(condition){
        task;
    }else{
        task;
    }
*/
let age = 16;
if (age > 17) {
  // 16 > 17? FALSE
  console.log('Ok, passed!');
} else {
  console.log('Ops, not passed!');
}

// 3. if-else if-else
/*
    if(condition){
        task;
    }else if(condition){
        task;
    }else{
        task;
    }
*/

let nilai = 99;
if (nilai > 90) {
  // 80 > 90? FALSE
  console.log('Lulus dengan nilai sangat baik');
} else if (nilai >= 80) {
  // 80 >= 80? TRUE
  console.log('Lulus dengan nilai baik');
} else {
  console.log('Tidak lulus');
}

let point = 1000;
if (point >= 1000) {
  console.log('Point anda mencukupi');
}

if (point >= 500) {
  console.log('Point anda cukup');
} else {
  console.log('Point anda kurang');
}
