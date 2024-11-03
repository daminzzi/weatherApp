import axios from "axios";

// 현재 날씨 api를 호출해서 호출 결과를 보여주는 요소를 return 하는 함수
export function createWeatherComponent(API_KEY){
    const weatherContainer = document.createElement('div');
    
    //현재 위치 
    const locationElement = document.createElement('p');
    locationElement.id = 'location';
    weatherContainer.appendChild(locationElement);

    //현재 온도
    const temperatureElement = document.createElement('p');
    temperatureElement.id = 'temperature';
    weatherContainer.appendChild(temperatureElement);
    
    //현재 습도
    const humidityElement = document.createElement('p');
    humidityElement.id = 'temperature';
    weatherContainer.appendChild(humidityElement);

    //날씨 설명
    const descriptionElement = document.createElement('p');
    descriptionElement.id = 'description';
    weatherContainer.appendChild(descriptionElement);

    //날씨 정보 가져오기
    function getWeather(lat,lon){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
        axios.get(url).then(response => {
            const data = response.data;
            locationElement.textContent = `위치: ${data.name}`;
            temperatureElement.textContent = `온도: ${data.main.temp}℃`;
            humidityElement.textContent = `습도: ${data.main.humidity}`;
            descriptionElement.textContent = `날씨: ${data.weather[0].description}`;
        }).catch(error => {
            locationElement.textContent = '날씨 정보를 가져오는 데 실패했습니다.';
            console.error('Error getting weather data: ', error);
        })
    }

    //API 가져오기
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            getWeather(latitude, longitude);
        }, (error) => {
            locationElement.textContent = '위치 정보를 가져오는 데 실패했습니다.';
            console.error('Error getting geolocation: ', error);
        })
    } else{
        locationElement.textContent = 'Geolocation을 지원하지 않는 브라우저입니다.'
    }

    return weatherContainer;
}