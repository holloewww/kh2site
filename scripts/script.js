const infoBoxes = document.querySelectorAll('.info-box');
const hoverSound = document.getElementById('hover-sound');
hoverSound.volume = 0.3;

infoBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; 
        hoverSound.play(); 
    });
});

function updateTime() {
    const footerTime = document.getElementById('footer-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    footerTime.innerHTML = `Current Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime(); 
