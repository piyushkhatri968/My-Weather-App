import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const SearchBox = ({ updateInfo }) => {
  const [city, setcity] = useState("");
  const [error, seterror] = useState(false);

  let CITY_URL = "https://api.openweathermap.org/data/2.5/weather";
  let KEY = "c6c9b9220b6cdd92536d7e238b8adc27";

  const getWeather = async () => {
    try {
      let api_url = await fetch(
        `${CITY_URL}?q=${city}&appid=${KEY}&units=metric`
      );
      let api_res = await api_url.json();
      let weatherData = {
        feelslike: api_res.main.feels_like,
        humidity: api_res.main.humidity,
        pressure: api_res.main.pressure,
        temperature: api_res.main.temp,
        description: api_res.weather[0].description,
        wind_speed: api_res.wind.speed,
        city: api_res.name,
        country: api_res.sys.country,
      };
      console.log(api_res);
      return weatherData;
    } catch (err) {
      throw err;
    }
  }; 

  const searchHandler = (event) => {
    setcity(event.target.value);
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      setcity("");
      let newInfo = await getWeather();
      updateInfo(newInfo);
      seterror(false)
    } catch (err) {
      seterror(true);
      throw err;
    }
  };
  return (
    <div className="Search-Box-Container">
      <form action="" onSubmit={submitHandler}>
        <TextField
          id="city-name"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={searchHandler}
        />
        <Button variant="contained" type="submit" className="py-[20px]">
          Search
        </Button>
      </form>
        {error && <p style={{ color: "red", fontSize:"1.2rem" }}>No such place in our data:</p>} 
    </div>
  );
};

export default SearchBox;
