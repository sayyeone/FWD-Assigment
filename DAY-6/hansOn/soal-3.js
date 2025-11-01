const arrayObjectSiswa = [
  { id: 1100, nama: "Budi", jurusan: "Sistem Komputer", nilaiNilai: [80, 90, 75] },
  { id: 1210, nama: "Siti", jurusan: "Teknik Informatika", nilaiNilai: [90, 100, 67] },
  { id: 1232, nama: "Andi", jurusan: "Sistem Informasi", nilaiNilai: [78, 80, 100] },
  { id: 4324, nama: "Dewi", jurusan: "Teknik Komputer", nilaiNilai: [88, 60, 50] },
  { id: 5612, nama: "Rina", jurusan: "Sistem Komputer", nilaiNilai: [92, 75, 78] },
  { id: 1645, nama: "Joko", jurusan: "Teknik Informatika", nilaiNilai: [80, 60, 90] },
  { id: 972, nama: "Sari", jurusan: "Sistem Informasi", nilaiNilai: [95, 100, 100] },
];

function prosesDataSiswa(dataSiswa) {
  const siswaWithRataRata = dataSiswa.map(siswa => {
    const totalNilai = siswa.nilaiNilai.reduce((total, nilai) => total + nilai, 0);
    const rataRataNilai = totalNilai / siswa.nilaiNilai.length;

    return {
      ...siswa,
      nama: siswa.nama.toUpperCase(),
      rataRataNilai: rataRataNilai
    };
  });

  const siswaFilteredByRataRata = siswaWithRataRata.filter(siswa => siswa.rataRataNilai > 85);

  const siswaSorted = siswaFilteredByRataRata.sort((a, b) => b.id - a.id);

  return siswaSorted;
}

const hasilAkhir = prosesDataSiswa(arrayObjectSiswa);

console.log('=== HASIL AKHIR ===');
console.log(hasilAkhir);

console.log('\n=== DETAIL SETIAP SISWA ===');
hasilAkhir.forEach(siswa => {
  console.log(`ID: ${siswa.id} | Nama: ${siswa.nama} | Jurusan: ${siswa.jurusan}`);
  console.log(`Nilai: [${siswa.nilaiNilai.join(', ')}] | Rata-rata: ${siswa.rataRataNilai.toFixed(2)}`);
  console.log('---');
});
