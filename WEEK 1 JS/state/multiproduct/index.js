let cart = [];

const drinks = {

    teh: 3000,
    kopi: 4000,
    jus: 12000
}


const addTeh = document.getElementById("addTeh");
const addKopi = document.getElementById("addKopi");
const addJus = document.getElementById("addJus");
const list = document.getElementById("list");
const total = document.getElementById("total");


function render(){
    let istotal = 0;
    cart.forEach(item =>{
        istotal += item.price
    })

    list.innerHTML = "";
    cart.forEach(item =>{

        list.innerHTML += `<li>${item.name} - ${item.price} </li>`
    })

    total.innerText = "Total: Rp. " + istotal.toLocaleString('id-ID');
    
}



addTeh.addEventListener("click", function(){
    cart.push({name: "Teh", price: drinks.teh })
    render();
})
addKopi.addEventListener("click", function(){
    cart.push({name: "Kopi", price: drinks.kopi })
    render();
})
addJus.addEventListener("click", function(){
    cart.push({name: "Jus", price: drinks.jus })
    render();
})