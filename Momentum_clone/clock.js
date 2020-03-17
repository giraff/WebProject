const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours
    }:${minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`
}
function init(){
    getTime(); //먼저 시간을 얻고 (띄우고)
    setInterval(getTime,1000);
}
init();