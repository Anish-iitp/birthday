function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
        showError('Please enter your name.');
        return false; // Prevent form submission
    }

    if (email === '' || !isEmailValid(email)) {
        showError('Please enter a valid email address.');
        return false;
    }

    if (message === '') {
        showError('Please enter a message.');
        return false;
    }

    // Form is valid, proceed with submission (replace with your actual submission logic)
    showSuccess('Thank you for your submission, ' + name + '!');
    return true; // Allow form submission
}

function showError(message) {
    const response = document.getElementById('response');
    response.textContent = message;
    response.classList.remove('hidden');
    response.classList.add('error');
}

function showSuccess(message) {
    const response = document.getElementById('response');
    response.textContent = message;
    response.classList.remove('hidden');
    response.classList.add('success');
}

function isEmailValid(email) {
    const re = /^(([^<>()[\\]\\\\.,;:\s@"]+(\.[^<>()[\\]\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
