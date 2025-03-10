//TODO array
// const todoArray = [
//   {
//     todoName: "Get eggs",
//     priority: "Low", // Low | Medium | High
//     dueDate: "02/27/25",
//     description: "I have to buy more eggs at the store this week",
//   },
// ];

const rightContentSection = document.querySelector(".right-content-section");
const wholeApp = document.querySelector(".whole-app");
const createTaskBtn = document.createElement("button");
const allTasksPage = document.createElement("div");
const createTaskHeader = document.createElement("p");
const createTaskDisplay = document.createElement("div");
const userTaskCreatedDiv = document.createElement("div");
const userRenderTaskBtn = document.createElement("button");
const taskTitleDiv = document.createElement("input");
const usersDescriptionText = document.createElement("input");
const dueDateInput = document.createElement("input");
const tasksCreatedSection = document.createElement("div");
const lowPriorityBtn = document.createElement("button");
const mediumPriorityBtn = document.createElement("button");
const highPriorityBtn = document.createElement("button");
const functionalBtnsOfAddedTask = document.createElement("div");
const completeBtn = document.createElement("button");
const deleteBtn = document.createElement("button");
const addedTaskBtn = document.createElement("button");
const priorityOfTask = document.createElement("p");
const userTaskCreated = document.createElement("li");
const taskContainer = document.createElement("div");
const titleOfTask = document.createElement("p");
const descriptionOfTask = document.createElement("p");
const dateDueOfTask = document.createElement("p");
const completeAndDeleteButtonDiv = document.createElement("div");
const divForAddedTaskBtn = document.createElement("div");

// const mainPage = document.querySelector(".all-tasks-page");

let selectedPriority = "Low";

let arrayOfTasks = JSON.parse(localStorage.getItem("tasks")) || [
  {
    taskName: taskTitleDiv.value,
    description: usersDescriptionText.value,
    priority: selectedPriority.valueOf,
    dueDate: dueDateInput.value,
  },
];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

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
  allTasksPElement.textContent = "Task Pro";
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
  createTaskHeader.classList.add("create-task-header");
  createTaskHeader.innerText = "Create A Task";
  allTasksPage.append(createTaskHeader);

  // creating create a task display
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
  taskLi.textContent = "Tasks";
  taskList.appendChild(taskLi);

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
  usersDescriptionText.classList.add("users-description-div");
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

function resetButtonColor() {
  lowPriorityBtn.style.backgroundColor = "#f0f7d5";
  lowPriorityBtn.style.color = "green";

  mediumPriorityBtn.style.backgroundColor = "#ffcb6bc1";
  mediumPriorityBtn.style.color = "orange";

  highPriorityBtn.style.backgroundColor = "#fc54549c";
  highPriorityBtn.style.color = "red";
}

function addTask() {
  allTasksPage.innerHTML = "";
  console.log("Task Added!");

  // create div for the added task
  const createAddedTaskDiv = document.createElement("div");
  createAddedTaskDiv.classList.add("create-added-task-div");
  allTasksPage.append(createAddedTaskDiv);

  // create header for task created
  const taskAddedHeader = document.createElement("p");
  taskAddedHeader.classList.add("task-added-header");
  taskAddedHeader.textContent = "Task Added";
  createAddedTaskDiv.append(taskAddedHeader);

  // create users task created rendered div
  userTaskCreatedDiv.classList.add("user-task-created-div");
  createAddedTaskDiv.append(userTaskCreatedDiv);

  // the tasks need to be cleared before re-rendering
  userTaskCreatedDiv.innerHTML = "";

  arrayOfTasks.forEach((task, index) => {
    taskContainer.classList.add("task-container");

    userTaskCreated.classList.add("user-task-created");

    titleOfTask.classList.add("title-of-task");
    titleOfTask.textContent = `Title: ${task.taskName}`;

    descriptionOfTask.classList.add("description-of-task");
    descriptionOfTask.textContent = `Description: ${task.description}`;

    priorityOfTask.classList.add("priortiy-of-task");
    priorityOfTask.textContent = `Priority: ${task.priority}`;

    dateDueOfTask.classList.add("date-due-of-task");
    dateDueOfTask.textContent = `Due Date: ${task.dueDate}`;

    // functionalBtnsOfAddedTask.classList.add("functional-btns-of-added-task");
    // userTaskCreated.append(functionalBtnsOfAddedTask);
    completeAndDeleteButtonDiv.classList.add("comp-and-del-btn-div");
    completeBtn.classList.add("complete-button");
    completeBtn.textContent = "Done";
    // functionalBtnsOfAddedTask.append(completeBtn);

    deleteBtn.classList.add("delete-button");
    deleteBtn.textContent = "Delete";
    // deleteBtn.addEventListener("click", function () {
    //   arrayOfTasks.splice(index, 1);
    //   saveTasks();
    //   addTask();
    // });

    // functionalBtnsOfAddedTask.append(deleteBtn);
  });

  taskContainer.append(
    titleOfTask,
    descriptionOfTask,
    priorityOfTask,
    dateDueOfTask,
    completeAndDeleteButtonDiv
  );

  completeAndDeleteButtonDiv.append(completeBtn, deleteBtn);

  userTaskCreatedDiv.append(taskContainer);
  // create div for added task button
  divForAddedTaskBtn.classList.add("div-for-added-task-btn");
  userTaskCreatedDiv.append(divForAddedTaskBtn);

  // create button for adding another task to the mix
  addedTaskBtn.classList.add("added-task-btn");
  addedTaskBtn.textContent = "Add another task";
  divForAddedTaskBtn.append(addedTaskBtn);
  saveTasks();
}

// EVENT LISTENERS
createTaskBtn.addEventListener("click", function () {
  allTasksPage.innerText = "";
  displayCreateTask();
});

addedTaskBtn.addEventListener("click", function () {
  allTasksPage.innerText = "";
  displayCreateTask();
  createTaskDisplay.innerText = "";
  createTaskHeader.innerText = "";
  displayCreateTask();
  resetButtonColor();
  taskTitleDiv.value = "";
  // usersDescriptionText.value = "";
  // dueDateInput.value = "";
  // priorityOfTask.value = "";
});

// EVENT LISTENERS FOR THE PRIORITY BUTTONS
lowPriorityBtn.addEventListener("click", function () {
  resetButtonColor();
  selectedPriority = "Low";
  lowPriorityBtn.style.backgroundColor = "rgba(71, 152, 71, 0.755)";
  lowPriorityBtn.style.color = "white";
  console.log("Priority is set to Low");
});

mediumPriorityBtn.addEventListener("click", function () {
  resetButtonColor();
  selectedPriority = "Medium";
  mediumPriorityBtn.style.backgroundColor = "orange";
  mediumPriorityBtn.style.color = "white";
  console.log("Priority is set to Medium");
});

highPriorityBtn.addEventListener("click", function () {
  resetButtonColor();
  selectedPriority = "High";
  highPriorityBtn.style.backgroundColor = "red";
  highPriorityBtn.style.color = "white";
  console.log("Priority is set to High");
});

userRenderTaskBtn.addEventListener("click", function () {
  if (!taskTitleDiv.value.trim()) {
    alert("Please enter a task title.");
    return;
  }
  console.log(taskTitleDiv.value);
  const taskItem = {
    taskName: taskTitleDiv.value,
    description: document.querySelector(".users-description-div").value,
    priority: selectedPriority,
    dueDate: document.querySelector(".due-date-input").value,
  };

  arrayOfTasks.push(taskItem);
  saveTasks();
  addTask();

  taskTitleDiv.value = "";
  descriptionOfTask.value = "";
  dueDateInput.value = "";
});

completeBtn.addEventListener("click", function (event) {
  const taskItem = event.target.closest(".task-container"); // Get the task container
  if (taskItem) {
    // Select all text elements inside the task container (excluding buttons)
    taskItem.querySelectorAll("p").forEach((textElement) => {
      textElement.style.textDecoration =
        textElement.style.textDecoration === "line-through"
          ? "none"
          : "line-through";
    });
  }
});

// will need to make the specific delete button targeted
deleteBtn.addEventListener("click", function () {
  taskContainer.innerHTML = "";
});
// next step - figure out how to get the input from the users input div into the tasksCreatedSection
