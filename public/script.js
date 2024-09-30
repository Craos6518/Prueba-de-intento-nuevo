document.getElementById('all-tasks').addEventListener('click', showAllTasks);
document.getElementById('tasks-category').addEventListener('click', showTasksByCategory);
document.getElementById('tasks-state').addEventListener('click', showTasksByState);
document.getElementById('tasks-priority').addEventListener('click', showTasksByPriority);

function showAllTasks() {
  // Fetch and display all tasks from the backend
  document.getElementById('task-container').innerHTML = 'All Tasks (example task data here)';
}

function showTasksByCategory() {
  // Fetch and display tasks by category
  document.getElementById('task-container').innerHTML = 'Tasks by Category (example task data here)';
}

function showTasksByState() {
  // Fetch and display tasks by state
  document.getElementById('task-container').innerHTML = 'Tasks by State (example task data here)';
}

function showTasksByPriority() {
  // Fetch and display tasks by priority
  document.getElementById('task-container').innerHTML = 'Tasks by Priority (example task data here)';
}
