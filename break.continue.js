// > BREAK & CONTINUE
// Break: Untuk menghentikan looping
// 1-5: Bilangan genap yang pertama
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
    break;
  }
}

// Continue: Untuk men-skip 1x looping
// Menampilkan angka 1-5 kecuali angka 3
for(let i = 1; i <= 5; i++){
    if(i === 3) continue;
    console.log(i)
}