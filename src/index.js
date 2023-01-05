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
function showQuote(description) {
  let conditions = [
    "thunderstorm with light rain",
    "thunderstorm with rain",
    "thunderstorm with heavy rain",
    "light thunderstorm",
    "thunderstorm",
    "heavy thunderstorm",
    "ragged thunderstorm",
    "thunderstorm with light drizzle",
    "thunderstorm with drizzle",
    "thunderstorm with heavy drizzle ",
    "light intensity drizzle",
    "drizzle",
    "heavy intensity drizzle",
    "light intensity drizzle rain",
    "drizzle rain",
    "heavy intensity drizzle rain",
    "shower rain and drizzle",
    "heavy shower rain and drizzle",
    "shower drizzle",
    "light rain",
    "moderate rain",
    "heavy intensity rain",
    "very heavy rain",
    "extreme rain",
    "freezing rain",
    "light intensity shower rain",
    "shower rain",
    "heavy intensity shower rain",
    "ragged shower rain",
    "light snow",
    "Snow",
    "Heavy snow",
    "Sleet",
    "Light shower sleet",
    "Shower sleet",
    "Light rain and snow",
    "Rain and snow",
    "Light shower snow",
    "Shower snow",
    "Heavy shower snow",
    "mist",
    "Smoke",
    "Haze",
    "sand/ dust whirls",
    "fog",
    "sand",
    "dust",
    "volcanic ash",
    "squalls",
    "tornado",
    "clear sky",
    "few clouds",
    "scattered clouds",
    "broken clouds",
    "overcast clouds",
  ];
  let quote = document.querySelector("#quote");
  console.log({ description });
  if (
    description === conditions[0] ||
    description === conditions[1] ||
    description === conditions[2] ||
    description === conditions[5]
  ) {
    quote.innerHTML =
      "Every storm runs out of rain, just like every dark night turns into day. - Gary Allan Running";
  } else if (
    description === conditions[3] ||
    description === conditions[4] ||
    description === conditions[6] ||
    description === conditions[7] ||
    description === conditions[8] ||
    description === conditions[9]
  ) {
    quote.innerHTML =
      "Thunderstorms are as much our friends as the sunshine. ― Criss Jami";
  } else if (
    description === conditions[10] ||
    description === conditions[11] ||
    description === conditions[12] ||
    description === conditions[13] ||
    description === conditions[14] ||
    description === conditions[15] ||
    description === conditions[16] ||
    description === conditions[17] ||
    description === conditions[18] ||
    description === conditions[48] ||
    description === conditions[49]
  ) {
    quote.innerHTML =
      "If people were like rain, I was like drizzle and she was a hurricane. - John Green";
  } else if (
    description === conditions[19] ||
    description === conditions[20] ||
    description === conditions[21] ||
    description === conditions[22] ||
    description === conditions[23] ||
    description === conditions[24] ||
    description === conditions[25] ||
    description === conditions[26] ||
    description === conditions[27] ||
    description === conditions[28]
  ) {
    quote.innerHTML =
      "Do not be angry with the rain; it simply does not know how to fall upwards. – Vladimir Nabokov";
  } else if (
    description === conditions[29] ||
    description === conditions[30] ||
    description === conditions[31] ||
    description === conditions[37] ||
    description === conditions[38] ||
    description === conditions[39]
  ) {
    quote.innerHTML =
      "The snow is sparkling like a million little suns. - Lama Willa";
  } else if (
    description === conditions[32] ||
    description === conditions[33] ||
    description === conditions[34] ||
    description === conditions[35] ||
    description === conditions[36]
  ) {
    quote.innerHTML =
      "Then come the wild weather, come sleet or come snow, we will stand by each other, however it blow. - Simon Dach";
  } else if (
    description === conditions[32] ||
    description === conditions[40] ||
    description === conditions[41] ||
    description === conditions[42] ||
    description === conditions[44]
  ) {
    quote.innerHTML =
      "The mist hung in the air like a prancing unicorn. - Graham Joyce";
  } else if (
    description === conditions[32] ||
    description === conditions[43] ||
    description === conditions[45] ||
    description === conditions[46] ||
    description === conditions[36]
  ) {
    quote.innerHTML =
      "To start a journey in a sandstorm is good luck. - Michael Ondaatje";
  } else if (description === conditions[32] || description === conditions[50]) {
    quote.innerHTML =
      "Some old fashioned things like fresh air and sunshine are hard to beat. – Laura Ingalls Wilder";
  } else if (
    description === conditions[51] ||
    description === conditions[52] ||
    description === conditions[53] ||
    description === conditions[54]
  ) {
    quote.innerHTML = "Be the sun breaking through the clouds. - A.D. Posey";
  } else {
    quote.innerHTML =
      "Climate is what we expect, weather is what we get.-Mark Twain";
  }
}

function search(city) {
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=26f241dba811745079f6bce715cc6450&units=${units} `;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

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

  getForecast(response.data.coord);
  let description = response.data.weather[0].description;
  showQuote(description);
}
function submitting(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;
  search(city);
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
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}
function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `<div class="col">
                        ${formatDay(forecastDay.dt)}
                        </br>
                        <img src="images/${
                          forecastDay.weather[0].icon
                        }.png" width="30" />
                        </br>
                        <strong>${Math.round(forecastDay.temp.max)}°C</strong>
                        </br>
                        ${Math.round(forecastDay.temp.min)}°C
                    </div>
`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "a43564c91a6c605aeb564c9ed02e3858";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

search("Malaga");
