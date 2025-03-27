
// This class holds each individual task.
class Task {
    // this constructor initializes an individual task and its properties
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.completed = false;
    }
    // completes the task setter function
    complete() {
        this.completed = true;
    }
    // task complete getter function
    completed() {
        return this.completed;
    }
    // uncomplete setter function
    uncomplete() {
        this.completed = false;
    }
    // update description setter function
    updateDescription(newDesc) {
        this.description = newDesc;
    }
}

// this class holds the tasks and handles processing of tasks
class Tasks {
    // constructor initializes an empty array of tasks
    constructor() {
        this.tasks = [];
    }
    // allows user to add task to array
    addTask(taskName, description) {
        var newTask = new Task(taskName, description);
        this.tasks.push(newTask);
    }
    // gets task at index i
    getTask(i) {
        return this.tasks[i]
    }
    // competes task at index i
    completeTask(i) {
        this.tasks[i].complete();
    }
    // getter function for task completed at index i
    isCompleted(i) {
        return this.tasks[i].completed;
    }
    // uncompletes task at index i
    uncompleteTask(i) {
        this.tasks[i].uncomplete();
    }
    // updates description of task at index i
    updateDescription(newDesc, i) {
        this.tasks[i].updateDescription(newDesc);
    }
    // deletes task at index i
    deleteTask(i) {
        // remove 1 item from the array at index i
        this.tasks.splice(i, 1);
    }
}

