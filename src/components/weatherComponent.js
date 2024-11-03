import axios from "axios"
//현재 날씨 api를 호출해서 호출 결과를 보여주는 요소를 리턴하는 함수
export function createWeatherComponent(API_KEY){
    const weatherContainer = document.createElement('div');
    //현재 위치
    const locationElement = document.createElement('p');
    locationElement.id = 'location';
    weatherContainer.appendChild(locationElement);

    const temperatureElement = document.createElement('p');
    temperatureElement.id = 'temperature';
    weatherContainer.appendChild(temperatureElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.id = 'description';
    weatherContainer.appendChild(descriptionElement);

    const cloudElement = document.createElement('p');
    cloudElement.id = 'cloud';
    weatherContainer.appendChild(cloudElement);

    const rainElement = document.createElement('p');
    rainElement.id = 'rain';
    weatherContainer.appendChild(rainElement);

    const windElement = document.createElement('p');
    windElement.id = 'wind';
    weatherContainer.appendChild(windElement);

    //날씨 정보 가져오기
    function fetchWeather(latitude,longitude){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr&units=metric`;
     
    axios.get(url).then
    (response => {const data = response.data;
        locationElement.textContent =`위치: ${data.name}`;
        temperatureElement.textContent= `온도:${data.main.temp}°C`;
        descriptionElement.textContent = `날씨:${data.weather[0].description}`;
        cloudElement.textContent = `구름:${data.clouds.all}%`;
        windElement.textContent =`바람:${data.wind.speed}m/s`;
        rainElement.textContent = `비:${data.rain['1h']}m/s`;
    }).catch(error => {locationElement.textContent = '날씨 정보를 가져오는데 실패했습니다.';
        console.error('Error fetching weather data:',error);
    })
    }
    //api 호출하기 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=> {
            const {latitude, longitude} = position.coords;
            fetchWeather(latitude,longitude);
        },(error)=> {
             locationElement.textContent = "위치 정보를 가져오는데 실패했습니다.";
             console.error("Error getting geolocation",error);
        })
    }
    else{
            locationElement.textContent = "Geolocation을 지원하지 않는 브라우저 입니다."
    }
    
    return weatherContainer;
}