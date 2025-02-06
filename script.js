const createTaskBtn = document.querySelector(".create-task-btn");
const powerModeBtn = document.querySelector(".power-mode-btn");
const creationOfTask = document.querySelector(".right-section-of-screen");

// EVENT LISTENERS
createTaskBtn.addEventListener("click", function () {
  creationOfTask.innerHTML = "";
});
