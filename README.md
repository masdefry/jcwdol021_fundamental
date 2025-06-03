Hello, Full Stack Students✌️!

✔️Asynchronous

`Asynchronous` adalah istilah didalam pemrograman yang merujuk pada cara menjalankan kode yang tidak harus menunggu proses sebelumnya selesai untuk dapat menjalankan kode berikutnya.

Dalam pemrograman, asynchronous digunakan untuk menangani proses yang memerlukan waktu, seperti:

▪️Menunggu respon dari database

▪️Mengambil data dari server (API call)

▪️Membaca file

Apabila proses diatas dilakukan secara synchronous, program akan berhenti sementara sampai proses selesai. Namun dengan asynchronous, program dapat menjalankan tugas berikutnya terlebih dahulu.

✔️Callback

Callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain, dan akan dipanggil (called back) setelah proses aynchronous selesai.

🔁 Kelemahan callback:

▪️ Callback Hell: jika banyak proses berurutan, akan terjadi nested callback yang susah dibaca dan di maintain.

✔️Promise

Promise adalah objek yang mewakili future value, hasil dari proses asynchronous. Dengan promise, kita bisa menulis fungsi asynchronous secara lebih bersih dibanding callback.

✔️Async Await

Async/await adalah syntactic sugar di atas promise, membuat kode asynchronous tampak seperti kode synchronous, sehingga lebih mudah dibaca.
