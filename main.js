const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

        function addTodo() {
            const text = todoInput.value.trim();
            if (text === '') {
                alert('Please enter a task.');
                return;
            }

            const li = document.createElement('li');
            li.className = 'todo-item';

            const input = document.createElement('input');
            input.type = 'text';
            input.value = text;
            input.disabled = true;

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'actions';

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = function () {
                if (input.disabled) {
                    input.disabled = false;
                    input.focus();
                    editButton.textContent = 'Save';
                } else {
                    input.disabled = true;
                    editButton.textContent = 'Edit';
                }
            };

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () {
                todoList.removeChild(li);
            };

            actionsDiv.appendChild(editButton);
            actionsDiv.appendChild(deleteButton);

            li.appendChild(input);
            li.appendChild(actionsDiv);
            todoList.appendChild(li);

            todoInput.value = '';
        }