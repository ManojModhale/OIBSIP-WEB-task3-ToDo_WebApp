
const taskInput = document.getElementById("taskInput");
const descriptionInput = document.getElementById("descriptionInput");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (taskInput.value === '') {
        alert("You must write a task");
    } 
    else 
    {
        const li = document.createElement("li");

        // Task Name
        const taskName = document.createElement("span");
        taskName.className = "taskName";
        taskName.textContent = taskInput.value;
        li.appendChild(taskName);

        // Timestamp
        const timestamp = document.createElement("span");
        timestamp.className = "timestamp";
        timestamp.textContent = getCurrentDateTime();
        li.appendChild(timestamp);

        // Description
        const description = document.createElement("span");
        description.textContent = descriptionInput.value;
        li.appendChild(description);

        // Delete Button
        const deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "\u00d7";
        deleteBtn.className = "delete-btn";
        li.appendChild(deleteBtn);

        li.addEventListener("click", function (e) {
            handleTaskClick(li, e);
        });

        listContainer.appendChild(li);
    }
    taskInput.value = '';
    descriptionInput.value = '';
    saveData();
}


function getCurrentDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}


function handleTaskClick(task, event) {
    const deleteBtn = task.querySelector(".delete-btn");

    if (event.target === deleteBtn) {
        task.remove();
        saveData();
    } else {
        task.classList.toggle("checked");
        saveData();
    }
}

function saveData() {
    localStorage.setItem("taskList", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("taskList");
}

showTasks();

//localStorage.clear();