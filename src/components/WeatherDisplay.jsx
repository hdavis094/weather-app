import React from 'react';
import useWeather from '../hooks/useWeather';

const WeatherDisplay = () => {
    const { data, loading, error } = useWeather();

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    if (data && data.main) {
        return (
            <ul className="text-white text-3xl max-w-md text-center">
                {data.name}: {data.main.temp}F
            </ul>

        );
    }
    return <p className="text-white text-3xl max-w-md text-center">Please search for a city to display weather data.</p>
};

export default WeatherDisplay;