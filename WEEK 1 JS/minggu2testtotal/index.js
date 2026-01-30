const buatSapa = nama => {
    return "halo, " + nama
}

const greeting = document.getElementById("greet")

greeting.addEventListener("click", function(){
    const hasil = buatSapa("Budi");
    document.getElementById("result").innerText = hasil;
})