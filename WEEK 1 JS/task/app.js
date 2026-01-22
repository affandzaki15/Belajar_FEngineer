// ✅ STATE
let tasks = [];
let nextId = 1;

// ELEMENTS
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const listEl = document.getElementById("task-list");
const countEl = document.getElementById("count");

// ✅ RENDER
function render() {
  listEl.innerHTML = "";

  for (let task of tasks) {
    const li = document.createElement("li");
    li.textContent = task.title;

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";

    delBtn.addEventListener("click", () => {
      deleteTask(task.id);
    });

    li.appendChild(delBtn);
    listEl.appendChild(li);
  }

  countEl.textContent = `Total: ${tasks.length}`;
}

// ✅ LOGIC
function addTask(title) {
  const newTask = {
    id: nextId++,
    title: title,
  };

  tasks.push(newTask);
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  render();
}

// ✅ EVENTS
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = input.value.trim();
  if (!title) return;

  addTask(title);
  input.value = "";
});

// render awal
render();
