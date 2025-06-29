const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Add task function
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement('li');
        li.className = "flex justify-between items-center bg-gray-200 p-2 rounded";

        li.innerHTML = `
          <span>${taskText}</span>
          <button class="text-red-500 hover:text-red-700 deleteBtn">❌</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
      }
    });

    // Delete task function (Event Delegation)
    taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('deleteBtn')) {
        e.target.parentElement.remove();
      }
    });

    // (Optional) Press Enter to Add Task
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTaskBtn.click();
      }
    });