async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("result").innerHTML = "⚠️ Please enter a city name.";
        return;
    }

    const apiKey = "ce1275b0e22b5b9041a33f1a32bd0bb6"; // FREE demo key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (response.status === 404) {
        document.getElementById("result").innerHTML = "❌ City not found!";
        return;
    }

    const data = await response.json();

    document.getElementById("result").innerHTML = `
        🌍 <b>${data.name}</b><br>
        🌡 Temperature: <b>${data.main.temp}°C</b><br>
        ☁ Condition: <b>${data.weather[0].description}</b>
    `;
}