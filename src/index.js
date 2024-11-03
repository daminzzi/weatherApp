import {createTimeComponent} from "./components/timeComponent";
import { createWeatherComponent } from "./components/weatherComponent";
import { config } from "../apikeys"; 
import './style.css';



//const { createTimeComponent } = require("./components/timeComponent");


document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.getElementById('app'); 

  const title = document.createElement('h1');
  title.textContent = '현재 날씨와 시간'; 
  appDiv.appendChild(title);

  const weatherInfo = document.createElement('div');
  
  // TODO: 시간과 날씨 정보를 컴포넌트로 생성하여 weatherInfo의 child로 추가.
  const timeComponent = createTimeComponent();
  weatherInfo.appendChild(timeComponent);

  const weatherComponent = createWeatherComponent(config.apikey);
  weatherInfo.appendChild(weatherComponent);

  appDiv.appendChild(weatherInfo);
})