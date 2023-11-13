let allInput = document.querySelectorAll('input');
let textarea = document.querySelector("#description");
let inputArray = Array.from(allInput);
inputArray.push(textarea);
let submitButton = document.querySelector("#submitForm");
let dateInput = document.querySelector("#dateInput");
let today = new Date().toISOString().split('T')[0];
dateInput.min = today;


function validateForm() {
    let isValid = true;
    inputArray.forEach((input) => {
        if(input.id='dateInput'){

        }
        if (input.value.trim() === '' && input.type !== 'file') {
            isValid = false;
            input.classList.add('error');// Add error class to show some visual feedback
        } else {
            input.classList.remove('error'); // Remove error class if input is valid
        }
    });

    return isValid;
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form from submitting
    if (validateForm()) {
        window.location.href = "./submitPage.html"
    }
});