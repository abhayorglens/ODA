const emailInput = document.getElementById('email');
const fullNameInput = document.getElementById('fullName');
const organizationInput = document.getElementById('organization');
const designationInput = document.getElementById('designation');
const downloadBtn = document.getElementById('downloadBtn');

// Function to check if all inputs are filled
function checkInputs() {
    if (emailInput.value && fullNameInput.value && organizationInput.value && designationInput.value) {
        downloadBtn.disabled = false;
    } else {
        downloadBtn.disabled = true;
    }
}

// Attach event listeners to inputs
emailInput.addEventListener('input', checkInputs);
fullNameInput.addEventListener('input', checkInputs);
organizationInput.addEventListener('input', checkInputs);
designationInput.addEventListener('input', checkInputs);

// Function to download PDF
function downloadPDF() {
    const link = document.createElement('a');
    link.href = './privateFiles/OD-Publication.pdf'; //  actual path to your PDF
    link.download = './privateFiles/OD-Publication.pdf';
    link.click();
}

// Function to go back to the previous page
function goBack() {
    window.history.back();
}