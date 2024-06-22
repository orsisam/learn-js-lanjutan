// Destructuring Assignment / variable

// Destructuring array
// const perkenalan = ['Halo', 'nama', 'saya', 'Daffa'];
// // skipping 2 elemen pertama
// const [salam, , , nama] = perkenalan;
// console.log(salam);
// console.log(nama);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// Destructuring object
// const mhs = {
//   nama: 'Daffa',
//   umur: 22,
// };

// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);

// Assignment tanpa deklarasi objek
({ nama, umur } = { nama: 'Daffa', umur: 22 });
console.log(nama);
console.log(umur);
