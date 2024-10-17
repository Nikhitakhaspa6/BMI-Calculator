// Cache DOM elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

// Calculate BMI on button click
calculateBtn.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    showResult('Please enter valid values for weight and height.', 'danger');
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2); // Calculate BMI

  let message;
  if (bmi < 18.5) {
    message = `Underweight: Your BMI is ${bmi}`;
    showResult(message, 'warning');
  } else if (bmi >= 18.5 && bmi < 24.9) {
    message = `Normal: Your BMI is ${bmi}`;
    showResult(message, 'success');
  } else if (bmi >= 25 && bmi < 29.9) {
    message = `Overweight: Your BMI is ${bmi}`;
    showResult(message, 'warning');
  } else {
    message = `Obese: Your BMI is ${bmi}`;
    showResult(message, 'danger');
  }
});

// Function to display the result with Bootstrap alerts
function showResult(message, type) {
  resultDiv.textContent = message;
  resultDiv.className = `alert alert-${type}`;
  resultDiv.classList.remove('d-none');
}
