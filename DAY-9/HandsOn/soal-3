const avg = (rawData) => {
  let totalNilai = 0;
  for (const item of rawData) {
    totalNilai += item.nilai;
  }
  return (totalNilai / rawData.length).toFixed(2);
}

// const showSummary = (rawData) => {
//   const summary = {};
//   for (const item of rawData) {
//     if (!summary[item.kelas]) {
//       summary[item.kelas] = [];
//     }
//     summary[item.kelas].push(item);
//   }

//   for (const key in summary) {
//     console.log(`kelas = ${key} | jumlah siswa = ${summary[key].length} | nilai rata-rata = ${avg(summary[key])}`);
//   }
// };

const showSummary = (rawData) => {
  let grouped = {};

  for(let i = 0; i < rawData.length; i++) {
  if(grouped[rawData[i].kelas] === undefined) {
    grouped[rawData[i].kelas] = [];
  }
  grouped[rawData[i].kelas].push(rawData[i]);
 }

  for(const key in grouped) {
    console.log(`kelas = ${key} | jumlah siswa = ${grouped[key].length} | nilai rata-rata = ${avg(grouped[key])}`);
  }

};

const rawData = [
  {nama: "siswa 1", kelas: 'A', nilai: 100},
  {nama: "siswa 2", kelas: 'B', nilai: 90},
  {nama: "siswa 3", kelas: 'C', nilai: 85},
  {nama: "siswa 4", kelas: 'D', nilai: 95},
  {nama: "siswa 5", kelas: 'D', nilai: 95},

];

showSummary(rawData);
/*
  menampilkan console.log() data dalam bentuk
  1. kelas = a | jumlah siswa = 3 | nilai rata-rata = 86.67
  dst...

  loop key in object
  kelas = {key} | jumlah siswa = {obj[key]} | rata-rata = {avg(obj[key])}

  cara hitung rata" = total nilai / total.length

*/
