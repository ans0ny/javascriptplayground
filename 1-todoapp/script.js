const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const todoItem = input.value;

    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    if (todoItem !== "") {
        listItem.textContent = todoItem;
        deleteButton.textContent = "Delete";

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
        input.value = "";

        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });

    } else {
        console.log("Please input an item.");
    }

    input.focus();

});