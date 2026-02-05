let harga = 5000;
let jumlah = 0;

const minus = document.getElementById("min");
const add = document.getElementById("plus");
const qty = document.getElementById("qty");
const tax = document.getElementById("tax");
const total = document.getElementById("total");



function render() {
    let hargaAwal =  (jumlah * harga);
    let pajak = jumlah > 0 ? hargaAwal * 0.1 : 0;

    let hargaTotal = hargaAwal + pajak;
    let hargaReal = hargaTotal.toLocaleString('id-ID' , {
        style: "currency",
        currency:"IDR",
        minimumFractionDigits: 0
    });

    minus.disabled = jumlah === 0;
    qty.innerText = "Qty: " + jumlah;
    tax.innerText = "Tax: " + (jumlah > 0 ? pajak.toLocaleString("id-ID") : "-");
    total.innerText = "Total: " + hargaReal;


}

render();


minus.addEventListener("click", function(){
    if (jumlah>0){
        jumlah--;
    }
    render();
})
add.addEventListener("click", function(){
    jumlah++;
    render();
})