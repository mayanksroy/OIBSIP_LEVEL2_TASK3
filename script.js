const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');
const taskInput = document.getElementById('taskInput');

function createTaskElement(task, isCompleted) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;
    checkbox.addEventListener('change', () => toggleTaskCompletion(li));
    li.appendChild(checkbox);

    const text = document.createElement('span');
    text.textContent = task;
    text.className = isCompleted ? 'completed' : '';
    li.appendChild(text);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(li));
    li.appendChild(deleteButton);

    return li;
}

function addTask() {
    const task = taskInput.value.trim();
    if (task === '') return;

    const li = createTaskElement(task, false);
    pendingList.appendChild(li);

    taskInput.value = '';
}

function toggleTaskCompletion(taskElement) {
    const completed = taskElement.querySelector('input[type="checkbox"]').checked;
    const text = taskElement.querySelector('span');
    text.classList.toggle('completed', completed);

    if (completed) {
        completedList.appendChild(taskElement);
    } else {
        pendingList.appendChild(taskElement);
    }
}

function deleteTask(taskElement) {
    taskElement.remove();
}

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});