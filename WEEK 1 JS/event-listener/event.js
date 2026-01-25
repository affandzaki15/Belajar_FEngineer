let count = 0;
const countbtn = document.getElementById("count");
const hasil = document.getElementById("result");

function render() {
  if (count > 5) {
    hasil.innerText = "Banyak Klik";
    hasil.style.color = "red";
  } else {
    hasil.innerText = count;
  }
}
countbtn.addEventListener("click", function () {
  count++;
  render();
});
