let angka = 0;

const like = document.getElementById("like");
const info = document.getElementById("info");

function render(){
    info.innerText = angka;
}

like.addEventListener("click", function(){
    angka++;
    render();
})