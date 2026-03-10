// // Get the feedback div element
// const feedbackElement = document.getElementById('feedback');
// // Get the form
// const formElement = document.forms[0];

// // Add a listener for form submission
// formElement.addEventListener('submit', function(e) {
//     e.preventDefault(); // Stop default form submission

//     // Get all input elements in the form (returns a NodeList)
//     const inputs = formElement.querySelectorAll('input[type="text"], input[type="email"], textarea');
    
//     // Convert NodeList to an array and use map to get their values
//     const inputValues = Array.from(inputs).map(input => input.value.trim());

//     // Filter out empty values (optional, using another Array method)
//     const validValues = inputValues.filter(value => value.trim() !== '');

//     // Create a message with the collected values
//     if (validValues.length > 0) {
//         feedbackElement.innerHTML = 'You entered: ' + validValues.join(', ') + '. Thanks you for scheduling, we will reach out shortly!';
//     } else {
//         feedbackElement.innerHTML = 'Please enter at least one item!';
//     }

//     // Make feedback visible and adjust layout
//     feedbackElement.style.display = 'block';
//     document.body.classList.toggle('moveDown');
// });

// document.addEventListener("DOMContentLoaded", function() {
//     // Style for form elements
//     const form = document.querySelector("form");
//     form.style.padding = "40px";
//     form.style.backgroundColor = "#eeafaf"; // White background
//     form.style.paddingTop = "20px";

//     // Style for inputs inside the form
//     const inputs = form.querySelectorAll("input[type='text'], input[type='email'], textarea");
//     inputs.forEach(input => {
//         input.style.padding = "10px";
//         input.style.marginBottom = "10px";
//         input.style.borderRadius = "5px"; // Curved borders on input fields
//     });
// });
const formElement = document.forms[0];
const feedbackElement = document.getElementById('feedback');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    // Use FormData to grab all fields easily
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    
    // Filter out empty values
    const values = Object.values(data).map(v => v.trim()).filter(v => v !== '');

    if (values.length > 0) {
        feedbackElement.textContent = `Thanks, ${data.name || 'there'}! We'll reach out to ${data.email} shortly.`;
        feedbackElement.classList.add('success');
        feedbackElement.classList.remove('error');
        formElement.reset(); // Clear the form on success
    } else {
        feedbackElement.textContent = 'Please fill out the form before submitting.';
        feedbackElement.classList.add('error');
        feedbackElement.classList.remove('success');
    }

    feedbackElement.style.display = 'block';
});