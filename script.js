const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');// hey 
addTodoButton.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodoButton.click(); // Simulate click on Enter
    }
});
console.log("Hello");
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        
        checkbox.addEventListener('change', () => {
            textSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(removeButton);
        todoList.appendChild(li);
        
        todoInput.value = ''; 
    }
}
