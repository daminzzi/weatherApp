//현재 시간 보여주는   요소를 return 하는 function 

export function createTimeComponent(){
    const timeElement = document.createElement('p');
    timeElement.id = 'current-time';


    function updateTime(){
        const now = new Date();
        timeElement.textContent = `현재 시간: ${now.toLocaleTimeString()}`;

    }
    updateTime();
    setInterval(updateTime, 1000);


    return timeElement;
}