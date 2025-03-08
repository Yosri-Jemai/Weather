const apiKey = "3287f02eb1532edbc83718c032a6caff"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=france";

async function fetchWeatherData() {
    const weatherData = await fetch(apiUrl+`&appid=${apiKey}`);
    var data = await weatherData.json();
    console.log(data);
}
fetchWeatherData();

