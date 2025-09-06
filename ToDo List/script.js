const input = document.getElementById('taskInput');
const addButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    taskSpan.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    input.value = '';
}

addButton.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
