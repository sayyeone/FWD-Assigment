/**
 * Implementasi Inheritance dan Polymorphism
 * 
 * Buatlah sebuah class yang bernama Pekerja yang menerima 3 property
 * - nama
 * - usia
 * - pekerjaan
 *
 * Buatlah method
 * - getPekerjaInfo -> mengembalikan string sebagai berikut:
 *   "Nama: [nama], Usia: [usia], Gaji: [gaji]"
 * 
 * Buatlah 2 child class dari Pekerja yang bernama Programmer dan Designer
 * - Programmer
 *  - override method getPekerjaInfo -> mengembalikan string sebagai berikut:
 *    "Nama: [nama], Usia: [usia], Pekerjaan: [pekerjaan], Gaji: [gaji]"
 *  - method khusus:
 *    - program -> mengembalikan string "Saya sedang memprogram"
 * - Designer
 *  - override method getPekerjaInfo -> mengembalikan string sebagai berikut:
 *    "Nama: [nama], Usia: [usia], Pekerjaan: [pekerjaan], Gaji: [gaji]"
 * 
 * - Tambah property gaji (private property)
 */

class Pekerja {
  constructor({nama, usia, pekerjaan}) {
    this.nama = nama;
    this.usia = usia;
    this.pekerjaan = pekerjaan;
  }

  getPekerjaInfo() {
    return `Nama: ${this.nama}, Usia: ${this.usia} tahun, Pekerjaan: ${this.pekerjaan}`;
  }
}

//* INHERITANCE PART
// Child class Programmer
class Programmer extends Pekerja {
  //* ENCAPSULATION PART
  #techStack;
  #gaji;

  constructor({nama, usia, pekerjaan, techStack, gaji}) {
    // Super untuk mengakses constructor parent class
    super({ nama, usia, pekerjaan });
    this.#techStack = techStack;
    this.#gaji = gaji;
  }

  //* ABSTRACTION PARTS
  #menghitungBonus(jumlahBulan) {
    const jumlahBonusSatuBulan = this.#gaji * 0.3;
    const totalBonus = jumlahBonusSatuBulan * jumlahBulan;
    return totalBonus;
  }

  menghitungTotalGaji(jumlahBulan) {
    return this.#gaji * jumlahBulan;
  }

  menghitungRataRataGaji(jumlahBulan) {
    //* Menghitung total bonus yang didapatkan dari n bulan bekerja
    const totalBonus = this.#menghitungBonus(jumlahBulan);

    //* Menghitung total gaji yang didapatkan dari n bulan bekerja
    const totalGaji = this.menghitungTotalGaji(jumlahBulan);

    const rataRataGaji = (totalGaji + totalBonus) / jumlahBulan;
    return rataRataGaji;
  }

  //* POLYMORPHISM PART
  getPekerjaInfo() {
    return `Halo saya ${this.nama}, programmer yang menggunakan teknologi ${this.#techStack}`
  }

  set setTechStack(newTechStack) {
    this.#techStack = newTechStack;
  }

  get getTechStack() {
    return this.#techStack;
  }
}

// Object
const programmer1 = new Programmer({
  nama: "John Doe",
  usia: 25,
  pekerjaan: "Programmer",
  techStack: "JavaScript",
  gaji: 20000000
});
console.log(programmer1.getPekerjaInfo());
const rataRataGajiProgrammer6Bulan = programmer1.menghitungRataRataGaji(6);
console.log(`Rata-rata gaji programmer 6 bulan: ${rataRataGajiProgrammer6Bulan}`);

const totalGajiProgrammer6Bulan = programmer1.menghitungTotalGaji(6);
console.log(`Total gaji programmer 6 bulan: ${totalGajiProgrammer6Bulan}`);



// MENGUBAH TECH STACK
programmer1.setTechStack = "Next.js";
console.log(`Tech stack programmer1 sekarang: ${programmer1.getTechStack}`);
