//날짜, 시간과 관련된 정보를 생성하는 함수
export function createTimeComponent() {
  const dateInfo = document.createElement("div");
  dateInfo.id = "date-info";

  const dateElement = document.createElement("p");
  dateElement.id = "current-date";

  function updateDate() {
    const now = new Date();
    dateElement.textContent = now.toLocaleDateString();
  }

  updateDate();
  setInterval(updateDate, 1000 * 60 * 60);

  const timeElement = document.createElement("p");
  timeElement.id = "current-time";

  function updateTime() {
    const now = new Date();
    // timeElement.textContent = "현재 시간: " + now.toLocaleTimeString() + "입니다.";
    timeElement.textContent = `현재 시간: ${now.toLocaleTimeString()}입니다`;
  }

  updateTime(); //처음 로드가 될 때 시간을 받아온다
  setInterval(updateTime, 1000); //1초마다 시간이 업데이트 된다

  dateInfo.appendChild(dateElement);
  dateInfo.appendChild(timeElement);

  return dateInfo;
}
