let currentValue = '';
let currentOperator = '';
let nextValue = '';
let nextOperator = '';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const commands = {
    ADD: '+',
    SUBTRACT: '-',
    MULTIPLY: 'x',
    DIVIDE: '/',
    EQUALS: '=',
    CLEAR: 'CLEAR',
};

const display = document.getElementById('display');

function sum() {
    return (Number(currentValue) + Number(nextValue));
}

function subtract() {
    return (Number(currentValue) - Number(nextValue));
}

function multiply() {
    return (Number(currentValue) * Number(nextValue));
}

function divide() {
    return (Number(currentValue) / Number(nextValue));
}

function operate() {
    let result = ''
    switch (currentOperator) {
        case commands.ADD:
            result = sum();
            break;
        case commands.SUBTRACT:
            result = subtract();
            break;
        case commands.MULTIPLY:
            result = multiply();
            break;
        case commands.DIVIDE:
            result = divide();
            break;
    }

    currentValue = result;
    if (nextOperator === commands.ADD || nextOperator === commands.SUBTRACT || nextOperator === commands.MULTIPLY || nextOperator === commands.DIVIDE) {
        console.log('this');
        currentOperator = nextOperator;
    }
    nextOperator = '';
    nextValue = '';

    console.log(result);
}

function validate(e) {
    const value = e.target.value;
    const type = e.target.classList;

    if (value === commands.CLEAR) {
        currentValue = '';
        currentOperator = '';
        nextValue = '';
        nextOperator = '';
        display.textContent = '';
        return;
    }

    if (type.contains('number')) {
        if (currentOperator === '') {
            currentValue += value;
        } else {
            nextValue += value;
        }
    }

    if (type.contains('command')) {
        if (currentOperator === '') {
            currentOperator = value;
        } else {
            nextOperator = value;
            operate();
        }

        // RETORNA (valor, tipo) ???
        return;
    }
}

const buttons = document.querySelectorAll('button');
[...buttons].forEach(element => {
    element.addEventListener('click', (e) => validate(e))
});
