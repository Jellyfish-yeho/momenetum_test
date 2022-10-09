const API_KEY = "8a0f676251fd925c49bfb2fd57f640d1";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const temp = document.querySelector("#weather span:nth-child(2)")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${data.main.temp}°`;
    });
}
function onGeoError(){
    alert("Cant find you. No weather for you!");
}
//user의 geolocation 가져오기 : 인자로 success, error 함수 전달
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);