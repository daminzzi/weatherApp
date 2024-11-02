//현재시간 보여주는 요소 리턴해주는 함수
export function createTimeComponent
()
{
    const timeElement=
    document.createElement('p');
    timeElement.id=
    'current-time';

    //현재 시간 업뎃 함수
    function updateTime()
    {
        const now=new Date();
        timeElement.textContent=`현재시간:${now.toLocaleTimeString()}`;
        
    }
    updateTime();
    setInterval(updateTime,1000);

}