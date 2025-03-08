const apiKey = "3287f02eb1532edbc83718c032a6caff"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchText = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function fetchWeatherData(city){
    const weatherData = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await weatherData.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
}

searchBtn.addEventListener("click", () => {
    fetchWeatherData(searchText.value);
})

