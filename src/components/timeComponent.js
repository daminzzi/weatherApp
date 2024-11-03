//현재 시간을 보여주는 요소를 리턴하는 함수
export function createTimeComponent(){
    const timeElement = document.createElement('p');
    timeElement.id = 'current-time';


    //현재 시간 없데이트 함수
    function updateTime(){
        const now = new Date();
        timeElement.textContent = `현재 시간: ${now.toLocaleTimeString()}`;
    }

    updateTime(); // 처음 로드될 때 시간 설정
    setInterval(updateTime, 1000); // 1초마다 시간 업데이트

    return timeElement;
}