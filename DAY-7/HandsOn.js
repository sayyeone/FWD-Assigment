/**
 * Spread Operator and Rest Parameter
 * - There is an object of student with properties:
 *  - name
 *  - age
 *  - email
 *  - jurusan
 *  
 * Kemudian terdapat beberapa nilai yang akan menjadi rest parameter
 * 
 * - TASKS
 * 1. Copy object student to new object
 * 2. Filter the parameter that not a number
 * 3. Count the average of the rest parameter
 * 4. Add the average to the new property "rataRataNilai"
 * 5. Add the array of filtered parameter to the new property "arrayNilai"
 * 
 * Random rest parameter including number (score 0-100), string, boolean
 * restParameter = [100, 85, "hello", true, 90, 77.5, 97.5, false]
 */

const objectStudent = {
  nama: 'Budi',
  usia: 20,
  email: 'budi@gmail.com',
  jurusan: 'Teknik Informatika'
};

const memformatObjectStudent = (objectStudent, ...restParameter) => {
  const filteredRestParameter = restParameter.filter((nilaiItem) => {
    return typeof nilaiItem === 'number';
  });
  
  console.log("filteredRestParameter: ", filteredRestParameter);

  const rataRataNilai = filteredRestParameter.reduce((totalNilai, nilaiSaatIni) => {
    return totalNilai + nilaiSaatIni;
  }, 0) / filteredRestParameter.length;

  return {
    ...objectStudent,
    rataRataNilai: rataRataNilai,
    arrayNilai: filteredRestParameter
  };
}

const hasilFormatObjectStudent1 = 
  memformatObjectStudent(objectStudent, 100, 85, "hello", true, 90, 77.5, 97.5, false);

console.log("\n=== HASIL ===");
console.log("Object Original: ", objectStudent);
console.log("Hasil Format Object Student: ", hasilFormatObjectStudent1);

console.log("\n=== DETAIL ===");
console.log("Nama:", hasilFormatObjectStudent1.nama);
console.log("Usia:", hasilFormatObjectStudent1.usia);
console.log("Email:", hasilFormatObjectStudent1.email);
console.log("Jurusan:", hasilFormatObjectStudent1.jurusan);
console.log("Array Nilai:", hasilFormatObjectStudent1.arrayNilai);
console.log("Rata-rata Nilai:", hasilFormatObjectStudent1.rataRataNilai.toFixed(2));

console.log("\n=== TEST 2 ===");
const hasilFormatObjectStudent2 = 
  memformatObjectStudent(objectStudent, 95, "test", 80, false, 88.5, null, 92);

console.log("Hasil Format Object Student 2: ", hasilFormatObjectStudent2);
