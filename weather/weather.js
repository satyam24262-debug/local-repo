const input_box = document.querySelector("#input");
const searchBtn = document.getElementById("button");
const weather_img = document.getElementsByClassName("img");
const temperature = document.querySelector("#temperature");
const weather_box = document.querySelector("#weather-box");
const humidity = document.querySelector("#humidity");
const windspeed = document.querySelector(".windspeed");

 async function weatherShow(city){
    const api_key = "484dbacc865d280830cbb696613ecd33";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data =  await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);
    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML =  `${weather_data.wind.speed}Km/H`
    
}

searchBtn.addEventListener("click" ,()=>{
    weatherShow(input_box.value);
})