let num1 = '';
let num2 = '';
let operator = '';

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case '+': result = add(num1, num2);
            break;
        case '-': result = subtract(num1, num2);
            break;
        case 'x': result = multiply(num1, num2);
            break;
        case '/': result = divide(num1, num2);
            break
    }

    return result;
}

function createButtons() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const commandsArray = ['+', '-', 'x', '/', '=', 'clear'];

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

function attributeEvents() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(element => {
        element.addEventListener('click', (e) => {
            const value = e.target.value;
            const classList = e.target.classList;
            const inputField = document.getElementById('inputField');

            if (value === 'clear') {
                num1 = num2 = operator = inputField.value = '';
                return;
            }

            if (value === '=') {
                num1 = operate(num1, num2, operator);
                inputField.value = num1;
                num2 = operator = '';
                return;
            }

            if (classList.contains('command')) {
                operator = value;
            }

            if (classList.contains('number') && operator === '') {
                num1 += value;
            }

            if (classList.contains('number') && num1 !== '' && operator !== '') {
                num2 += value;
            }

            inputField.value += value;

        });
    });
}

createButtons();
attributeEvents();
