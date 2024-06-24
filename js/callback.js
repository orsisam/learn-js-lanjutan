// Callback
// synchronous callback

// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function tampilPesan(callback) {
//   const nama = prompt('Masukkan nama anda');
//   callback(nama);
// }

// tampilPesan(halo);

// asynchronous callback
const mhs = [
  {
    nama: 'Daffa',
    nrp: '12345',
    email: 'XwEzy@example.com',
    jurusan: 'Teknik Informatika',
    idDosenWali: 1,
  },
  {
    nama: 'Erik',
    nrp: '54321',
    email: 'erik@example.com',
    jurusan: 'Sastra Inggris',
    idDosenWali: 2,
  },
  {
    nama: 'Doncy',
    nrp: '67890',
    email: 'qG4bZ@example.com',
    jurusan: 'Teknik Informatika',
    idDosenWali: 3,
  },
  {
    nama: 'Sinta',
    nrp: '98765',
    email: 'sinta@example.com',
    jurusan: 'Teknik Mesin',
    idDosenWali: 2,
  },
];

// contoh synchronous
// console.log('mulai');
// mhs.forEach((m) => console.log(m.nama));
// console.log('selesai');

// contoh asynchronous
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa(
//   'mahasiswa.json',
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((el) => console.log(el.nama));
//   },
//   () => {}
// );
// console.log('selesai');

// using jquery
console.log('mulai');
$.ajax({
  url: 'mahasiswa.json',
  success: function (response) {
    response.forEach((el) => console.log(el.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log('selesai');
