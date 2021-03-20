import axios from "axios";

const baseUrl = "http://api.weatherstack.com";

// http://api.weatherstack.com/current?access_key=a2b2dfa72a6a27ad6a47edd770f516e7&query=New%20York

export const currentWeather = async (city) => {
  const response = await axios.get(`${baseUrl}/current`, {
    params: {
      access_key: process.env.REACT_APP_API_KEY,
      query: city,
    },
  });
  return response.data;
};
