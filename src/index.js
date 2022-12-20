function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDate = date.getDate();
  let currentMonth = months[date.getMonth()];
  let day = days[dayIndex];
  return `${currentDate} ${currentMonth}, ${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// new temp and others

function showTemperature(response) {
  console.log(response);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )}m/s`;
  document.querySelector("#feels-like").innerHTML = `Feels like: ${Math.round(
    response.data.main.feels_like
  )}°C `;
  document.querySelector("#max").innerHTML = `${Math.round(
    response.data.main.temp_max
  )}°C / `;
  document.querySelector("#min").innerHTML = `${Math.round(
    response.data.main.temp_min
  )}°C `;
  document.querySelector("#des").innerHTML =
    response.data.weather[0].description;
  let iconElement = document.querySelector("#icon-current");
  iconElement.setAttribute(
    "src",
    `images/${response.data.weather[0].icon}.png`
  );
  celsiusTemperature = response.data.main.temp;
}

function submitting(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=26f241dba811745079f6bce715cc6450&units=${units} `;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}

let formSearch = document.querySelector("#search-form");
formSearch.addEventListener("submit", submitting);

// new current loc

function showPosition(position) {
  let apiKey = "26f241dba811745079f6bce715cc6450";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLocationButton = document.querySelector("#location");
currentLocationButton.addEventListener("click", getCurrentLocation);

////// forescast

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class=row>`;
  let days = ["Thu", "Fri", "Sat", "Sun", "Mon"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="col">

                        ${day}
                        </br>
                        <img src="images/fewclouds.svg" width="30" />
                        </br>
                        <strong>+22°C</strong>
                        </br>
                        +17°C

                    </div>
`;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

displayForecast();

/// Fahrenheit

function showFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelsius(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);

search("Malaga");
