function great(nama){
    return "halo " + nama;
}

console.log(great("andi"))

const apalah = function (a, b){
    return a + b;
}

console.log(apalah(3,4));


// arrow
const kelas = guru => "halo " + guru;
console.log (kelas("budi")) 


// scope
let x = 10;

function test(){
    let y = 5;
    console.log(x);
    console.log(y);
}

console.log(x);
// console.log(y);

// challenge 1
const hitungLuasPersegi = sisi => " Luas Persegi adalah " + sisi*sisi;
console.log(hitungLuasPersegi(3));

// challenge 2
function formatNama(nama){
    let hasil = nama.toUpperCase();
    return "Halo " + hasil;
}
console.log(formatNama("budi"))

// // challenge 3
// function test(){
//     let angka = 10;
// }
// console.log(angka);
// // kode ini error, karena tidak ada global scope dan method didalam fungsi tidak ada return
// // sehingga pemanggilam tidak bisa dijalankan


let total = 0;

function tambah(){
  total = total + 5;
}

tambah();
console.log(total);

function hitung(){
  let angka = 3;
  return angka * 2;
}


console.log(hitung());

let nilai = 10;

function ubah(n){
  return 20;
}

nilai = ubah(nilai);
console.log(nilai); // 20
