const birthdate = document.getElementById("birthdate");
const birthtime = document.getElementById("birthtime");
const form = document.querySelector("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  if (birthdate.value == "") {
    alert("Please Enter Date of Birth");
  } else if (new Date(birthdate.value) > new Date()) {
    alert("The date you entered has not happened yet. Enter a valid date.");
  } else {
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
