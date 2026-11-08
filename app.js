let tasks = [];
let currentFilter = 'all';

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const itemsLeft = document.getElementById('items-left');
const clearCompletedBtn = document.getElementById('clear-completed');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderTasks() {
    list.innerHTML = '';

    let filteredTasks = tasks;
    if (currentFilter === 'active') filteredTasks = tasks.filter(t => !t.completed);
    if (currentFilter === 'completed') filteredTasks = tasks.filter(t => t.completed);

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        
        const span = document.createElement('span');
        span.textContent = task.text; 
        li.appendChild(span);

        if (task.completed) {
            li.classList.add('completed');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });

    const activeCount = tasks.filter(t => !t.completed).length;
    itemsLeft.textContent = `${activeCount} items left`;
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const text = input.value.trim();
    if (text === '') return;

    tasks.push({
        id: Date.now().toString(),
        text: text,
        completed: false
    });

    input.value = '';
    renderTasks();
});

list.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;
    const taskId = li.dataset.id;

    if (event.target.classList.contains('delete-btn')) {
        tasks = tasks.filter(t => t.id !== taskId);
        renderTasks();
        return;
    }

    if (event.target.tagName === 'SPAN') {
        const task = tasks.find(t => t.id === taskId);
        task.completed = !task.completed;
        renderTasks();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderTasks();
    });
});

clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    renderTasks();
});