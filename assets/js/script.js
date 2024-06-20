// Extend Day.js with isSameOrAfter plugin
dayjs.extend(dayjs_plugin_isSameOrAfter);

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Todo: create a function to generate a unique task id
function generateTaskId() {
  return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  let taskCard = $(`<div class="task-card" data-id="${task.id}">
    <div class="task-title">${task.title}</div>
    <div class="task-desc">${task.description}</div>
    <div class="task-deadline">Deadline: ${task.deadline}</div>
    <button class="btn btn-danger btn-sm delete-btn">Delete</button>
  </div>`);

  let deadline = dayjs(task.deadline);
  if (dayjs().isAfter(deadline)) {
    taskCard.addClass("task-overdue");
  } else if (dayjs().isSameOrAfter(deadline.subtract(2, "day"))) {
    taskCard.addClass("task-near-deadline");
  }

  taskCard.find(".delete-btn").on("click", handleDeleteTask);
  return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  $("#todo-cards, #in-progress-cards, #done-cards").empty();

  taskList.forEach((task) => {
    let taskCard = createTaskCard(task);
    if (task.status === "todo") {
      $("#todo-cards").append(taskCard);
    } else if (task.status === "in-progress") {
      $("#in-progress-cards").append(taskCard);
    } else if (task.status === "done") {
      $("#done-cards").append(taskCard);
    }
  });

  $(".task-card").draggable({
    revert: "invalid",
    stack: ".task-card",
  });

  $(".lane .card-body").droppable({
    accept: ".task-card",
    drop: handleDrop,
  });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();
  let title = $("#task-title").val();
  let description = $("#task-desc").val();
  let deadline = $("#task-deadline").val();

  console.log("Adding task:", { title, description, deadline });

  let task = {
    id: generateTaskId(),
    title,
    description,
    deadline,
    status: "todo",
  };

  taskList.push(task);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  localStorage.setItem("nextId", nextId);

  $("#task-form")[0].reset();
  $("#formModal").modal("hide");
  renderTaskList();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
  let taskId = $(event.target).closest(".task-card").data("id");
  taskList = taskList.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  let taskId = ui.helper.data("id");
  let newStatus = $(this).closest(".lane").attr("id").replace("-cards", "");

  let task = taskList.find((task) => task.id === taskId);
  task.status = newStatus;

  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $("#task-form").on("submit", handleAddTask);

  renderTaskList();
  $("#task-deadline").datepicker({ dateFormat: "yy-mm-dd" });
});
