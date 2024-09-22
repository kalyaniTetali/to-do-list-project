// Selecting form and task list elements
const form = document.querySelector('.form');
const taskInput = document.querySelector('#todo');
const taskList = document.querySelector('#taskList');

// Function to add a new task
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get the input value
  const taskValue = taskInput.value;

  // Create a new list item (li)
  const li = document.createElement('li');
  li.className = 'toDoItem';

  // Create a span for task text
  const taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = taskValue;

  // Create the delete (X) button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteBtn';
  deleteBtn.textContent = 'X';

  // Add event listener to taskText for line-through (complete task)
  taskText.addEventListener('click', function() {
    taskText.classList.toggle('completed');
  });

  // Add event listener to deleteBtn for removing task
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  // Append taskText and deleteBtn to the list item
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  // Append the new list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
});
