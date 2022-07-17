const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("This is not a valid email address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});