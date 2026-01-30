let count = 0


const minus = document.getElementById("min");
const plus = document.getElementById("plus");
const value = document.getElementById("value");


const render = () =>{
    value.innerText = count;

    if (count=== 0){
        minus.disabled = true;
    } else {
        minus.disabled = false;
    }
}

render();


minus.addEventListener("click", function(){
   if(count > 0){

       count--;
       render();
   }
})

plus.addEventListener("click", function(){
    count++;
    render();
})

