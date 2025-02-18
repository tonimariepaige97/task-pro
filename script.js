const rightContentSection = document.querySelector(".right-content-section");
const wholeApp = document.querySelector(".whole-app");
const createTaskBtn = document.createElement("button");
const allTasksPage = document.createElement("div");
const userCreateTaskBtn = document.createElement("button");
const taskTitleDiv = document.createElement("input");
const tasksCreatedSection = document.createElement("div");

const arrayOfTasks = [];

function displayAllTasksPage() {
  // create an all tasks page for the task page
  allTasksPage.classList.add("all-tasks-page");
  rightContentSection.append(allTasksPage);

  // create the container for the search bar display
  // const searchBarContainer = document.createElement("div");
  // searchBarContainer.classList.add("search-bar-container");
  // allTasksPage.append(searchBarContainer);

  // create the input for the search bar
  // const searchBarDisplay = document.createElement("input");
  // searchBarDisplay.classList.add("search-bar-display");
  // searchBarDisplay.setAttribute("type", "text");
  // searchBarDisplay.setAttribute("Placeholder", "search");
  // allTasksPage.append(searchBarDisplay);

  // create the task container
  const createTaskContainer = document.createElement("div");
  createTaskContainer.classList.add("create-task-container");
  allTasksPage.append(createTaskContainer);

  // create the task section
  const createTaskSection = document.createElement("div");
  createTaskSection.classList.add("create-task-section");
  createTaskContainer.append(createTaskSection);

  // create all tasks p element
  const allTasksPElement = document.createElement("p");
  allTasksPElement.classList.add("all-tasks-p-element");
  allTasksPElement.textContent = "All Tasks";
  createTaskSection.append(allTasksPElement);

  // create a container for the buttons
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");
  createTaskSection.append(buttonsContainer);

  // create add task button
  createTaskBtn.classList.add("create-task-button");
  createTaskBtn.textContent = "+ Create Task";
  buttonsContainer.append(createTaskBtn);

  // create power mode button
  const powerModeButton = document.createElement("button");
  powerModeButton.classList.add("power-mode-button");
  powerModeButton.textContent = "Power Mode";
  buttonsContainer.append(powerModeButton);
}
displayAllTasksPage();

function displayCreateTask() {
  // creating the create a task header
  const createTaskHeader = document.createElement("p");
  createTaskHeader.classList.add("create-task-header");
  createTaskHeader.innerText = "Create A Task";
  allTasksPage.append(createTaskHeader);

  // creating create a task display
  const createTaskDisplay = document.createElement("div");
  createTaskDisplay.classList.add("create-task-display");
  allTasksPage.append(createTaskDisplay);

  // create div for left side of inside the create a task display
  const createInsideDisplayDiv = document.createElement("div");
  createInsideDisplayDiv.classList.add("create-inside-display-div");
  createTaskDisplay.append(createInsideDisplayDiv);

  // create task header
  const createYourTaskHeader = document.createElement("div");
  createYourTaskHeader.classList.add("create-your-task-header");
  createYourTaskHeader.textContent = "Create Your Task";
  createInsideDisplayDiv.append(createYourTaskHeader);

  // create div for creating which task to select
  const createTaskListDiv = document.createElement("div");
  createTaskListDiv.classList.add("create-task-list-div");
  createInsideDisplayDiv.append(createTaskListDiv);

  // create list that goes underneath task header
  const taskList = document.createElement("li");
  taskList.classList.add("task-list");
  createTaskListDiv.append(taskList);

  const taskLi = document.createElement("li");
  taskLi.classList.add("task-li");
  taskLi.textContent = "Task";
  taskList.appendChild(taskLi);

  const projectTask = document.createElement("li");
  projectTask.classList.add("project-task");
  projectTask.textContent = "Project";
  taskList.appendChild(projectTask);

  const notesTask = document.createElement("li");
  notesTask.classList.add("notes-task");
  notesTask.textContent = "Notes";
  taskList.appendChild(notesTask);

  // create div for the users input for their task
  const usersInputDiv = document.createElement("div");
  usersInputDiv.classList.add("users-input-div");
  createTaskDisplay.append(usersInputDiv);

  // create title div for the task title
  taskTitleDiv.classList.add("task-title-div");
  usersInputDiv.append(taskTitleDiv);

  // creating a create task button
  userCreateTaskBtn.classList.add(".userCreateTaskBtn");
  userCreateTaskBtn.textContent = "Create Task";
  usersInputDiv.append(userCreateTaskBtn);

  // creating a div for the users tasks
  tasksCreatedSection.classList.add("tasks-created-section");
  usersInputDiv.append(tasksCreatedSection);
}

function updateTasks() {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    const taskItem = document.createElement("div");
    taskItem.textContent = taskTitleDiv.value;
    taskTitleDiv.value = "";
    tasksCreatedSection.append(taskItem);
  }
}
// EVENT LISTENERS
createTaskBtn.addEventListener("click", function () {
  allTasksPage.innerText = "";
  displayCreateTask();
});

userCreateTaskBtn.addEventListener("click", function () {
  console.log(taskTitleDiv.value);
  const taskItem = {
    taskName: taskTitleDiv.value,
    status: "In progress",
  };
  arrayOfTasks.push(taskItem);
  updateTasks(taskTitleDiv.value);
  console.log(arrayOfTasks);
});

// next step - figure out how to get the input from the users input div into the tasksCreatedSection
