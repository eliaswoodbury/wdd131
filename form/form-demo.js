function validateForm(event) {
    const theForm = event.target;
    const errors = [];
    let isValid = true;

    // Validate Full Name
    const fullName = theForm.fullName.value.trim();
    if (fullName === "") {
        errors.push("Full Name is required.");
        isValid = false;
    }

    // Validate Email
    const email = theForm.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Enter a valid email address.");
        isValid = false;
    }

    // Validate Address
    const address = theForm.address.value.trim();
    if (address === "") {
        errors.push("Address is required.");
        isValid = false;
    }

    // Validate Payment Method
    const paymentMethod = theForm.paymentMethod.value;
    if (paymentMethod === "") {
        errors.push("Select a payment method.");
        isValid = false;
    }

    // Validate Credit Card if selected
    if (paymentMethod === "creditCard") {
        const creditCardNumber = theForm.creditCardNumber.value.trim();
        const ccRegex = /^\d{16}$/;
        if (!ccRegex.test(creditCardNumber)) {
            errors.push("Enter a valid 16-digit credit card number.");
            isValid = false;
        }
    }

    // Validate PayPal Username if selected
    if (paymentMethod === "paypal") {
        const paypalUsername = theForm.paypalUsername.value.trim();
        if (paypalUsername === "") {
            errors.push("Enter your PayPal username.");
            isValid = false;
        }
    }

    // If form is invalid, prevent submission and show errors
    if (!isValid) {
        event.preventDefault();
        showErrors(errors);
    }
}

function togglePaymentDetails() {
    const theForm = document.getElementById("checkoutForm");
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const paypalContainer = document.getElementById("paypalUsernameContainer");
    const paymentMethod = theForm.paymentMethod.value;

    // Hide both payment containers
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");

    // Disable required attributes when hidden
    theForm.creditCardNumber.removeAttribute("required");
    theForm.paypalUsername.removeAttribute("required");

    // Show the selected payment method container and enable required
    if (paymentMethod === "creditCard") {
        creditCardContainer.classList.remove("hide");
        theForm.creditCardNumber.setAttribute("required", "true");
    } else if (paymentMethod === "paypal") {
        paypalContainer.classList.remove("hide");
        theForm.paypalUsername.setAttribute("required", "true");
    }
}

// Function to display errors
function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map(error => `<p>${error}</p>`).join("");
    errorEl.innerHTML = html;
}

// Attach event listeners
document.getElementById("checkoutForm").addEventListener("submit", validateForm);
document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);
