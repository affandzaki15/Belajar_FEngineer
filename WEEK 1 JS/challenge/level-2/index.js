let todo = [
    { id: 1, text: "Belajar JS"}
]
let modeEdit = false;
let indexEdit = null;

const todos = document.getElementById("todo");
const btn = document.getElementById("btn");
const list = document.getElementById("list");


function simpan(){
    localStorage.setItem("todo", JSON.stringify(todo));
}

function load(){
    const data = localStorage.getItem("todo")

    if(data){
        todo = JSON.parse(data)
    }
}

function render(){
    list.innerHTML = "";
    todo.forEach((item, index)=>{

        list.innerHTML += `<li>
        
        ${item.id} - ${item.text}
        
        <button onClick="toEdit(${index})">Edit</button>
        <button onClick="hapus(${index})">X</button>
        </li>
        `
    })
    
}


function toEdit(index){
    // todos.value = todo[index].id;
    todos.value = todo[index].text;
    
    modeEdit = true;
    indexEdit = index;
}

function hapus(index){
    todo.splice(index, 1);
    simpan();
    render();
}

btn.addEventListener("click", function(){
    
    if(todos.value.trim() === "") return;
    
    if(modeEdit){
        todo[indexEdit].text = todos.value;
        modeEdit = false;
        indexEdit = null;
    } else {
        todo.push({
            id: todo.length + 1,
            text: todos.value})
    }

    todos.value = "";
    
    simpan();
    render();
})


load();
render();