console.log("Hello alarm");

// To update the current time (Live)
setInterval(() => {
  let now = new Date();
  let localTime = document.getElementById("localTime");
  localTime.innerText = now;
}, 1000);

const alarmName = document.getElementById("alarmName");
const dateTime = document.getElementById("dateTime");
const addBtn = document.getElementById("addBtn");

let isSetAlarm = false;
let isSetDateTime = false;

let audio = new Audio(
  "https://cdn.videvo.net/videvo_files/audio/premium/audio0122/watermarked/JungleSouthAmerica EE201201_preview.mp3"
);

// Already stored alarms in localStorage
showAlarms();

alarmName.addEventListener("blur", () => {
  if (alarmName.value === "") {
    alarmName.classList.add("is-invalid");
    isSetAlarm = false;
  } else {
    alarmName.classList.remove("is-invalid");
    isSetAlarm = true;
  }
});
dateTime.addEventListener("blur", () => {
  if (dateTime.value === "") {
    dateTime.classList.add("is-invalid");
    isSetDateTime = false;
  } else {
    let curObj = getDateTimeObject(dateTime.value);
    let now = new Date();

    // Entered date must be in the future
    if(now > curObj){
      dateTime.classList.add("is-invalid");
      isSetDateTime = false;
    }
    else{
      dateTime.classList.remove("is-invalid");
      isSetDateTime = true;
    }
  }
});

addBtn.addEventListener("click", () => {
  if (isSetAlarm && isSetDateTime) {
    console.log(alarmName.value, dateTime.value);
    let storedAlarms = localStorage.getItem("alarms");
    let alarmsArray = [];

    if (storedAlarms !== null) {
      alarmsArray = JSON.parse(storedAlarms);
    }

    alarmsArray.push([alarmName.value, dateTime.value]);
    localStorage.setItem("alarms", JSON.stringify(alarmsArray));

    alarmName.value = "";
    dateTime.value = "";

    showAlarms();
  }
});

function showAlarms(name, dateTime) {
  let storedAlarms = localStorage.getItem("alarms");
  let alarmsArray = [];

  if (storedAlarms !== null) {
    alarmsArray = JSON.parse(storedAlarms);
  }

  // Preparing innerHTML for the available alarms
  let html = "";

  alarmsArray.forEach(function (ele, idx) {
    let remainingId = `rem-${idx}`;
    html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${ele[0]}</h5>
                <p id="${remainingId}" class="card-text">${getRemainingTime(
      ele[1],
      remainingId
    )}</p>
                <a id="${idx}" onClick="deleteAlarm(this.id)" class="btn btn-primary">Delete Alarm</a>
            </div>
        </div>`;
  });

  let alarms = document.getElementById("alarms");
  if (alarmsArray.length != 0) {
    alarms.innerHTML = html;
  } else {
    alarms.innerHTML = `<h1>Wow, so empty :')</h1>`;
  }
}

// Live calculation and display of remaining time before the alarm rings
function getRemainingTime(current, remainingId) {
  console.log({ current });
  setInterval(() => {
    let curObj = getDateTimeObject(current);

    let now = new Date();

    let milliSecondsLeft = curObj - now;

    let minutesLeft = parseInt(milliSecondsLeft / (1000 * 60));
    console.log({ minutesLeft });

    if (milliSecondsLeft <= 0) {
      document.getElementById(
        remainingId
      ).innerText = "RINGING";
      audio.play();
    } else {
      document.getElementById(
        remainingId
      ).innerText = `Rings in ${minutesLeft} minutes`;
    }
  }, 1000);
}

function deleteAlarm(idx) {
  // Pauses the already ringing alarm
  audio.pause();
  
  let storedAlarms = localStorage.getItem("alarms");
  let alarmsArray = [];

  if (storedAlarms !== null) {
    alarmsArray = JSON.parse(storedAlarms);
  }

  alarmsArray.splice(idx, 1);
  localStorage.setItem("alarms", JSON.stringify(alarmsArray));
  showAlarms();
}

function getDateTimeObject(current){
  let dateTime = current.split("T");
  let curObj = new Date(dateTime[0] + " " + dateTime[1]);
  return curObj;
}