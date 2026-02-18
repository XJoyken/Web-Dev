let input = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let list = document.getElementById("todo-list");

function addTodo() {
  let text = input.value.trim();

  if (text === "") {
    return;
  }

  let li = document.createElement("li");
  li.className = "todo-item";

  let span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  let actions = document.createElement("div");
  actions.className = "todo-actions";

  let doneBtn = document.createElement("button");
  doneBtn.className = "todo-btn done-btn";
  doneBtn.textContent = "Done";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "todo-btn delete-btn";
  deleteBtn.textContent = "Delete";

  doneBtn.onclick = function () {
    if (span.classList.contains("done")) {
      span.classList.remove("done");
    }
    else {
      span.classList.add("done");
    }
  };

  deleteBtn.onclick = function () {
    list.removeChild(li);
  };

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  list.appendChild(li);

  input.value = "";
  input.focus();
}

addBtn.onclick = addTodo;

input.addEventListener("keydown",function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
