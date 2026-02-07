const light = document.getElementById("light");
const dark = document.getElementById("dark");

let isDark = false;

function simpan(){
    localStorage.setItem("toggle", JSON.stringify(isDark))
}

function load(){
    const data = localStorage.getItem("toggle")

    if(data){
        isDark = JSON.parse(data)
    }
}


function render(){
    
    if(isDark === true){
        document.body.style.backgroundColor = "#222222";
        document.body.style.color = "white"
        
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#222222"

    }
}


light.addEventListener("click", function(){
    isDark = false;
    simpan();
    render();
})
dark.addEventListener("click", function(){
    isDark = true;
    simpan();
    render();
})
load();
render();