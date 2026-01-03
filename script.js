let num1 = 0;
let num2 = 0;
let operator = '+';

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case '+': result = add(num1, num2);
            break;
        case '-': result = subtract(num1, num2);
            break;
        case '*': result = multiply(num1, num2);
            break;
        case '/': result = divide(num1, num2);
            break
    }

    return result;
}

function createNumbers() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const numbersDiv = document.getElementById('numbers');

    numbersArray.forEach(element => {
        let button = document.createElement('button');
        button.textContent = element;
        numbersDiv.appendChild(button);
    });
}

function createCommands() {
    const commandsArray = ['+', '-', '+', '/', '=', 'clear'];
    const commandsDiv = document.getElementById('commands');

    commandsArray.forEach(element => {
        let button = document.createElement('button');
        button.textContent = element;
        commandsDiv.appendChild(button);
    })
}

createNumbers();
createCommands();
