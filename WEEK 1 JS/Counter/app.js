let count = 0;

const counter = document.getElementById("count");
const statuser = document.getElementById("status");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");

function render() {
  counter.textContent = count;

  let status = "low";
  if (count >= 4 && count <= 8) status = "medium";
  if (count > 8) status = "high";

  statuser.textContent = status;
}

render();

minus.addEventListener("click", () => {
    
        count--;
    
    render();
})

plus.addEventListener("click", () => {
    count++;
    render();
})

reset.addEventListener("click", ()=>{
    count = 0;
    render();
})