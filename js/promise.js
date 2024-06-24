// memakai jquery
const url = 'http://www.omdbapi.com/?apikey=380296c7&s=avengers';

// $.ajax({
//   url: url,
//   success: (movies) => console.log(movies),
// });

// menggunakan vanilla javascript
// fetch(url)
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati');
//   } else {
//     reject('Ingkar janji');
//   }
// });

// janji1
//   .then((response) => console.log('OK!' + response))
//   .catch((response) => console.log('NOT OK!' + response));

// Contoh 2
let ditepati = false;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve('Janji telah ditepati setelah beberapa waktu');
    }, 2000);
  } else {
    setTimeout(() => {
      reject('Tidak ditepati setelah beberapa waktu');
    }, 3000);
  }
});

console.log('mulai');
console.log(
  janji2
    .finally(() => console.log('selesai menunggu'))
    .then((response) => console.log('OK! ' + response))
    .catch((response) => console.log('NOT OK! ' + response))
);
console.log('selesai');
