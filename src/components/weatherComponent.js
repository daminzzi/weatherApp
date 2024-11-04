//./src/component/weatherComponent.js
import axios from 'axios';

export function createWeatherComponent(API_KEY) {
    const weatherContainer = document.createElement('div');
    
    const locationElement = document.createElement('p');
    locationElement.id = 'location';
    weatherContainer.appendChild(locationElement);

    const temperatureElement = document.createElement('p');
    temperatureElement.id = 'temperature';
    weatherContainer.appendChild(temperatureElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.id = 'description';
    weatherContainer.appendChild(descriptionElement);

    // 날씨 정보 가져오기
    function fetchWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=kr`;

        axios.get(url)
            .then(response => {
                const data = response.data;
                locationElement.textContent = `위치: ${data.name}`;
                temperatureElement.textContent = `온도: ${data.main.temp}°C`;
                descriptionElement.textContent = `날씨: ${data.weather[0].description}`;
            })
            .catch(error => {
                locationElement.textContent = '날씨 정보를 가져오는 데 실패했습니다.';
                console.error('Error fetching weather data:', error);
            });
    }

    // 위치 정보를 가져와서 날씨 API 호출
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
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
