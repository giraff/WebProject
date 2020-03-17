const weather = document.querySelector(".js-weather");

const API_KEY = "2496dbf650cd7793084f7f5b27c2ee4e";
const COORDS = 'coords';
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
//JS는 웹사이트로 REQ를 보내고 응답을 통해 데이털르 받을 수 있는데
//JS가 이렇게 강력해진 이유는, refresh없이도 우리 웹사이트에 적용할 수 있기 때문
//웹사이트를 새로고침하지 않고도 바로 실시간으로 데이터 응답을 확인할 수 있는 것.
//이유는 JS가 보이지 않는 곳에서는 계속 데이터를 가져오고 있기 때문.
//우리가 할 것 : 새로고침 없이 데이터를 가져오는 것.

function getWeather(lat,lon){
    //데아터를 얻는 방법 - fetch(가져올 데이터) 사용
    //fetch(``) , 주의: 백틱(``) 사용할 것.
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function(response){
            return response.json();
        // then()이 실행될 때는 데이터가 우리에게 완전히 들어온 때, 
        // JSON 데이터를 가져올 것. 그걸 response에서 가져오고 싶다.
    })
        .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
    });
    //유튜브 풀스택 코스에서 상세히 다룰 내용 (JS가 어떻게 동작하는 지, JS의 네트워크는 어떻게 구성되어있는지)
}

function saveCoords(coordsObj){ // 현재 내 위치의 위도와 경도 LS에 저장
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position){//API 연결 성공 시 
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}
function handleGeoError(){ // API 연결 실패
    console.log("can't access")
}
function askForCoords(){//현재 위치 정보를 읽는다.
    //navigator API
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === ""){// LS에 위치정보가 null
        askForCoords();
        console.log(true)
    }else{
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init()