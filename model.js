class Task {
    constructor(description, category) {
        this.description = description;
        this.category = category;
    }
}

class TaskModel {
    constructor() {
        if (!TaskModel.instance) {
            this.tasks = [];
            TaskModel.instance = this;
        }
        return TaskModel.instance;
    }

    addTask(description, category) {
        const newTask = new Task(description, category);
        this.tasks.push(newTask);
        return newTask;
    }

    getTasks() {
        return this.tasks;
    }
}

const taskModel = new TaskModel();