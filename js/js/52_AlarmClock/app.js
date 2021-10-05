console.log("Hello alarm");

setInterval(() => {
  let now = new Date();
  let localTime = document.getElementById("localTime");
  localTime.innerText = now;
}, 1000);

let alarmName = document.getElementById("alarmName");
let dateTime = document.getElementById("dateTime");
let addBtn = document.getElementById("addBtn");

let isSetAlarm = false;
let isSetDateTime = false;

let audio = new Audio(
  "https://cdn.videvo.net/videvo_files/audio/premium/audio0122/watermarked/JungleSouthAmerica EE201201_preview.mp3"
);
// For the setinterval function
let ringer;

// Already stored alarms
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
    dateTime.classList.remove("is-invalid");
    isSetDateTime = true;
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

  // Preparing innerHTML
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

function getRemainingTime(current, remainingId) {
  console.log({ current });
  setInterval(() => {
    let dateTime = current.split("T");

    let curObj = new Date(dateTime[0] + " " + dateTime[1]);

    let now = new Date();
    // console.log({ curObj });
    // console.log({ now });

    let milliSecondsLeft = curObj - now;

    let minutesLeft = parseInt(milliSecondsLeft / (1000 * 60));
    console.log({ minutesLeft });

    if (now >= curObj) {
      document.getElementById(remainingId).innerText = `RINGING`;
      document.getElementById(remainingId.split("-")[1]).innerText = "Stop";
      ringer = setInterval(alarmStart, 1000);
    } else {
      document.getElementById(
        remainingId
      ).innerText = `Rings in ${minutesLeft} minutes`;
    }
  }, 1000);
}

function deleteAlarm(idx) {
  if (document.getElementById(idx).innerText === "Stop") {
    console.log("YES");
    alarmStop();
    clearInterval(ringer);
  }
  let storedAlarms = localStorage.getItem("alarms");
  let alarmsArray = [];

  if (storedAlarms !== null) {
    alarmsArray = JSON.parse(storedAlarms);
  }

  alarmsArray.splice(idx, 1);
  localStorage.setItem("alarms", JSON.stringify(alarmsArray));
  showAlarms();
}

function alarmStart() {
  audio.play();
}

function alarmStop() {
  audio.pause();
}
