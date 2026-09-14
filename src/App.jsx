import WeatherDisplay from './components/WeatherDisplay';
import useWeather from './hooks/useWeather';
import { useState } from 'react';

function App() {
  const [city,setCity] = useState('');
  const {fetchWeather} = useWeather();

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div>
      <div className="bg-black p-8">
        <h1 className="text-white text-6xl">Weather App</h1>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-2 justify-center m-10">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city"
          className="grid-row-1 bg-white w-md rounded-xl px-4 justify-center"
          />
        <button
        onClick={handleSearch}
        className="grid-row-2 rounded-xl w-md bg-blue-800 justify-center hover:bg-sky-700 max-h-10"
        >Search</button>
        <div className="grid-row-3 justify-center">
        <WeatherDisplay />
        </div>
      </div>
    </div>
  );
}

export default App
