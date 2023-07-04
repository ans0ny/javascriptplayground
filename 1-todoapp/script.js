/* import butAnimate from './animate'
import butTime from './animate' */

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const butAnimate = [
    {backgroundColor: 'black'},
    {backgroundColor: 'white'}
];

const butTime = {
    duration: 500,
    iterations: 1,
    fill: 'forwards'
}


button.addEventListener("click", (e) => {
    e.preventDefault();
    const todoItem = input.value;

    button.animate(butAnimate, butTime);

    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    if (todoItem !== "") {
        listItem.textContent = todoItem;
        deleteButton.textContent = "Delete";

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
        input.value = "";

        deleteButton.addEventListener("click", () => {
            deleteButton.animate(butAnimate, butTime)
            .addEventListener("finish", () => {
                listItem.remove();
            });
        });

    } else {
        console.log("Please input an item.");
    }

    input.focus();

});