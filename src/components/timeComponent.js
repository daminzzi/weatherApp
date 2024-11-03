export function createTimeComponent() {
    const timeElement = document.createElement('p');
    timeElement.id = 'current-time';

    function updateTime() {
        const now = new Date();
        const hour = now.getHours();
        timeElement.textContent = `현재 시간: ${now.toLocaleTimeString()}`;
        
        // Change background color based on the time of day
        if (hour >= 6 && hour < 12) { // Morning
            document.body.style.backgroundColor = '#FFFBCC'; // Light yellow
        } else if (hour >= 12 && hour < 18) { // Afternoon
            document.body.style.backgroundColor = '#ABD5FF'; // Light blue
        } else if (hour >= 18 && hour < 20) { // Evening
            document.body.style.backgroundColor = '#FFD59A'; // Soft orange
        } else { // Night
            document.body.style.backgroundColor = '#2C3E50'; // Dark blue
        }
    }
    updateTime();
    setInterval(updateTime, 1000);

    return timeElement;
}