/* import butAnimate from './animate'
import butTime from './animate' */

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const butAnimate = [
    {backgroundColor: 'black'},
    {backgroundColor: 'white'}
];

const butTime = {
    duration: 500,
    iterations: 1,
    fill: 'forwards'
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoItem(todoItem) {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    listItem.textContent = todoItem;

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        deleteButton.animate(butAnimate, butTime)
        .addEventListener("finish", () => {
            listItem.remove();
            // update the todos array and localStorage when a todo is deleted
            todos = todos.filter(item => item !== todoItem);
            saveTodos();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (todos.length !== 0) {
        todos.forEach(todo => {
            createTodoItem(todo);
        });
    }
});

button.addEventListener("click", (e) => {
    e.preventDefault();
    const todoItem = input.value;

    button.animate(butAnimate, butTime);

    if (todoItem !== "") {
        createTodoItem(todoItem);
        todos.push(todoItem);
        saveTodos();
        input.value = "";
    } else {
        console.log("Please input an item.");
    }

    input.focus();
});

const storageDeleteBtn = document.getElementById("delete-storage")

storageDeleteBtn.addEventListener("click", () => {
    storageDeleteBtn.animate(butAnimate, butTime);
    todos = [];
    localStorage.clear();
});