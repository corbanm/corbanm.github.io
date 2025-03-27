// make a new Tasks object to hold multiple tasks
var taskList = new Tasks;
var taskListDiv = document.getElementById("taskList");
// allows tasks to alternate their background color
var bgColor = 0;

// add example tasks. Remove this for final functionality
taskList.addTask("Get groceries", "Go to the store to get groceries");
taskList.addTask("Charge laptop", "Charge the laptop for work tomorrow");


// processes task completion given a task index
function completeTask(taskIndex) {
    // if task is not completed,
    if (!taskList.isCompleted(taskIndex)) {
        // set strikethrough styling on the task text indicating its completion
        document.getElementById('taskList').children[taskIndex].children[0].setAttribute('style', "text-decoration: line-through")
        document.getElementById('taskList').children[taskIndex].children[1].setAttribute('style', "text-decoration: line-through")
        // complete the task in the task list
        taskList.completeTask(taskIndex);
        // change button text to "uncomplete"
        document.getElementById('taskList').children[taskIndex].children[2].innerText = "Uncomplete"
    } else {
        // remove styling indicating task uncompleted
        document.getElementById('taskList').children[taskIndex].children[0].setAttribute('style', "")
        document.getElementById('taskList').children[taskIndex].children[1].setAttribute('style', "")
        // uncomplete task in the task list
        taskList.uncompleteTask(taskIndex);
        // change button text back to "complete"
        document.getElementById('taskList').children[taskIndex].children[2].innerText = "Complete"

    }
}

// add a task to the task list
function addTask() {
    // get the task name from user
    taskName = prompt("Enter task name:")
    // get the task description from user
    taskDescription = prompt("Enter description:")
    // add task to task list
    taskList.addTask(taskName, taskDescription);
    // update task representation on the display to reflect change
    updateTasks();
}

// update task description
function updateDesc(taskIndex) {
    // get description from user
    newDesc = prompt("New description:")
    // update task description
    taskList.updateDescription(newDesc, taskIndex);
    // update task representation on the display to reflect change
    updateTasks();
}

// delete a task
function deleteTask(taskIndex) {
    // delte the task from the task list
    taskList.deleteTask(taskIndex);
    // update task representation on the display to reflect change
    updateTasks();
}

// update task representation on the display
function updateTasks() {
    // reset bgColor for shading consistency
    bgColor = 0;
    // reset the task list html code 
    taskListDiv.innerHTML = "";
    // for each task in task list...
    for (var i = 0; i < taskList.tasks.length; i++) {
        // create the element in which the task information will reside
        var newLi = document.createElement("li");
        // set the li inner html to reflect the task information at index i
        newLi.innerHTML = `<h3>${taskList.getTask(i).name}</h3><h4>${taskList.getTask(i).description}`
        // set the class for formatting
        newLi.className = "task";
        // add a complete button
        var complete = document.createElement("button");
        complete.innerText = "Complete";
        // add an onclick attribute to run the complete task code when clicked
        complete.setAttribute('onclick', `completeTask(${i})`);
        // add complete button to the li
        newLi.appendChild(complete);
        // set the background color of task, alternating between shades of grey for readability
        if (bgColor == 0) {
            newLi.setAttribute("style", "background-color: #888888");
            bgColor = 1;
        } else {
            bgColor = 0;
        }
        // add update description button and accompanying code
        var updateDesc = document.createElement("button");
        updateDesc.innerText = "Update Description";
        updateDesc.setAttribute('onclick', `updateDesc(${i})`);
        newLi.appendChild(updateDesc);
        // add delete task button and accompanying code
        var deleteTask = document.createElement("button");
        deleteTask.innerText = "Delete";
        deleteTask.setAttribute('onclick', `deleteTask(${i})`);
        newLi.appendChild(deleteTask);
        // add task li to task list div on webpage
        taskListDiv.appendChild(newLi); 
    }
}

// initial update tasks to add example tasks to div. Can be removed if example tasks are removed.
updateTasks();