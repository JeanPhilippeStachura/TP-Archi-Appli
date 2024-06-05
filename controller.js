document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskDescription = document.getElementById('taskInput').value;
    const taskCategory = document.getElementById('categoryInput').value;
    const newTask = taskModel.addTask(taskDescription, taskCategory);
    updateDisplay(taskModel.getTasks());
    document.getElementById('taskForm').reset();
});
