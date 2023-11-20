let displayValue = '';
let darkMode = false;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function toggleMode() {
    darkMode = !darkMode;
    updateMode();
}

function updateMode() {
    const body = document.body;
    const calculator = document.getElementById('calculator');
    const display = document.getElementById('display');
    const modeToggle = document.getElementById('modeToggle');

    if (darkMode) {
        body.style.background = '#333';
        calculator.style.background = '#444';
        display.style.background = '#222';
        display.style.color = '#fff';
        modeToggle.style.background = '#222';
        modeToggle.style.color = '#fff';
    } else {
        body.style.background = '#f0f0f0';
        calculator.style.background = '#e0e0e0';
        display.style.background = '#d0d0d0';
        display.style.color = '#333';
        modeToggle.style.background = '#d0d0d0';
        modeToggle.style.color = '#333';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (/[0-9]/.test(key)) {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === ' ') {
        toggleMode();
    }
});