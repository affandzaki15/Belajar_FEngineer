let count = 0;

const plus = document.getElementById("tambah");

function render(){
    document.getElementById("result").innerText = count;
}
plus.addEventListener("click", function(){
    count++;
    render();
})
