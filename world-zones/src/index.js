const updateTime = () => {
  const losAngeles = document.getElementById("karachi");
  if (losAngeles) {
    const losAngelesDate = document.querySelector(".karachi-date");
    losAngelesDate.innerHTML = moment
      .tz("Asia/Karachi")
      .format("MMMM Do YYYY");

    const losAngelesTime = document.querySelector(".karachi-time");
    losAngelesTime.innerHTML = moment
      .tz("Asia/Karachi")
      .format("hh:mm");

    const losAngelesTimeReference = document.querySelector(
      ".karachi-time-reference"
    );
    losAngelesTimeReference.innerHTML = moment
      .tz("Asia/Karachi")
      .format("A");
  }

  const fiji = document.getElementById("fiji");
  if (fiji) {
    const fijiDate = document.querySelector(".fiji-date");
    fijiDate.innerHTML = moment.tz("Pacific/Fiji").format("MMMM Do YYYY");

    const fijiTime = document.querySelector(".fiji-time");
    fijiTime.innerHTML = moment.tz("Pacific/Fiji").format("hh:mm");

    const fijiTimeReference = document.querySelector(".fiji-time-reference");
    fijiTimeReference.innerHTML = moment.tz("Pacific/Fiji").format("A");
  }

  const bangkok = document.getElementById("bangkok");
  if (bangkok) {
    const bangkokDate = document.querySelector(".bangkok-date");
    bangkokDate.innerHTML = moment.tz("Asia/Bangkok").format("MMMM Do YYYY");

    const bangkokTime = document.querySelector(".bangkok-time");
    bangkokTime.innerHTML = moment.tz("Asia/Bangkok").format("hh:mm");

    const bangkokTimeReference = document.querySelector(
      ".bangkok-time-reference"
    );
    bangkokTimeReference.innerHTML = moment.tz("Asia/Bangkok").format("A");
  }

  const rome = document.getElementById("rome");
  if (rome) {
    const romeDate = document.querySelector(".rome-date");
    romeDate.innerHTML = moment.tz("Europe/Rome").format("MMMM Do YYYY");

    const romeTime = document.querySelector(".rome-time");
    romeTime.innerHTML = moment.tz("Europe/Rome").format("hh:mm");

    const romeTimeReference = document.querySelector(".rome-time-reference");
    romeTimeReference.innerHTML = moment.tz("Europe/Rome").format("A");
  }
};

function updateCityTime(event) {
  if (event && event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    const cityName = cityTimeZone.replace("_", " ").split("/")[1];
    const cityTime = moment.tz(cityTimeZone);
    const cities = document.querySelector("#cities");
    cities.innerHTML = `
  <div class="row">
    <div class="col-6 city">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="col-6">
        <span class="time">${cityTime.format("hh:mm")}</span>
        <small class="time-reference">${cityTime.format("A")}</small>
    </div>
  </div>
  <div class="row" id="link">
  <a href="?" id="back-link">Back to all cities →</a>
  </div>`;
    setTimeout(() => {
      updateCityTime(event);
    }, 1000);
  }
}

updateTime();
setInterval(updateTime, 1000);
setInterval(updateCityTime, 1000);

const citySelect = document.getElementById("city");
citySelect.addEventListener("change", updateCityTime);
