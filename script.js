const createTaskBtn = document.querySelector(".create-task-btn");
const powerModeBtn = document.querySelector(".power-mode-btn");
const creationOfTask = document.querySelector(".right-section-of-screen");

function displayCreateTaskSection() {
  // Create header for create task section
  const createTaskHeader = document.createElement("p");
  createTaskHeader.classList.add("create-task-header");
  createTaskHeader.textContent = "Create a Task";
  creationOfTask.append(createTaskHeader);

  // Create background for create task section
  const createTaskDiv = document.createElement("div");
  createTaskDiv.classList.add("create-task-div");
  creationOfTask.append(createTaskDiv);
}

// EVENT LISTENERS
createTaskBtn.addEventListener("click", function () {
  creationOfTask.innerText = "";
  displayCreateTaskSection();
});
