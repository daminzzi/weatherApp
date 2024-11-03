//시간 보여주는 함수 리턴
export function createTimeComponent(){
    const timeElement=document.createElement('p');
    timeElement.id='current-time';

    //현재시간 업데이트
    function updateTime(){
        const now=new Date();
        timeElement.textContent=`현재시간 : ${now.toLocaleTimeString()}`;
    }

    updateTime();
    setInterval(updateTime,1000);

    return timeElement;
}