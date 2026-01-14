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
    console.log(value);

    if (value === commands.CLEAR) {
        currentValue = '';
        currentOperator = '';
        nextValue = '';
        nextOperator = '';
        display.textContent = '';
    }
}

const buttons = document.querySelectorAll('button');
[...buttons].forEach(element => {
    element.addEventListener('click', (e) => validate(e))
});