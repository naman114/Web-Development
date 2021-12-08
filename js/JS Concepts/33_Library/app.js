console.log("app");

// Ctor for object creation
function Book(name, author, genre) {
  this.name = name;
  this.author = author;
  this.genre = genre;
}

// Form submission
let libraryForm = document.getElementById("libraryForm");

libraryForm.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault(); // Every form will redirect (default behaviour)
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("bookAuthor").value;
  let genre;

  let fiction = document.getElementById("Fiction");
  let nonFiction = document.getElementById("Programming");
  let programming = document.getElementById("Non-Fiction");

  if (fiction.checked) {
    genre = fiction.value;
  } else if (nonFiction.checked) {
    genre = nonFiction.value;
  } else if (programming.checked) {
    genre = programming.value;
  }

  let book = new Book(name, author, genre);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show(
      "success",
      "Success!",
      "Your book has been added to the wishlist successfully."
    );
  } else {
    //   Show error
    display.show(
      "danger",
      "Error!",
      "The Name and Author fields should have atleast 3 characters."
    );
  }
}

// To add values to the table
function Display() {}

// Adding methods to Display's prototype

// Validation
Display.prototype.validate = function (book) {
  return book.name.length >= 3 && book.author.length >= 3;
};

// Append to table
Display.prototype.add = function (book) {
  document.getElementById("entries").innerHTML += `
              <tr>
                  <td>${book.name}</td>
                  <td>${book.author}</td>
                  <td>${book.genre}</td>
              </tr>
              `;
};

Display.prototype.show = function (type, header, content) {
  let message = document.getElementById("message");
  message.innerHTML = `
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${header}</strong> ${content}
                        </div>
                        `;

  setTimeout(function () {
    message.innerHTML = "";
  }, 5000);
};

// Clear the input fields and reset the radio button
Display.prototype.clear = function () {
  libraryForm.reset();
};
