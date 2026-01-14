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

function operate() {
    return '';
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
