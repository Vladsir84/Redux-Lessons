import { getCityData } from "./weather.getaway";
export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';

export const weatherDataRecieved = weatherData => {
    return {
        type: WEATHER_DATA_RECIEVED,
        payload: {
            weatherData,
        },
    };
};

export const getWeatherData = (cityName) => {
    return function (dispatch) {
        getCityData(cityName)
            .then(weatherData => {
                dispatch(weatherDataRecieved(weatherData));
            });
    };
};