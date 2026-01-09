let num1 = '';
let num2 = '';
let operator = '';

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

function createButtons() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const commandsArray = ['+', '-', '+', '/', '=', 'clear'];

    const numbersDiv = document.getElementById('numbers');
    const commandsDiv = document.getElementById('commands');

    numbersArray.forEach(element => {
        let button = document.createElement('button');
        button.textContent = element;
        button.value = element;
        button.classList.add('number');
        numbersDiv.appendChild(button);
    });

    commandsArray.forEach(element => {
        let button = document.createElement('button');
        button.textContent = element;
        button.value = element;
        button.classList.add('command');
        commandsDiv.appendChild(button);
    })
}

createButtons()

// Create the functions that update one of your number variables when the calculator’s digit buttons are clicked. Your calculator’s display should also update to reflect the value of that number variable.

// colocar função separada ao invés de arrow?
// verificar classe antes de preencher constantes. (se number && num1 === '' ? num1 : num2)
// exibir valor no input id = result.

const buttons = document.querySelectorAll('button');

buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        const value = e.target.value;
        const classList = e.target.classList;

        if (value === 'clear') {
            num1 = num2 = operator = '';
            return;
        }
        if (classList.contains('number')) {
            num1 === '' ? num1 = value : num2 = value;
        } else {
            operator = value;
        }
    });
});
