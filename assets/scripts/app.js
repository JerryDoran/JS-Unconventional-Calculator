const defaultValue = 0;
let currentResult = defaultValue;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Creates output text to calculator
function createLogText(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// Add two numbers
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createLogText('+', initialResult, enteredNumber);
}

// Subtract two numbers
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createLogText('-', initialResult, enteredNumber);
}

// Multiply two numbers
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createLogText('*', initialResult, enteredNumber);
}

// Divide two numbers
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createLogText('/', initialResult, enteredNumber);
}

// Add event listeners to my buttons and wire up function calls
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

calculationDescription = 'Hi';
