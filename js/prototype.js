// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan`;
// };

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain`;
  }

  tidur(jam) {
    this.energi += jam;
    return `Halo ${this.nama}, selamat tidur`;
  }
}

let isro = new Mahasiswa('Isro', 10);
let rizki = new Mahasiswa('Rizki', 20);
let daffa = new Mahasiswa('Daffa', 30);
