// Arithmetic operation functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}

// Utility function to get input value
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value || 0);
    const number2 = parseFloat(document.getElementById('number2').value || 0);
    return { number1, number2 };
}

// output the result to the screen

function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// event listeners for each button

document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = add(number1, number2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = subtract(number1, number2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = multiply(number1, number2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = divide(number1, number2);
    displayResult(result);
});