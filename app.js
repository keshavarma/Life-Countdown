const birthdate = document.getElementById("birthdate");
const birthtime = document.getElementById("birthtime");
const form = document.querySelector("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  //Error Alerts
  if (birthdate.value === "") {
    //alert("Please Enter Date of Birth");
    showAlert("Please Enter Date of Birth");
  } else if (new Date(birthdate.value) > new Date()) {
    //alert("The date you entered has not happened yet. Enter a valid date.");
    showAlert("The date you entered has not happened yet. Enter a valid date.");
  } else {
    //Change the seconds continuosly
    setInterval(updateCountdown, 1000);
  }

  e.preventDefault();
}

function updateCountdown() {
  const birth = `${birthdate.value} ${birthtime.value}`;
  const BornTime = new Date(birth);

  const seconds = Math.floor((new Date() - BornTime) / 1000);
  if (!Number.isNaN(seconds)) {
    document.getElementById("seconds").innerHTML = `${seconds}`;
    document.getElementById("seconds-counting").style.display = "flex";
  } else {
    return;
  }
}

function showAlert(message) {
  const div = document.createElement("div");
  div.className = "error";
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const dob = document.querySelector(".enter-dob");
  container.insertBefore(div, dob);
  setTimeout(function () {
    document.querySelector(".error").remove();
  }, 3000);
}
