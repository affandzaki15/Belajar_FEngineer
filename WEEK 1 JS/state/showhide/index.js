let show = true;

const toggle = document.getElementById("toggle");
const text = document.getElementById("text");

function render(){
    text.innerText = show ? "Halo" : "";
}

toggle.addEventListener("click", function(){
   show = !show;
    render();
})