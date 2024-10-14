const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input, select, textarea');
const submitButton = form.querySelector('.submit');

function checkFormValidity() {
    let allFilled = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });
    submitButton.disabled = !allFilled;
}

inputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
});

// Optionally prevent form submission for demo purposes
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});