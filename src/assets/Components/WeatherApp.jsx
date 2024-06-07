import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
const WeatherApp = () => {
    let KEY = "c6c9b9220b6cdd92536d7e238b8adc27";
  const [weatherInfo, setWeatherInfo] = useState({
    temperature: "",
    humidity: "",
    wind_speed: "",
    city: "",
    pressure: "",
    country: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherByLocation = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const locationResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=metric`
          );
          const locationData = await locationResponse.json();
          const weatherData = {
            temperature: locationData.main.temp,
            humidity: locationData.main.humidity,
            wind_speed: locationData.wind.speed,
            city: locationData.name,
            pressure: locationData.main.pressure,
            country: locationData.sys.country,
            description: locationData.weather[0].description,
            feelslike: locationData.main.feels_like,
          };
          setWeatherInfo(weatherData);
          setLoading(false);
        });
      } catch (error) {
        console.error("Error fetching weather by location:", error);
        setLoading(false);
      }
    };
    fetchWeatherByLocation();
  }, []);

  const updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
