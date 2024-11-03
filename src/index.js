import { createTimeComponent } from "./components/timeComponent";
import { createWeatherComponent } from "./components/weatherComponent";
import { config } from "../apikeys";
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.getElementById('app'); 

  const title = document.createElement('h1');
  title.textContent = '현재 날씨와 시간';
  appDiv.appendChild(title);

  const weatherInfo = document.createElement('div');
  
  const timeComponent = createTimeComponent();
  weatherInfo.appendChild(timeComponent);
  
  const weatherComponent = createWeatherComponent(config.apikey);
  weatherInfo.appendChild(weatherComponent);

  
  appDiv.appendChild(weatherInfo);
})