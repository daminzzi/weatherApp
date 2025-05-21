import "./style.css";
import { createTimeComponent } from "./components/timeComponent";
import { createWeatherComponent } from "./components/weatherComponent";
import { config } from "../apikeys";

const API_KEY = config.apikey;

document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.getElementById("app");

  const title = document.createElement("h1");
  title.textContent = "현재 날씨와 시간";
  appDiv.appendChild(title);

  const dateInfo = createTimeComponent();
  appDiv.appendChild(dateInfo);

  // const weatherInfo = document.createElement("div");
  const weatherInfo = createWeatherComponent(API_KEY);
  appDiv.appendChild(weatherInfo);
});
