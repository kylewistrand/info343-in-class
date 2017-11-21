// @ts-check
"use strict";

//TODO: create classes for Task,
//TaskList, Button, TaskForm, and App.
//Each of these classes should have
//a render() method that renders their
//data as HTML elements.

class Task {
    constructor(title, done) {
        this.title = title;
        this.done = done;
    }

    render() {
        let li = document.createElement("li");
        li.textContent = this.title;
        if (this.done) li.classList.add("done");
        li.addEventListener("click", () => {
            this.done = !this.done;
            li.classList.toggle("done");
        });
        return li;
    }
}

class TaskList {
    constructor(tasks) {
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    purgeCompleted() {
        this.tasks = this.tasks.filter(task => !task.done);
    }

    render() {
        let ul = document.createElement("ul");
        this.tasks.forEach(task => {
            ul.appendChild(task.render());
        });
        return ul;
    }
}

class Button {
    constructor(caption, styleClass = "btn-primary") {
        this.caption = caption;
        this.styleClass = styleClass;
    }

    render() {
        let button = document.createElement("button");
        button.textContent = this.caption;
        button.classList.add("btn", this.styleClass);
        return button;
    }
}

class App {
    constructor(parentElem, taskList) {
        this.parentElem = parentElem;
        this.taskList = taskList;
        this.purgeButton = new Button("Puge Completed", "btn-danger");
    }

    render() {
        this.parentElem.textContent = "";
        this.parentElem.appendChild(this.taskList.render());
        let purge = this.parentElem.appendChild(this.purgeButton.render());
        purge.addEventListener("click", () => {
            this.taskList.purgeCompleted();
            this.render();
        })
    }
}

let taskList = new TaskList([
    new Task("Learn ES6 Festures"),
    new Task("Buy Dr. Stearns a Tesla"),
    new Task("Buy the iSchool a new building")
]);

let app = new App(document.querySelector("#app"), taskList);

app.render();