function updateTime() {
  let newYork = document.querySelector("#newyork");
  let newDateElement = newYork.querySelector(".date");
  let newTimeElement = newYork.querySelector(".time");
  let newTime = moment().tz("America/New_York");
  newDateElement.innerHTML = newTime.format("MMMM Do, YYYY");
  newTimeElement.innerHTML = newTime.format("h:mm:ss [<small>]A[</small>]");

  let kabul = document.querySelector("#kabul");
  let kabulDateElement = kabul.querySelector(".date");
  let kabulTimeElement = kabul.querySelector(".time");
  let kabulTime = moment().tz("Asia/Kabul");
  kabulDateElement.innerHTML = kabulTime.format("MMMM Do, YYYY");
  kabulTimeElement.innerHTML = kabulTime.format("h:mm:ss [<small>]A[</small>]");

  let dubai = document.querySelector("#dubai");
  let dubaiDateElement = dubai.querySelector(".date");
  let dubaiTimeElement = dubai.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");
  dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do, YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
