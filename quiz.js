// Define the CheckAnswer function
function checkAnswer() {
    // Declare the Correct Answer
    const correctAnswer = "4";

    // Get the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // if no option is selected, display an error message
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer before submit.";
        return;
    }

    const userAnswer = selectedOption.value;

    // compare and give feedback

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";    
    } else {
        document.getElementById('feedback').textContent="That's incorrect. Try Again"
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);