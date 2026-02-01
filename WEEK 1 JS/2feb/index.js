let isDiscount = false;
const originalPrice = 100000;
const discountAmount = 20000;

const toggle = document.getElementById("toggleDiscount");
const infos = document.getElementById("info");
const total = document.getElementById("total");

function render() {
  const finalPrice = originalPrice - discountAmount;
  
  if (isDiscount) {
      infos.innerText = "Diskon: ON";
      total.innerText = "Total: " + finalPrice;
  } else {

    infos.innerText = "Diskon: OFF";
    total.innerText = "Total: " + originalPrice;
  }
}

toggle.addEventListener("click", function () {
  isDiscount = !isDiscount;
  render();
});

render();
