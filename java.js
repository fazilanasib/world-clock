function updateTime() {
  let cancun = document.querySelector("#cancun");
  let cancunDateElement = cancun.querySelector(".date");
  let cancunTimeElement = cancun.querySelector(".time");
  let cancunTime = moment().tz("America/Cancun");
  cancunDateElement.innerHTML = cancunTime.format("MMMM Do, YYYY");
  cancunTimeElement.innerHTML = cancunTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

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
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector(".allcity");
  cityElement.innerHTML = `
  <div class="cities">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div> <a href="/">Back to all cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
