
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  let tasks = [];

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const taskInput = document.querySelector("#new-task-description").value;
      const priority = document.querySelector("#priority").value;

      if (taskInput.trim() !== "") {
          tasks.push({ text: taskInput, priority });
          renderTasks();
      }

      form.reset();
  });

  function renderTasks() {
      taskList.innerHTML = "";

      // Sort tasks by priority
      tasks.sort((a, b) => {
          const priorities = { high: 1, medium: 2, low: 3 };
          return priorities[a.priority] - priorities[b.priority];
      });

      tasks.forEach((task, index) => {
          const newTask = document.createElement("li");
          newTask.textContent = task.text;

          if (task.priority === "high") newTask.style.color = "red";
          if (task.priority === "medium") newTask.style.color = "orange";
          if (task.priority === "low") newTask.style.color = "green";

          // Delete button
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "❌";
          deleteBtn.style.marginLeft = "10px";
          deleteBtn.addEventListener("click", () => {
              tasks.splice(index, 1);
              renderTasks();
          });

          // Edit button
          const editBtn = document.createElement("button");
          editBtn.textContent = "✏️";
          editBtn.style.marginLeft = "10px";
          editBtn.addEventListener("click", () => {
              const newText = prompt("Edit your task:", task.text);
              if (newText) {
                  task.text = newText;
                  renderTasks();
              }
          });

          newTask.appendChild(editBtn);
          newTask.appendChild(deleteBtn);
          taskList.appendChild(newTask);
      });
  }
});
