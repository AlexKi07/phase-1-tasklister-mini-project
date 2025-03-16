

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const formInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const newTask = document.createElement("li");
    newTask.textContent = formInput.value;

    taskList.appendChild(newTask);


    formInput.value = ""
  })
});
