const toggleBtn = document.getElementById("toggleBtn") as HTMLButtonElement | null;
const bio = document.querySelector(".bio") as HTMLElement | null;

if (toggleBtn && bio) {
  toggleBtn.addEventListener("click", () => {
    if (bio.style.display === "none") {
      bio.style.display = "block";
      toggleBtn.textContent = "Show Less";
    } else {
      bio.style.display = "none";
      toggleBtn.textContent = "Show More";
    }
  });
}
type Todo = {
  text: string;
  done: boolean;
};

let todos: Todo[] = [];

function renderList(): void {
  const list = document.getElementById("todos") as HTMLUListElement;
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.done ? `✅ ${todo.text}` : todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
      todos.splice(index, 1);
      renderList();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function addTodo(): void {
  const input = document.getElementById("input") as HTMLInputElement;
  const indexInput = document.getElementById("indexInput") as HTMLInputElement;

  const task = input.value.trim();
  const indexStr = indexInput.value.trim();

  if (task === "") {
    alert("Task cannot be empty!");
    return;
  }

  if (todos.some(t => t.text.toLowerCase() === task.toLowerCase())) {
    alert("Task already exists!");
    return;
  }

  const newTodo: Todo = { text: task, done: false };

  if (indexStr !== "" && !isNaN(Number(indexStr))) {
    const index = Number(indexStr);

    if (index >= 0 && index <= todos.length) {
      todos.splice(index, 0, newTodo);
    } else {
      alert("Invalid index. Task will be added to the end.");
      todos.push(newTodo);
    }
  } else {
    todos.push(newTodo);
  }

  input.value = "";
  indexInput.value = "";
  renderList();
}

// Expose to HTML
(window as any).addTodo = addTodo;
