const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                textSpan.style.textDecoration = 'line-through'; // Apply only to text
            } else {
                textSpan.style.textDecoration = 'none';
            }
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        
        li.appendChild(checkbox);
        li.appendChild(textSpan); // Only this should be strikethrough
        li.appendChild(removeButton);
        todoList.appendChild(li);
        
        todoInput.value = ''; 
    }
});
