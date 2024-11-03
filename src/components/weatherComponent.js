// 현재 날씨 api를 호출해서 결과 리턴
import axios from 'axios'
export function createWeatherComponent(API_KEY){
    const weatherContainer=document.createElement('div');
    const locationElement=document.createElement('p');
    locationElement.id='location';
    weatherContainer.appendChild(locationElement);

    const temperatureElement=document.createElement('p');
    temperatureElement.id='temperature';
    weatherContainer.appendChild(temperatureElement);

    const descriptionElement=document.createElement('p');
    descriptionElement.id='description';
    weatherContainer.appendChild(descriptionElement);

    const humidityElement=document.createElement('p');
    humidityElement.id='humidity';
    weatherContainer.appendChild(humidityElement);

    const cloudElement=document.createElement('p');
    cloudElement.id='cloud';
    weatherContainer.appendChild(cloudElement);

    //Todo: bring information of weather
    function fetchWeater(latitude, longitude){
        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;

        axios.get(url).then(response => {
            const data=response.data;
            locationElement.textContent=`위치: ${data.name}`;
            temperatureElement.textContent=`온도: ${data.main.temp}°C`;
            descriptionElement.textContent=`날씨: ${data.weather[0].description}`;
            humidityElement.textContent=`습도: ${data.main.humidity}%`;
            cloudElement.textContent=`구름: ${data.clouds.all}%`;
        }).catch(error=>{
            locationElement.textContent='날씨 정보를 가져오는데 실패했습니다.';
            console.error('Error fetching weather data:',error);
        })
    }

    //Todo: Call API
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                const{latitude, longitude}=position.coords;
                fetchWeater(latitude,longitude);
            },(error)=> {
                locationElement.textContent='위치 정보를 가져오는데 실패했습니다.';
                console.error('Error getting geolocation:',error);
            }
        )
    } else {
        locationElement.textContent='Geolocation을 지원하지 않는 브라우저입니다.'
    }


    return weatherContainer;
}