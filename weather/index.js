const API_KEY = "b6a3b1e50f084868b11171951252110";

const div1 = document.createElement('div');
div1.className = 'main-container';
div1.id = 'wrapper';

const weatherDisplay = document.createElement('div');
weatherDisplay.className = 'show-weather';

const inputCity = document.createElement('input');
inputCity.type = 'text';
inputCity.id = 'city-input';
inputCity.placeholder = 'Enter city name';


const getButton = document.createElement('button');
getButton.id = 'get-weather-btn';
getButton.textContent = 'Get Weather';

const city = document.createElement('h2');
city.id = "city-name";

const temp = document.createElement('p');
temp.id = "temperature";

const image = document.createElement('img');
image.id = "weather-icon";
image.style.display = "none";

const section = document.getElementById('section');
section.appendChild(div1);
div1.appendChild(inputCity);
div1.appendChild(getButton);
weatherDisplay.appendChild(city);
weatherDisplay.appendChild(temp);
weatherDisplay.appendChild(image);
div1.appendChild(weatherDisplay);


async function getWeather() {
  // get the value when the button is clicked
 try {
   const inputCityValue = inputCity.value.toLowerCase();
  if (inputCityValue === "") {
    alert("Please enter a city name!");
    return;
  }
  const fetchWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputCityValue}`
  );
  const weatherData = await fetchWeather.json();

  city.textContent = `Weather in ${weatherData.location.name}`;
  temp.textContent = `Temperature: ${weatherData.current.temp_c}°C`;
  image.style.display = "block";
  image.src = weatherData.current.condition.icon;
  saveWeather();
 } catch (error) {
  console.error("Error fetching weather data:", error);
  city.textContent = "Could not retrieve weather data. Please try again.";
  temp.textContent = "";
  image.src = "";
  image.style.display = "none";
 }
}


getButton.addEventListener("click", getWeather);

window.onload = function() {
  const savedWeather = localStorage.getItem("weatherInfo");
  if (savedWeather) {
    const weatherInfo = JSON.parse(savedWeather);
    city.textContent = weatherInfo.city;
    temp.textContent = weatherInfo.temperature;
    image.src = weatherInfo.imageSrc;
    image.style.display = "block";
  } else {
    city.textContent = "Weather in ";
    temp.textContent = "Temperature: ";
  }
};

function saveWeather() {
  const weatherInfo = {
    city: city.textContent,
    temperature: temp.textContent,
    imageSrc: image.src};
  localStorage.setItem("weatherInfo", JSON.stringify(weatherInfo));
}
