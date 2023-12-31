// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta
// contoh penggunaannya(kecuali : split, reverse, join, foreach, map)

/*
1.filter(): Membuat array baru dengan elemen-elemen yang memenuhi kondisi yang ditentukan dalam fungsi callback. Mengembalikan elemen-elemen yang kondisiny true.

2.find(): Mengembalikan nilai dari elemen pertama dalam array yang memenuhi kondisi yang ditentukan dalam fungsi callback. Jika tidak ditemukan, mengembalikan undefined.

3.slice(): Mengembalikan sebagian dari array sebagai array baru, mulai dari indeks yang ditentukan hingga indeks sebelumnya. Tidak mempengaruhi array asli.

reduce(): Mengurangi elemen-elemen array menjadi satu nilai tunggal dengan menggunakan fungsi callback yang diterapkan pada setiap elemen array. Menerima argumen fungsi callback dan nilai awal sebagai parameter.

some(): Memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi yang ditentukan dalam fungsi callback. Mengembalikan true jika ada elemen yang lulus tes kondisi, dan false jika tidak ada.

every(): Memeriksa apakah semua elemen dalam array memenuhi kondisi yang ditentukan dalam fungsi callback. Mengembalikan true jika semua elemen lulus tes kondisi, dan false jika tidak.

sort(): Mengurutkan elemen array berdasarkan urutan leksikografis atau dengan aturan urutan yang ditentukan dalam fungsi pembanding.

includes(): Memeriksa apakah array berisi elemen tertentu. Mengembalikan true jika elemen ada dalam array, dan false jika tidak.

push(): Menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang baru array.

pop(): Menghapus dan mengembalikan elemen terakhir dari array.
 */
//contoh penggunaan

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(0, 3);
console.log(arr2);
