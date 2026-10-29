const apiKey = "2479951f6717043d5f768675d095e743";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    getWeather(city);
});

cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

async function getWeather(city) {

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        let emoji = "☁️";

        switch (data.weather[0].main) {
            case "Clear":
                emoji = "☀️";
                break;
            case "Clouds":
                emoji = "☁️";
                break;
            case "Rain":
                emoji = "🌧️";
                break;
            case "Snow":
                emoji = "❄️";
                break;
            case "Thunderstorm":
                emoji = "⛈️";
                break;
            case "Drizzle":
                emoji = "🌦️";
                break;
            case "Mist":
                emoji = "🌫️";
                break;
        }

        document.getElementById("city").textContent =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temperature").textContent =
            `Temperature: ${data.main.temp} °C`;

        document.getElementById("feelsLike").textContent =
            `Feels Like: ${data.main.feels_like} °C`;

        document.getElementById("description").textContent =
            `Condition: ${emoji} ${data.weather[0].description}`;

        document.getElementById("humidity").textContent =
            `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").textContent =
            `Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
}
