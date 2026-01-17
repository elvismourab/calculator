let currentValue = '';
let currentOperator = '';
let nextValue = '';
let nextOperator = '';
let result = ''

const validValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'Backspace']
const commands = {
    ADD: '+',
    SUBTRACT: '-',
    MULTIPLY: 'x',
    DIVIDE: '/',
    EQUALS: '=',
    AC: 'AC',
    ENTER: 'Enter',
    ALT_MULTIPLY: '*'
};

const display = document.getElementById('display');
const point = document.getElementById('.');
const backspace = document.getElementById('Backspace');

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
    if (Number(nextValue) === 0) {
        return null;
    }
    return (Number(currentValue) / Number(nextValue));
}

function operate() {
    result = ''
    switch (currentOperator) {
        case commands.ADD:
            result = sum();
            break;
        case commands.SUBTRACT:
            result = subtract();
            break;
        case commands.MULTIPLY:
        case commands.ALT_MULTIPLY:
            result = multiply();
            break;
        case commands.DIVIDE:
            result = divide();
            break;
        default:
            result = null;
    }

    if (result === null) {
        currentValue = '';
        currentOperator = '';
        nextValue = '';
        nextOperator = '';
        display.value = 'BEEP BOOP ERROR';
        return;
    }

    currentValue = result;

    if (nextOperator === commands.ADD || nextOperator === commands.SUBTRACT || nextOperator === commands.MULTIPLY || nextOperator === commands.DIVIDE || nextOperator === commands.EQUALS) {
        currentOperator = nextOperator;
    } else {
        currentOperator = '';
    }

    nextOperator = '';
    nextValue = '';

    display.value = Number(result.toFixed(2));
}

function handleBackspace() {
    if (display.value == currentValue) {
        str = String(currentValue).slice(0, -1);
        currentValue = display.value = str;
    } else if (display.value === nextValue) {
        str = nextValue.slice(0, -1);
        nextValue = display.value = str;
    }

    if (!str.includes('.')) {
        point.disabled = false;
    }
}

function validate(e) {
    const value = e.target.value;
    const type = e.target.classList;

    if (value === commands.AC) {
        currentValue = '';
        currentOperator = '';
        nextValue = '';
        nextOperator = '';
        display.value = '';
        point.disabled = false;
        return;
    }

    if (type.contains('number')) {
        if (e.target.id === '.') {
            point.disabled = true;
        }

        if (e.target.id === 'Backspace') {
            handleBackspace();
            return;
        }

        if (currentOperator === commands.EQUALS) {
            currentOperator = '';
            currentValue = value;
            display.value = currentValue;
        } else if (currentOperator === '') {
            currentValue += value;
            display.value = currentValue;
        } else {
            nextValue += value;
            display.value = nextValue;
        }
    }

    if (type.contains('command')) {
        if ((currentOperator === '' && nextValue === '') || currentOperator === commands.EQUALS) {
            currentOperator = value;
            point.disabled = false;
        } else if (currentOperator !== '' && nextValue === '') {
            nextValue = value;
        } else {
            nextOperator = value;
            operate();
        }
    }
}

const buttons = document.querySelectorAll('button');
[...buttons].forEach(element => {
    element.addEventListener('click', (e) => validate(e))
});

document.addEventListener('keydown', (e) => {

    const key = String(e.key);
    let validKey = false;
    if (Object.values(commands).includes(key)) {
        validKey = true;
        e.target.classList = 'command';
        if (['.', 'Backspace'].includes(key)) {
        }
    } else if (Object.values(validValues).includes(key)) {
        validKey = true;
        e.target.classList = 'number';
    }

    e.target.value = key === commands.ENTER ? commands.EQUALS : key;
    e.target.id = key;

    if (validKey === true) {
        validate(e);
    }
})
