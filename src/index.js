import { createTimeComponent } from "./components/timeComponent";
import { createWeatherComponent } from "./components/weatherComponents";
import { config } from "../apikeys";
import './style.css';
document.addEventListener('DOMContentLoaded', () => { //document에 addeEventListener
  const appDiv = document.getElementById('app');  //DOM content가 load되자마자 appDiv 받아와서
  // 이런 요소들 추가해주세요
  const title = document.createElement('h1'); //h1 태그를 가진 타이틀 만듦
  title.textContent = '현재 날씨와 시간'; //추가해주세요
  appDiv.appendChild(title); //appDiv에 title 추가

  const weatherInfo = document.createElement('div'); 
  
  // TODO: 시간과 날씨 정보를 컴포넌트로 생성하여 weatherInfo의 child로 추가.
  const timeComponent=createTimeComponent();
  weatherInfo.appendChild(timeComponent);
  const weatherComponent=createWeatherComponent(config.apikey);
  weatherInfo.appendChild(weatherComponent);
  appDiv.appendChild(weatherInfo);
})