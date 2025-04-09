const tasks = [];

let time = 0;
let timer = null;
let timeBreak = null;
let current = null;

const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");
const taskName = document.querySelector("#time #taskName");

renderTasks();
renderTime();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (itTask.value !== "") {
    createTask(itTask.value);
    itTask.value = "";
    renderTasks();
  }
});

function createTask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    completed: false,
  };

  tasks.unshift(newTask);
}

function renderTasks() {
  const html = tasks.map((task) => {
    return `
      <div class="task flex flex-row items-center gap-1  p-2">
        <div class="completed">
          ${
            task.completed
              ? '<span class="bg-green-500 border-2 rounded-lg text-sm p-2">done</span>'
              : `<button class="start-button bg-black text-sm rounded-lg cursor-pointer border-gray-600 border-2 text-amber-50 p-2 hover:bg-gray-600 hover:border-black hover:text-black transition-all duration-100" data-id="${task.id}" >Start</button>`
          }
        </div>
        <div class="text-2xl">${task.title}</div>
      </div>
    `;
  });

  const tasksContainer = document.querySelector("#tasks");

  tasksContainer.innerHTML = html.join("");

  if (tasks.length > 0) {
    tasksContainer.classList.add("border-2", "rounded-2xl", "bg-blue-400");
  } else {
    tasksContainer.classList.remove("border-2", "rounded-2xl", "bg-blue-400");
  }

  const startButtons = document.querySelectorAll(".task .start-button");

  startButtons.forEach((startButton) => {
    startButton.addEventListener("click", () => {
      if (!timer) {
        startButtonHandler(startButton.getAttribute("data-id"));
        startButton.textContent = "In progress...";
      }
    });
  });
}

function startButtonHandler(id) {
  time = 0.5 * 60;
  current = id;
  const taskId = tasks.findIndex((task) => task.id === id);
  document.querySelector("#time #taskName").textContent = tasks[taskId].title;
  timer = setInterval(() => {
    timeHandler(id);
  }, 1000);
}

function timeHandler(id) {
  time--;
  renderTime();

  if (time == 0) {
    clearInterval(timer);
    markCompleted(id);
    renderTasks();
    startBreak();
  }
}

function startBreak() {
  time = 5 * 60;
  taskName.textContent = "Break";
  timeBreak = setInterval(() => {
    timerBreakHandler();
  }, 1000);
}

function timerBreakHandler() {
  time--;
  renderTime();

  if (time == 0) {
    clearInterval(timeBreak);
    current = null;
    taskName.textContent = "";
    renderTasks();
    startBreak();
  }
}

function renderTime() {
  const timeDiv = document.querySelector("#time #value");
  const minutes = parseInt(time / 60);
  const seconds = parseInt(time % 60);

  timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function markCompleted(id) {
  const taskIndex = tasks.findIndex((task) => task.id == id);
  tasks[taskIndex].completed = true;
}
