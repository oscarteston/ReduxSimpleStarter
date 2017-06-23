import axios from 'axios';

const API_KEY = '7d15c76b5f6e5468d3477aaa027e8d9c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},es`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}