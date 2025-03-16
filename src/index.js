
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const descriptionInput = document.querySelector('#new-task-description');
  // Create a priority dropdown in your HTML if you choose to use this
  const prioritySelect = document.querySelector('#priority');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const taskText = descriptionInput.value;
    const priority = prioritySelect ? prioritySelect.value : 'normal';

    // Create a new list item for each of the tasks task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Optional No. 1: Change text color based on priority
    if (priority === 'high') {
      li.style.color = 'red';
    } else if (priority === 'medium') {
      li.style.color = 'orange';
    } else if (priority === 'low') {
      li.style.color = 'green';
    }

    // Create a delete button for removing things
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Empty the input field
    descriptionInput.value = '';
  });
});
