let players = [];
let modeEdit = false;
let indexEdit = null;

const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.getElementById("list");
const info = document.getElementById("info");

function simpan() {
  localStorage.setItem("players", JSON.stringify(players));
}

function load() {
  const data = localStorage.getItem("players");

  if (data) {
    players = JSON.parse(data);
  }
}

function render() {
  list.innerHTML = "";
  players.forEach((item, index) => {
    list.innerHTML += `
      <li>
      ${item.name}

      <button onClick="hapus(${index})">X</button>
      <button onClick="mulaiEdit(${index})">edit</button>
      </li>
      `;

    });
    
    info.innerText = "jumlah: " + players.length;
  }
  
  add.addEventListener("click", function () {
    if(input.value.trim() === "") return;
    
    if(modeEdit){
      players[indexEdit].name = input.value
      
      modeEdit = false;
      indexEdit = null;
      add.innerText = "Tambah";
    } else{
      
      players.push({name : input.value})
    }
    input.value = "";
    simpan();
    render();
  });
  
  function mulaiEdit(index){
    input.value = players[index].name;
    
    modeEdit = true;
    indexEdit = index;
    add.innerText = "update";
}

function hapus(index) {
  players.splice(index, 1);

  simpan();
  render();
}

load();
render()