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
            <table className="text-white text-xl">
                <thead>
                    <tr>
                        <th>Weather for {data.name}</th>
                    </tr>
                </thead>
                <tr>
                    <td>Description:</td>
                    <td>{data.weather[0].description}</td>
                </tr>
                <tr>
                    <td>Temp(F):</td>
                    <td>{data.main.temp}</td>
                </tr>
                <tr>
                    <td>Feels Like(F):</td>
                    <td>{data.main.feels_like}</td>
                </tr>
                <tr>
                    <td>Humidity:</td>
                    <td>{data.main.humidity}</td>
                </tr>

            </table>
            
            // <ul className="text-white text-3xl max-w-md text-center">
            //     {data.name}: {data.main.temp}F
            // </ul>

        );
    }
    return <p className="text-white text-3xl max-w-md text-center">Please search for a city to display weather data.</p>
};

export default WeatherDisplay;