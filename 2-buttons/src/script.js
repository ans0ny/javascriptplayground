const body = document.querySelector('body');

const toggleColor = function() {
    switch (body.style.color) {
        case 'white':
            body.style.backgroundImage = 'var(--bg-img)';
            body.style.backgroundColor = 'white';
            body.style.color = 'var(--text-color-normal)';
            break;
        default:
            body.style.backgroundImage = 'none';
            body.style.backgroundColor = '#212121';
            body.style.color = 'white';
            break;
    }
}

const buttonActions = {
    changeColor: toggleColor,
    alert: () => {alert(`You clicked the alert button.`)},
}

let actionKeys = Object.keys(buttonActions);

for (let i = 0; i < actionKeys.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = "Button " + (i + 1);
    button.id = "btn-" + (i + 1); // assigning different ids
    button.onclick = buttonActions[actionKeys[i]];

    let btnList = document.getElementById("buttonslist");
    btnList.appendChild(button);
}