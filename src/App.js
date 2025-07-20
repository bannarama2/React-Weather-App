import React, { useState } from 'react';
import ForecastBox from './Forecast.js';
import SearchField from './Search.js';

function App() {
  const api_key = process.env.REACT_APP_API_KEY;
  console.log("API key: ", api_key);

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();
  const [error, setError] = useState();

  async function getWeather() {
    if (!city) {
      return;
    }

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${encodeURIComponent(city)}&days=3`);
      const data = await response.json();

      if (data && data.location) {
        setWeather(data);
        setError('');
      } else {
        setWeather(null);
        setError('City not found');
      }

    } catch (err) {
      setWeather(null);
      setError('Error fetching response');
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      getWeather();
    }
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-black'> {/*Web browser screen*/}
      <div className='p-5 bg-gradient-to-tr from-blue-400 to-purple-900 flex justify-between flex-col items-center aspect-[9/16] rounded-[20px]'> {/*Phone screen*/} {/*bg-[url("/img/leaves.png")] bg-contain bg-no-repeat bg-center*/}
        <SearchField city={city} setCity={setCity} handleKeyPress={handleKeyPress} getWeather={getWeather} />

        {error && (<div className="error">{error}</div>)}

        {weather && (
          <div className='p-4 bg-white/20 backdrop-blur-2xl w-[260px] h-[240px] flex justify-between flex-col items-center rounded-2xl'>
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <h1>{weather.current.temp_c}°C</h1>
            <p>{weather.current.condition.text}</p>
            <p>Humidity: {weather.current.humidity}% | Wind: {weather.current.wind_kph} kph</p>
            <img src={weather.current.condition.icon} alt='weather icon'></img>
          </div>
        )}

        {weather && (
          <ForecastBox weather={weather} />
        )}

      </div>
    </div >
  );
}

export default App;