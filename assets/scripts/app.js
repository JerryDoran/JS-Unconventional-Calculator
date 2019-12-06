const defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Creates output text to calculator
function createLogText(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operation, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  console.log(logEntry);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    enteredNumber === 0
  ) {
    // Code after this return statement will not be executed
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createLogText(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// Add two numbers
function add() {
  calculateResult('ADD');
}

// Subtract two numbers
function subtract() {
  calculateResult('SUBTRACT');
}

// Multiply two numbers
function multiply() {
  calculateResult('MULTIPLY');
}

// Divide two numbers
function divide() {
  calculateResult('DIVIDE');
}

// Add event listeners to my buttons and wire up function calls
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

calculationDescription = 'Hi';
