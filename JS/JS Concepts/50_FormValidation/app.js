console.log("This is app.js");

let userForm = document.getElementById("userForm");
let userName = document.getElementById("name");
let email = document.getElementById("email");
let car = document.getElementById("car");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
let message = document.getElementById("exampleFormControlTextarea1");

let isValidName = false;
let isValidEmail = false;
let isValidPhone = false;

userName.addEventListener("blur", () => {
  console.log("name blurred");
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
  let str = userName.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("Matches");

    userName.classList.remove("is-invalid");
    isValidName = true;
  } else {
    console.log("Did not match");

    userName.classList.add("is-invalid");
    console.log(userName.classList);
    isValidName = false;
  }
});
email.addEventListener("blur", () => {
  console.log("email blurred");

  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("Matches");

    email.classList.remove("is-invalid");
    isValidEmail = true;
  } else {
    console.log("Did not match");

    email.classList.add("is-invalid");
    console.log(email.classList);
    isValidEmail = false;
  }
});
phone.addEventListener("blur", () => {
  console.log("phone blurred");

  let regex = /^[0-9]{10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Matches");

    phone.classList.remove("is-invalid");
    isValidPhone = true;
  } else {
    console.log("Did not match");

    phone.classList.add("is-invalid");
    console.log(phone.classList);

    isValidPhone = false;
  }
});

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    userName.value,
    email.value,
    car.value,
    address.value,
    phone.value,
    message.value
  );
  if (isValidName && isValidEmail && isValidPhone) {
    displayOutcome(
      "success",
      "Success!",
      "Your form has been submitted successfully."
    );
    userForm.reset();
  } else {
    displayOutcome(
      "danger",
      "Error!",
      "Either or all of Name, Email and Phone fields are invalid."
    );
  }
});

function displayOutcome(type, header, content) {
  let message = document.getElementById("message");
  message.innerHTML = `
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${header}</strong> ${content}
                        </div>
                        `;

  setTimeout(function () {
    message.innerHTML = "";
  }, 5000);
}
