// 04
/*
    Convert Days to Years, Months, Days
    1. Menentukan jumlah hari dalam 1 tahun: 365 hari
    2. Menentukan jumlah hari dalam 1 bulan: 30 hari
    3. Cari jumlah tahun: totalDays / 365
    4. Cari jumlah bulan: totalDaysLeft / 30
    5. Cari jumlah hari: todalDaysLeft
*/
const totalDays = 400;
const years = Math.floor(totalDays / 365);
let totalDaysLeft = totalDays % 365; // 35
const months = Math.floor(totalDaysLeft / 30);
const days = totalDaysLeft % 30;
console.log(
  totalDays +
    ' Days =' +
    years +
    ' Years, ' +
    months +
    ' Months, ' +
    days +
    ' Days'
);
console.log(`${totalDays} Days = ${years} Years, ${months} Months, ${days} Days`)



// 05
const date1 = new Date('2020-05-18') // Milisecond ---> Days
const date2 = new Date('2025-05-21') // Milisecond ---> Days
const date1ToDays = date1 / (24 * 3600 * 1000)
const date2ToDays = date2 / (24 * 3600 * 1000)
console.log(`Different Days Between ${date1} & ${date2} = ${date2ToDays - date1ToDays} Days`)
