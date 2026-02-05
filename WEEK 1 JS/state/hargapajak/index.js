let harga = 5000;
let jumlah = 0

const tambah = document.getElementById("add");
const qty = document.getElementById("qty");
const total = document.getElementById("total");

function render(){
    
    const hasilTotal =  (jumlah * harga) * 1.1;
    const hasilRow = Math.round(hasilTotal);


    
    qty.innerText = jumlah;
    total.innerText = "Rp. " + hasilRow;
}

tambah.addEventListener("click", function(){
    jumlah++;
    render();
})