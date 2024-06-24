function jumlahkan(...values) {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
const kelompok1 = ['Daffa', 'Rizki', 'Doncy', 'Sinta', 'Nurul'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

// Object destructuring
const team = {
  pm: 'Daffa',
  frontEnd1: 'Rizki',
  frontEnd2: 'Doncy',
  backEnd: 'Sinta',
  ux: 'Nurul',
  devOps: 'Erik',
};

const { pm, ...otherTeams } = team;
console.log(otherTeams);

function filterBy(type, ...values) {
  return values.filter((value) => typeof value === type);
}

console.log(filterBy('number', 1, 2, '3', 4, '5', 'adit'));
