// Spread Operator

// Menggabungkan array
// const mhs = ['Daffa', 'Rizki', 'Doncy'];
// const dosen = ['Erik', 'Budi', 'Joko'];
// const orang = [...mhs, ...dosen];
// console.log(orang);

// Mencopy array
// const mhs = ['Daffa', 'Rizki', 'Doncy'];
// const newMhs = [...mhs];
// console.log(newMhs);

// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const judul = document.querySelector('.judul');
const huruf = [...judul.textContent].map((h) => `<span>${h}</span>`).join('');

judul.innerHTML = huruf;
