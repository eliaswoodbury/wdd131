        // Get the feedback div element
        const feedbackElement = document.getElementById('feedback');
        // Get the form
        const formElement = document.forms[0];

        // Add a listener for form submission
        formElement.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop default form submission

            // Get all input elements in the form (returns a NodeList)
            const inputs = formElement.querySelectorAll('input[type="text"]');
            
            // Convert NodeList to an array and use map to get their values
            const inputValues = Array.from(inputs).map(input => input.value.trim());

            // Filter out empty values (optional, using another Array method)
            const validValues = inputValues.filter(value => value !== '');

            // Create a message with the collected values
            if (validValues.length > 0) {
                feedbackElement.innerHTML = 'You entered: ' + validValues.join(', ') + '. Thanks for your input!';
            } else {
                feedbackElement.innerHTML = 'Please enter at least one item!';
            }

            // Make feedback visible and adjust layout
            feedbackElement.style.display = 'block';
            document.body.classList.toggle('moveDown');
        });
