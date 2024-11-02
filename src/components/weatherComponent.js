import axios from "axios";

//현재 날씨 api를 호출해서 호출 결과를 보여주는 요소를 리턴하는 함수
export function createWeatherComponent (API_KEY) {
    const weatherContainer = document.createElement('div');

    const locationElement = document.createElement('p');
    locationElement.id = 'location';
    weatherContainer.appendChild(locationElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.id = 'description';
    weatherContainer.appendChild(descriptionElement);

    const temperatureElement = document.createElement('p');
    temperatureElement.id = 'temperature';
    weatherContainer.appendChild(temperatureElement);

    const humidityElement = document.createElement('p');
    humidityElement.id = 'humidity';
    weatherContainer.appendChild(humidityElement);



    function fetchWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

        axios.get(url).then(response => {
            const data = response.data;
            locationElement.textContent = `위치: ${data.name}`;
            temperatureElement.textContent = `온도: ${data.main.temp}°C`;
            descriptionElement.textContent = `날씨: ${data.weather[0].description}`;
            humidityElement.textContent = `습도: ${data.main.humidity}%`;

            // Dynamic color change based on temperature value
            if (data.main.temp >= 30) {
                temperatureElement.style.color = "#FF5733"; // Hot
            } else if (data.main.temp >= 15) {
                temperatureElement.style.color = "#FF8C00"; // Warm
            } else {
                temperatureElement.style.color = "#1E90FF"; // Cool
            }

            // Dynamic color change based on humidity value
            if (data.main.humidity >= 80) {
                humidityElement.style.color = "#006400"; // High humidity
            } else if (data.main.humidity >= 40) {
                humidityElement.style.color = "#4682B4"; // Moderate humidity
            } else {
                humidityElement.style.color = "#B22222"; // Low humidity
            }
        }).catch (error => {
            locationElement.textContent = '날씨 정보를 가져오는 데 실패했습니다.';
            console.error('Error fetching weather data:', error);
         })
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                position.coords;
                fetchWeather(latitude, longitude);
            },
            (error) => {
                locationElement.textContent = '위치 정보를 가져오는 데 실패했습니다.';
                console.error('Error getting location:', error);
            }
        );
    } else {
        locationElement.textContent = 'Geolocation을 지원하지 않는 브라우저입니다.';
    }
    return weatherContainer;
}