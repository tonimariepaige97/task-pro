const rightContentSection = document.querySelector(".right-content-section");
const wholeApp = document.querySelector(".whole-app");
const createTaskBtn = document.createElement("button");
const allTasksPage = document.createElement("div");

function displayAllTasksPage() {
  // create an all tasks page for the task page
  allTasksPage.classList.add("all-tasks-page");
  rightContentSection.append(allTasksPage);

  // create the container for the search bar display
  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-bar-container");
  allTasksPage.append(searchBarContainer);

  // create the input for the search bar
  const searchBarDisplay = document.createElement("input");
  searchBarDisplay.classList.add("search-bar-display");
  searchBarDisplay.setAttribute("type", "text");
  searchBarDisplay.setAttribute("Placeholder", "search");
  allTasksPage.append(searchBarDisplay);

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

  // create div inside of create a task display
  const createInsideDisplayDiv = document.createElement("div");
  createInsideDisplayDiv.classList.add("create-inside-display-div");
  createTaskDisplay.append(createInsideDisplayDiv);

  //
  const createYourTaskHeader = document.createElement("div");
  createYourTaskHeader.classList.add("create-your-task-header");
  createYourTaskHeader.textContent = "Create Your Task";
  createInsideDisplayDiv.append(createYourTaskHeader);
}

// EVENT LISTENERS

createTaskBtn.addEventListener("click", function () {
  allTasksPage.innerText = "";
  displayCreateTask();
});
