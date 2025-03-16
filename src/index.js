
document.addEventListener("DOMContentLoaded", () => {
  // Select the form and the input field
  const form = document.querySelector('#create-task-form');
  const taskInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks'); // The list where tasks will be displayed

  // Listen for form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the user input
    const taskText = taskInput.value.trim(); // Trim to remove extra spaces

    if (taskText !== "") { // Only add non-empty tasks
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskText;

      // Add delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = " ❌ ";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener('click', () => li.remove());

      // Append button to the list item and add to the list
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      // Clear input field after submitting
      taskInput.value = "";
    }
  });
});
