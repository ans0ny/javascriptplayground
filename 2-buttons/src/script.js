for (let i = 0; i < 10; i++) {
    let button = document.createElement("button");
    button.innerHTML = "Button " + (i + 1);
    button.id = "btn-" + (i + 1); // assigning different ids
    button.onclick = function() {
        alert("Button " + (i + 1) + " clicked");
    };

    let main = document.querySelector("main");
    main.appendChild(button);
}
