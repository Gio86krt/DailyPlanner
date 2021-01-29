let now = moment().format("H m");
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
    var className = checkTime(h, m);
    console.log(className, h, m);
    document.querySelector(
      ".input-group"
    ).innerHTML += `<div class="input-group ${className + " " + h + m} mb-3">
      <button class="timeSlot" id="t${h}${m}" style="max-width: 60px">${h}:${m}</button>
      <input type="text" id="activity" class="form-control" placeholder="" aria-label="Example text with two button addons">
      <button class="btn-save btn-outline-secondary" onClick="saveActivity(event)" type="button">Save</button>
      </div>`;
    // console.log(Number(m));
  }
}
draw();

function saveActivity(event) {
  let div = event.target.closest("div");
  let input = div.querySelector("#activity").value;
  let time = div.querySelector(".timeSlot").innerHTML.split(":").join("");
  if (input) {
    //!arrActivity.includes(input)
    arrActivity.push({ activity: input, time: time });
    localStorage.activities = JSON.stringify(arrActivity);
  }
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

function checkTime(h, m) {
  let hour = Number(now.slice(0, 2));
  let min = Number(now.slice(-2));
  h = Number(h);
  m = Number(m);
  console.log(`${h},${m}`);
  console.log(`${hour},${min}`);
  if (hour > h) {
    return "past";
  } else if (hour === h) {
    // console.log("checking min" + min, min > 30);
    if (min > m) return "present";
    else return "future";
  } else if (hour < Number(h)) {
    return "future";
  }
}

function removeItems() {
  localStorage.setItem("activities", []);
}

$(".delete").on("click", removeItems);
window.onload = reloadPage();
