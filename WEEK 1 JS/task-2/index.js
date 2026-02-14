let state = {
  tasks: [],
  filter: "all",
  priority: "low",
};

const taskContainer = document.querySelector("#task");
const inputTask = document.querySelector("#input-task");

const totalEl = document.querySelector("#total");
const activeEl = document.querySelector("#active");
const doneEl = document.querySelector("#done");

const form = document.querySelector("form");
// Ambil semua tombol yang punya class 'btn-prio' sekaligus
const semuaTombolPrio = document.querySelectorAll(".btn-prio");
const labelTombolUtama = document.querySelector("#text-prioritas");
const kotakMenu = document.querySelector("#kotak-menu");

function updateStats() {
  const total = state.tasks.length;
  const done = state.tasks.filter((t) => t.done).length;
  const active = total - done;

  totalEl.textContent = `${total} Total`;
  activeEl.textContent = `${active} Active`;
  doneEl.textContent = `${done} Done`;
}

function saveToLocal() {
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
}
const saved = localStorage.getItem("tasks");
if (saved) {
  state.tasks = JSON.parse(saved);
}

render();

function render() {
  taskContainer.innerHTML = "";

  let filtered = state.tasks;

  if (state.filter === "active") {
    filtered = filtered.filter((t) => !t.done);
  }

  if (state.filter === "done") {
    filtered = filtered.filter((t) => t.done);
  }

  filtered.forEach((task) => {
    const div = document.createElement("div");
    div.className = "flex items-center gap-2 m-10 p-3 border rounded";

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = !task.done;
      render();
    });

    // text
    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.done) span.classList.add("line-through", "opacity-50");

    // priority badge
    const badge = document.createElement("span");
    badge.textContent = task.priority;
    badge.className = "text-xs px-2 py-1 rounded bg-gray-200";

    // delete
    const del = document.createElement("button");
    del.textContent = "X";
    del.addEventListener("click", () => {
      state.tasks = state.tasks.filter((t) => t.id !== task.id);
      render();
    });

    div.append(checkbox, span, badge, del);
    taskContainer.appendChild(div);
  });

  // submit

  // 2. Fungsi Add Task (INI YANG HILANG)
  form.onsubmit = (e) => {
    e.preventDefault(); // Mencegah halaman refresh

    if (inputTask.value.trim() === "") return; // Jangan tambah kalau kosong

    const newTask = {
      id: Date.now(),
      title: inputTask.value,
      priority: labelTombolUtama.innerText, // Mengambil teks dari tombol prio
      done: false,
    };

    state.tasks.push(newTask);
    inputTask.value = ""; // Kosongkan input
    render();
  };

  // Kita cari tombolnya
  const tombolPrio = document.querySelector("#btn-prio");

  // Kita kasih perintah: "Kalau diklik, jalankan fungsi ini"
  tombolPrio.addEventListener("click", function () {
    const menu = document.querySelector("#kotak-menu");
    menu.classList.toggle("hidden");
  });

  // Kita kasih perintah ke SEMUA tombol itu pakai perulangan (forEach)
  semuaTombolPrio.forEach((tombol) => {
    tombol.addEventListener("click", () => {
      // 1. Ambil teks dari tombol yang diklik (High/Medium/Low)
      const nilai = tombol.innerText;

      // 2. Ganti teks tombol utama
      labelTombolUtama.innerText = nilai;

      // 3. Sembunyikan menu
      kotakMenu.classList.add("hidden");

      console.log("Terpilih:", nilai);
    });
  });

  document.querySelector("#filter-all").onclick = () => {
    state.filter = "all";
    render();
  };

  document.querySelector("#filter-active").onclick = () => {
    state.filter = "active";
    render();
  };

  document.querySelector("#filter-done").onclick = () => {
    state.filter = "done";
    render();
  };

  updateStats();
  saveToLocal();
}
