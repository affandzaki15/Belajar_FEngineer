let tasks = [];

const form = document.querySelector("#form");
const inputEl = document.querySelector("#input");
const listEl = document.querySelector("#list");

function render() {
  listEl.innerHTML = "";

  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "item";

    const text = document.createElement("span");
    text.textContent = task.title;

    const btn = document.createElement("button");
    btn.textContent = "❌";

    btn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      render();
    });

    div.append(text, btn);
    listEl.appendChild(div);
  });

 
}

 // ADD TASK
  // ======================
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!inputEl.value.trim()) return;

    const newTask = {
      id: Date.now(),
      title: inputEl.value,
    };

    tasks.push(newTask);
    inputEl.value = "";

    render();
  });

  render();