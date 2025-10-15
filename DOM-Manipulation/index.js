const title = document.createElement("h1");
title.id = "title";
title.innerText = "To Do by Lois using DOM Manipulation";

const div1 = document.createElement("div");
div1.id = "div-inputs";

const div2 = document.createElement("div");
div2.id = "div-insert";

const inputItem = document.createElement("input");
inputItem.id = "input-task";
inputItem.type = "text";
inputItem.placeholder = "Add a task here";

const addButton = document.createElement("button");
addButton.id = "Button";
addButton.innerText = "Add Task";

const taskList = document.createElement("ul");
taskList.id = "task-list";

const taskContainer = document.createElement("div");
taskContainer.className = "task-container";

taskContainer.appendChild(taskList); // put the tasks inside this container


const mainDiv = document.getElementById("to-do");

// Build structure
mainDiv.appendChild(title);
mainDiv.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(inputItem);
div2.appendChild(addButton);        // input + buttons
div1.appendChild(taskContainer); // scrollable task area


// Add new task
addButton.addEventListener("click", function () {
  const inputValue = inputItem.value.trim();
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  // Create <li> element
  const task = document.createElement("li");
  task.textContent = inputValue;

  // Create × button
  const span = document.createElement("span");
  span.className = "close";
  span.textContent = "\u00D7"; // Unicode ×
  task.appendChild(span);

  // Add to list
  taskList.appendChild(task);

  // Save updated list
  saveTasks();

  // Reset input
  inputItem.value = "";

  // Handle remove
  span.onclick = function () {
    removeTask(task);
  };
});

// Load tasks when page starts
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((taskText) => {
    const task = document.createElement("li");
    task.textContent = taskText;

    const span = document.createElement("span");
    span.className = "close";
    span.textContent = "\u00D7";
    task.appendChild(span);

    taskList.appendChild(task);

    span.onclick = function () {
      removeTask(task);
    };
  });
};

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  const items = document.querySelectorAll("#task-list li");
  items.forEach((item) => {
    const taskText = item.textContent.replace("×", "").trim();
    tasks.push(taskText);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove a specific task
function removeTask(taskElement) {
  const taskText = taskElement.textContent.replace("×", "").trim();

  // Remove from DOM
  taskElement.remove();

  // Update localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((t) => t !== taskText); // Remove only the clicked one
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


// assignment: to create a timer that adds tasks from an array to the list every 5 seconds
const startAutoTasks = document.createElement("button");
startAutoTasks.id = "start-auto-tasks";
startAutoTasks.innerText = "Auto Tasks";
div2.appendChild(startAutoTasks);
startAutoTasks.addEventListener("click", function () {
  startAutoTasks.disabled = true; // Prevent multiple clicks
  autoAddTasks();
});

function autoAddTasks() { 
const Tasks = [
  "Go grocery shopping",
  "Finish the report",
"Read a book",
  "Exercise for 30 minutes",
  "Call a friend",
  "Plan the weekend trip",
  "Clean the house",
  "Prepare dinner",
  "Write in journal",
  "Meditate for 10 minutes"
];

for (let i = 0; i < Tasks.length; i++) {
  setTimeout(() => {
    const taskText = Tasks[i];
    const task = document.createElement("li");
    task.textContent = taskText;  
    const span = document.createElement("span");
    span.className = "close";
    span.textContent = "\u00D7"; 
    task.appendChild(span);
    taskList.appendChild(task);
    saveTasks();
    span.onclick = function () {
      removeTask(task);
    };
  }, i * 5000); 
}
}
