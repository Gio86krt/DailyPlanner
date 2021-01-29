let now = moment().format("H");
let arrActivity = [];

let inputGroup = `<button class="btn btn-outline-secondary timeslot" type="button"></button>
<input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons">
<button class="btn btn-outline-secondary" type="button">Save</button>`;

$(".container").append("<div></div>").addClass("input-group mb-3 ");

function draw() {
  let m;
  for (let i = 7; i <= 20; i += 0.5) {
    let h = String(Math.trunc(i)).padStart(2, 0);
    if (i == h) {
      m = "00";
    } else m = "30";
    var className = checkTime(Number(h));
    document.querySelector(
      ".input-group"
    ).innerHTML += `<div class="input-group ${className} mb-3">
      <button class="timeSlot" id="t${h}${m}" style="max-width: 60px">${h}:${m}</button>
      <input type="text" id="activity" class="form-control" placeholder="" aria-label="Example text with two button addons">
      <button class="btn-save btn-outline-secondary " onClick="saveActivity(event)" type="button">Save</button>
      </div>`;
    // console.log(Number(now) === Number(h));
  }
}
draw();

function saveActivity(event) {
  let div = event.target.closest("div");
  let input = div.querySelector("#activity").value;
  let time = div.querySelector(".timeSlot").innerHTML.split(":").join("");
  console.log(time + "save");
  let btn = div.querySelector(".btn-save");

  arrActivity.push({ activity: input, time: time });
  localStorage.activities = JSON.stringify(arrActivity);
}

function reloadPage() {
  arrActivity = JSON.parse(localStorage.activities);
  console.log(arrActivity);
  if (localStorage.activities) {
    for (let i = 0; i < arrActivity.length; i++) {
      let time = arrActivity[i].time;
      // console.log(time);
      let div = document.querySelector("#t" + time).closest("div");
      div.querySelector("#activity").value = arrActivity[i].activity;
      // console.log(arrActivity[i].activity);
      // console.log(div.querySelector("#activity"));
    }
  }
}

function checkTime(hour) {
  if (Number(hour) < Number(now)) {
    return "past";
  } else if (Number(hour) === Number(now)) {
    return "present";
  } else if (Number(hour) > Number(now)) {
    return "future";
  }
}

function removeItems() {
  localStorage.setItem("activities", null);
}

$(".delete").on("click", removeItems);
window.onload = reloadPage();
