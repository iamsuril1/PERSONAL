const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");

// function to validate the name field
function validateName() {
  const nameValue = nameInput.value.trim();
  if (nameValue === "") {
    setErrorFor(nameInput, "Name cannot be blank");
    return false;
  } else {
    setSuccessFor(nameInput);
    return true;
  }
}

// function to validate the email field
function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9._-]+)\.([a-zA-Z]{2,5})$/;
  if (emailValue === "") {
    setErrorFor(emailInput, "Email cannot be blank");
    return false;
  } else if (!emailRegex.test(emailValue)) {
    setErrorFor(emailInput, "Email is not valid");
    return false;
  } else {
    setSuccessFor(emailInput);
    return true;
  }
}

// function to validate the message field
function validateMessage() {
  const messageValue = messageInput.value.trim();
  if (messageValue === "") {
    setErrorFor(messageInput, "Message cannot be blank");
    return false;
  } else {
    setSuccessFor(messageInput);
    return true;
  }
}

// function to set error message for a field
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector("small");
  formControl.className = "form-control error";
  errorMsg.innerText = message;
}

// function to set success message for a field
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// function to validate the form
function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();
  return isNameValid && isEmailValid && isMessageValid;
}

// event listener for the submit button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});
