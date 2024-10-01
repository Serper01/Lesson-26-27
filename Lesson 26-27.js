let displayValue = '0';
let firstValue = null;
let secondValue = null;
let operator = null;
let waitingForSecondValue = false;

const display = document.getElementById('display');

function updateDisplay() {
  display.textContent = displayValue;
}

document.querySelector('.buttons').addEventListener('click', (event) => {
  const element = event.target;
  
  if (!element.classList.contains('btn')) return;
  
  const value = element.textContent;

  if (element.id === 'clear') {
    displayValue = '0';
    firstValue = null;
    secondValue = null;
    operator = null;
    waitingForSecondValue = false;
  } else if (element.id === 'plus-minus') {
    displayValue = (parseFloat(displayValue) * -1).toString();
  } else if (element.id === 'percent') {
    displayValue = (parseFloat(displayValue) / 100).toString();
  } else if (['add', 'subtract', 'multiply', 'divide'].includes(element.id)) {
    operator = element.id;
    firstValue = parseFloat(displayValue);
    waitingForSecondValue = true;
  } else if (element.id === 'equals') {
    secondValue = parseFloat(displayValue);
    if (operator === 'add') {
      displayValue = (firstValue + secondValue).toString();
    } else if (operator === 'subtract') {
      displayValue = (firstValue - secondValue).toString();
    } else if (operator === 'multiply') {
      displayValue = (firstValue * secondValue).toString();
    } else if (operator === 'divide') {
      displayValue = (firstValue / secondValue).toString();
    }
    operator = null;
    waitingForSecondValue = false;
  } else if (waitingForSecondValue) {
    displayValue = value;
    waitingForSecondValue = false;
  } else {
    displayValue = displayValue === '0' ? value : displayValue + value;
  }
  
  updateDisplay();
});

updateDisplay();
