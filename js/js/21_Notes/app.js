// Upon adding a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
let textArea = document.getElementById("exampleFormControlTextarea1");
let notes = document.getElementById("notes");

showNotes();

addBtn.addEventListener("click", function (e) {
  let storedNotes = localStorage.getItem("notes");
  let notesArr = [];

  if (storedNotes != null) {
    notesArr = JSON.parse(storedNotes);
  }
  notesArr.push(textArea.value);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  textArea.value = "";
  showNotes();
});

// Fetch all notes from local storage and update innerHTML
function showNotes() {
  let storedNotes = localStorage.getItem("notes");
  let notesArr = [];

  if (storedNotes != null) {
    notesArr = JSON.parse(storedNotes);
  }
  let html = "";
  notesArr.forEach(function (ele, idx) {
    if (ele !== "") {
      html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">Note ${idx + 1}</h5>
              <p class="card-text">${ele}</p>
              <a id="${idx}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
          </div>
      </div>`;
    }
  });

  if (notesArr.length != 0) {
    notes.innerHTML = html;
  } else {
    notes.innerHTML = `<h1>Wow, so empty :')</h1>`;
  }
}

// Function to delete a note by index
function deleteNote(idx) {
  let storedNotes = localStorage.getItem("notes");
  let notesArr = [];

  if (storedNotes != null) {
    notesArr = JSON.parse(storedNotes);
  }

  notesArr.splice(idx, 1);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function (e) {
  let searchQry = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");

  Array.from(noteCards).forEach(function (ele) {
    let cardTxt = ele.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(searchQry)) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
});

/* 

1. title
2. mark as important
3. Global feed and user note filtering
4. Sync with server with web server

*/
