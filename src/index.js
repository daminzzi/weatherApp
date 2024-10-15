import Style from './style.css';
import { config } from '../apikeys';
import { createTimeComponent } from './components/timeComponent';
import { createWeatherComponent } from './components/weatherComponent';

const API_KEY = config.apikey;

document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.getElementById('app'); 

  const title = document.createElement('h1');
  title.textContent = '현재 날씨와 시간';
  appDiv.appendChild(title);

  const weatherInfo = document.createElement('div');
  weatherInfo.id = 'weatherInfo';
  
  // 현재 시간 컴포넌트 추가
  const timeComponent = createTimeComponent();
  weatherInfo.appendChild(timeComponent);

  // 날씨 정보 컴포넌트 추가
  const weatherComponent = createWeatherComponent(API_KEY);
  weatherInfo.appendChild(weatherComponent);
  
  appDiv.appendChild(weatherInfo);
})