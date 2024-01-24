const email = document.forms["form"]["email"];
const names = document.forms["form"]["name"];
const message = document.forms["form"]["message"];

const emailError = document.getElementById("email-error");
const nameError = document.getElementById("name-error");
const messageError = document.getElementById("message-error");
email.addEventListener("textInput", email_Verify);
names.addEventListener("textInput", name_Verify);
message.addEventListener("textInput", message_Verify);

function validate() {
  if (names.value.length === 0) {
    names.style.border = "1px solid red";
    nameError.style.display = "block";
    names.focus();
    return false;
  }
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    emailError.style.display = "block";
    names.focus();
    return false;
  }
  if (message.value.length === 0) {
    message.style.border = "1px solid red";
    messageError.style.display = "block";
    names.focus();
    return false;
  }
}

function email_Verify() {
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    emailError.style.display = "none";
    return true;
  }
}
function name_Verify() {
  if (names.value.length >= 5) {
    names.style.border = "1px solid silver";
    nameError.style.display = "none";
    return true;
  }
}

function message_Verify() {
  if (names.value.length >= 5) {
    names.style.border = "1px solid silver";
    nameError.style.display = "none";
    return true;
  }
}
