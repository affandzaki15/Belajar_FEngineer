// // const numbers = [10,20,30];

// // let total = 0;
// // numbers.forEach(item => {
// //     total += item
// // })
// // console.log(total);

// // const hargaBaru = numbers.map(item => {
// //     return item
// // })
// // console.log(hargaBaru);

// // const list = document.getElementById("list");

// // const fruits = ["semangka", "appel", "kelengkeng"];

// // list.innerHTML = "";

// // fruits.forEach(item =>{
// //     list.innerHTML += `<li> ${item} </li>`
// // })


// const items = [
//     {name: "Buku", price: 5000},
//     {name: "Pulpen", price: 2000},
// ]

// const list = document.getElementById("list");
// const total = document.getElementById("total");

// list.innerHTML = "";
// let isTotal = 0;

// items.forEach(item =>{
    //     list.innerHTML += `<li> ${item.name} - ${item.price}`
    //     isTotal += item.price;
    //     total.innerText = "Total: " + isTotal
    
    // })
    
    const list = document.getElementById("list");
    const total = document.getElementById("total");
const items = [
    {name: "Buku", price: 5000},
    {name: "Pulpen", price: 2000},
    {name: "tipex", price: 3000},
    {name: "hapus", price: 7000},
]

list.innerHTML ="";
let isTotal = 0;
items.forEach(item => {
    if (item.price > 3000){


        let label = "";

        if(item.price > 6000){
            label = " (MAHAL)"
        }

        list.innerHTML += `<li>${item.name} - Rp. ${item.price.toLocaleString("id-ID")} ${label} </li>`;
        isTotal += item.price;
    }
})
total.innerText = "total " + isTotal.toLocaleString("id-ID");

