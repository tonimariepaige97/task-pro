//TODO array
const todoArray = [
  {
    todoName: "Get eggs",
    priority: "Low", // Low | Medium | High
    dueDate: "02/27/25",
    description: "I have to buy more eggs at the store this week",
  },
];

const rightContentSection = document.querySelector(".right-content-section");
const wholeApp = document.querySelector(".whole-app");
const createTaskBtn = document.createElement("button");
const allTasksPage = document.createElement("div");
const userRenderTaskBtn = document.createElement("button");
const taskTitleDiv = document.createElement("input");
const tasksCreatedSection = document.createElement("div");
const lowPriorityBtn = document.createElement("button");
const mediumPriorityBtn = document.createElement("button");
const highPriorityBtn = document.createElement("button");

const arrayOfTasks = [];

function displayAllTasksPage() {
  // create an all tasks page for the task page
  allTasksPage.classList.add("all-tasks-page");
  rightContentSection.append(allTasksPage);

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
  createYourTaskHeader.textContent = "Create A New Task";
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

  //creating a div for button and input
  const divForUserTextInput = document.createElement("div");
  divForUserTextInput.classList.add("div-for-user-text-input");
  divForUserTextInput.textContent = "Title";
  usersInputDiv.append(divForUserTextInput);

  // create title div for the task title
  taskTitleDiv.classList.add("task-title-div");
  taskTitleDiv.placeholder = "Enter Title";
  divForUserTextInput.append(taskTitleDiv);

  // create description div for users description
  const divForDescriptionInput = document.createElement("div");
  divForDescriptionInput.classList.add("description-input-div");
  divForDescriptionInput.textContent = "Description";
  usersInputDiv.append(divForDescriptionInput);

  // create input for description text
  const usersDescriptionText = document.createElement("input");
  usersDescriptionText.classList.add("task-title-div");
  usersDescriptionText.placeholder = "Enter Description";
  divForDescriptionInput.append(usersDescriptionText);

  // add priority div for users priority pick
  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("priority-container");
  priorityContainer.textContent = "Priority";
  usersInputDiv.append(priorityContainer);

  // create button div for priority buttons
  const priorityBtns = document.createElement("div");
  priorityBtns.classList.add("priority-btns");
  priorityContainer.append(priorityBtns);

  // add low priority button
  lowPriorityBtn.classList.add("low-priority-btn");
  lowPriorityBtn.textContent = "LOW";
  priorityBtns.append(lowPriorityBtn);

  // add a medium priority button
  mediumPriorityBtn.classList.add("medium-priority-btn");
  mediumPriorityBtn.textContent = "MEDIUM";
  priorityBtns.append(mediumPriorityBtn);

  // add a high priority button
  highPriorityBtn.classList.add("high-priority-btn");
  highPriorityBtn.textContent = "HIGH";
  priorityBtns.append(highPriorityBtn);

  // create a div for the due date
  const dueDateDiv = document.createElement("div");
  dueDateDiv.classList.add("due-date-div");
  dueDateDiv.innerHTML = "<strong>Due Date:</strong>";
  usersInputDiv.append(dueDateDiv);

  // where the due date input is added
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.classList.add("due-date-input");
  dueDateDiv.append(dueDateInput);

  // creating a div for the render button
  const renderBtnDiv = document.createElement("div");
  renderBtnDiv.classList.add("render-button-div");
  usersInputDiv.append(renderBtnDiv);

  // creating a create task button
  userRenderTaskBtn.classList.add("user-render-task-btn");
  userRenderTaskBtn.textContent = "Create Task";
  renderBtnDiv.append(userRenderTaskBtn);
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

// userRenderTaskBtn.addEventListener("click", function () {
//   console.log(taskTitleDiv.value);
//   const taskItem = {
//     taskName: taskTitleDiv.value,
//     status: "In progress",
//   };
//   arrayOfTasks.push(taskItem);
//   updateTasks(taskTitleDiv.value);
//   console.log(arrayOfTasks);
// });

// next step - figure out how to get the input from the users input div into the tasksCreatedSection
