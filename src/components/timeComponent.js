//현재 시간을 보여주는 요소를 리턴해주는 함수 작성
export function createTimeComponent(){
    const timeElement=document.createElement('p'); //p 태그를 갖고 있는 요소를 document에 create해주세요
    timeElement.id='current-time';

    //현재 시간 업데이트 함수
    function updateTime(){
        const now=new Date(); // 자바스크립트 안에 있는 날짜, 시간 정보를 가지고 있는 객체
        timeElement.textContent=`현재시간: ${now.toLocaleTimeString()}`;
    }
    updateTime();
    setInterval(updateTime,1000);//updatetime을 1초에 1번씩 해주세요
    return timeElement;
}