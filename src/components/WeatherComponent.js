import axios from "axios";

export function createWeatherComponent(API_KEY) {
  const weatherInfo = document.createElement("div");
  weatherInfo.id = "weather-info";

  const locationElement = document.createElement("p");
  locationElement.id = "location";
  weatherInfo.appendChild(locationElement);

  const temperatureElement = document.createElement("p");
  temperatureElement.id = "temperature";
  weatherInfo.appendChild(temperatureElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.id = "description";
  weatherInfo.appendChild(descriptionElement);

  //TODO: api 호출을 통해서 날씨 정보 받아오기(위치 정보를 기반으로)
  function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&units=metric&appid=${API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        locationElement.textContent = `위치: ${data.name}`;
        temperatureElement.textContent = `온도: ${data.main.temp}°C`;
        descriptionElement.textContent = `날씨: ${data.weather[0].description}`;
      })
      .catch((error) => {
        locationElement.textContent = "날씨 정보를 가져오는 데 실패했습니다.";
        console.log("Error", error);
      });
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      },
      (error) => {
        locationElement.textContent = "위치정보를 가져오는데 실패했습니다";
        console.log("위치 정보를 가져오는데 실패했습니다", error);
      }
    );
  } else {
    locationElement.textContent = "geolocation을 지원하지 않는 브라우저입니다.";
    console.log("geolocation을 지원하지 않는 브라우저입니다.");
  }

  return weatherInfo;
}
