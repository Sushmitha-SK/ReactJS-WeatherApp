import Axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
const API_KEY = "03432530013211c52aaa31418e79a23e";


export const WeatherIcons = {
  "01d": "/weatherlens/icons/sunny.svg",
  "01n": "/weatherlens/icons/night.svg",
  "02d": "/weatherlens/icons/day.svg",
  "02n": "/weatherlens/icons/cloudy-night.svg",
  "03d": "/weatherlens/icons/cloudy.svg",
  "03n": "/weatherlens/icons/cloudy.svg",
  "04d": "/weatherlens/icons/perfect-day.svg",
  "04n": "/weatherlens/icons/cloudy-night.svg",
  "09d": "/weatherlens/icons/rain.svg",
  "09n": "/weatherlens/icons/rain-night.svg",
  "10d": "/weatherlens/icons/rain.svg",
  "10n": "/weatherlens/icons/rain-night.svg",
  "11d": "/weatherlens/icons/storm.svg",
  "11n": "/weatherlens/icons/storm.svg",
};


const Container = styled.div `
  display:flex;
  flex-direction:column;
  margin:auto;
  align-items:center;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
  padding: 20px 10px;
  border-radius:4px;
  width: 380px;
`;

const AppLabel = styled.span `
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.span `
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();

    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await Axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,);
    
    updateWeather(response.data);
  };


    return (
      <Container>
        <AppLabel>React Weather App</AppLabel>
        {city && weather ? (
          <WeatherComponent weather={weather} city={city} />
        ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        )}
      </Container>
    );
  }
  

  export default App;
