const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const isCount = document.getElementById("count");


let count = 0;
function render(){
    isCount.innerText = count;

}

plus.addEventListener("click", function(){
    count++;
    render();
})
minus.addEventListener("click", function(){
    if(count > 0){
        count--
    }
    render();
})