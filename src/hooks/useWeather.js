
import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const weather_api_url = "/api/search"

const useWeather = () => {
    const {state,dispatch} = useContext(WeatherContext);

    const fetchWeather = async (city) => {
        if (!city) return;
        dispatch({ type: 'FETCH_START' });

        try {
            const response = await fetch(`${weather_api_url}/${encodeURIComponent(city)}`);

            if(!response.ok) {
                throw new Error(`Weather request failed: ${response.status}`);
            }

            const data = await response.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'FETCH_ERROR', payload: err.message});
        }
    };

    return { ...state,fetchWeather };
};

export default useWeather;