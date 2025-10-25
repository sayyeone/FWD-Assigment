function hitungNilaiSemester(nilai = []) {
  if (nilai.length === 0) {
    return {
      totalNilaiSemesterGanjil: 0,
      totalNilaiSemesterGenap: 0,
      rataRataNilaiSemesterGanjil: 0,
      rataRataNilaiSemesterGenap: 0
    };
  }

  let totalGanjil = 0;
  let totalGenap = 0;
  let countGanjil = 0;
  let countGenap = 0;

  nilai.forEach((nilaiSemester, index) => {
    const semesterKe = index + 1; 
    if (semesterKe % 2 === 1) {
      totalGanjil += nilaiSemester;
      countGanjil++;
    } else {
      totalGenap += nilaiSemester;
      countGenap++;
    }
  });

  const rataGanjil = countGanjil > 0 ? totalGanjil / countGanjil : 0;
  const rataGenap = countGenap > 0 ? totalGenap / countGenap : 0;

  return {
    totalNilaiSemesterGanjil: totalGanjil,
    totalNilaiSemesterGenap: totalGenap,
    rataRataNilaiSemesterGanjil: rataGanjil,
    rataRataNilaiSemesterGenap: rataGenap
  };
}

const nilai8 = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];
const hasil = hitungNilaiSemester(nilai8);

console.log('=== HASIL PERHITUNGAN ===');
console.log(`Total Nilai Semester Ganjil (1,3,5,7): ${hasil.totalNilaiSemesterGanjil}`);
console.log(`Total Nilai Semester Genap (2,4,6,8): ${hasil.totalNilaiSemesterGenap}`);
console.log(`Rata-rata Nilai Semester Ganjil: ${hasil.rataRataNilaiSemesterGanjil}`);
console.log(`Rata-rata Nilai Semester Genap: ${hasil.rataRataNilaiSemesterGenap}`);

console.log('\n=== TEST DENGAN ARRAY KOSONG ===');
const hasilKosong = hitungNilaiSemester();
console.log(hasilKosong);
