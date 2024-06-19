document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Username cannot be empty');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (isValid) {
        alert('Login successful');
        // You can add further actions here, like sending the form data to the server
    }
}

function setError(input, message) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
    input.style.borderColor = '#e74c3c';
}

function setSuccess(input) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector('small');
    small.style.visibility = 'hidden';
    input.style.borderColor = '#2ecc71';
}