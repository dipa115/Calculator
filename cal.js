let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLastCharacter() {
  let currentValue = display.value;
  if (currentValue.length > 0) {
      currentValue = currentValue.slice(0, -1); // Removes the last character
      display.value = currentValue;
      currentInput = currentValue; // Update currentInput for further calculations
  }
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
  let expression = display.value;

  try {
      let result = eval(expression);
      result = result / 100;
      display.value = result;
      currentInput = result.toString();
  } catch (error) {
      display.value = 'Error';
  }
}
