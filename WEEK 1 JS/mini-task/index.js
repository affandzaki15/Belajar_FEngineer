let tasks = []

const form = document.querySelector("#form");
const todo = document.querySelector("#todo");
const list = document.querySelector("#list");


function render(){
    list.innerHTML = ""

    tasks.forEach(task =>{
        const div = document.createElement("div");

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.checked = task.done

        
        
        checkbox.addEventListener("change", ()=>{
            task.done = !task.done;
            render()
        })
        const text = document.createElement("span");
        text.textContent = task.title

        if(task.done){
            text.style.textDecoration = "line-through";
            text.style.opacity = "0.5"
        }

        div.append(checkbox, text);
        list.appendChild(div)
    })
}

form.addEventListener("submit", e => {
    e.preventDefault()

    if(!todo.value.trim()) return

    const newTask = {

        id: Date.now(),
        title: todo.value,
        done: false
    }


    tasks.push(newTask);
    todo.value = ""
    render()
})