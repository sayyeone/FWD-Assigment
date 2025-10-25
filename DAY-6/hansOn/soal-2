function pisahkanBilangan(...angka) {
  if (angka.length < 10) {
    console.log('Input minimal 10 angka!');
    return {
      arrayBilanganGenap: [],
      arrayBilanganGanjil: []
    };
  }

  const arrayBilanganGenap = angka.filter(num => num % 2 === 0);
  const arrayBilanganGanjil = angka.filter(num => num % 2 !== 0);

  return {
    arrayBilanganGenap,
    arrayBilanganGanjil
  };
}

console.log('=== CONTOH 1: Input Langsung ===');
const hasil1 = pisahkanBilangan(12, 7, 24, 15, 8, 33, 44, 19, 6, 21, 50, 11);
console.log('Array Bilangan Genap:', hasil1.arrayBilanganGenap);
console.log('Array Bilangan Ganjil:', hasil1.arrayBilanganGanjil);

console.log('\n=== CONTOH 2: Spread Array ===');
const angkaArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const hasil2 = pisahkanBilangan(...angkaArray);
console.log('Array Bilangan Genap:', hasil2.arrayBilanganGenap);
console.log('Array Bilangan Ganjil:', hasil2.arrayBilanganGanjil);

console.log('\n=== CONTOH 3: Dengan Angka Desimal ===');
const hasil3 = pisahkanBilangan(12.5, 8, 15.7, 20, 33, 44.2, 19, 6, 21, 50, 11, 14);
console.log('Array Bilangan Genap:', hasil3.arrayBilanganGenap);
console.log('Array Bilangan Ganjil:', hasil3.arrayBilanganGanjil);

console.log('\n=== CONTOH 4: Input Kurang dari 10 ===');
const hasil4 = pisahkanBilangan(1, 2, 3, 4, 5);
console.log('Array Bilangan Genap:', hasil4.arrayBilanganGenap);
console.log('Array Bilangan Ganjil:', hasil4.arrayBilanganGanjil);
