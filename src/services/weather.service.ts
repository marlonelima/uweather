import { api } from "./../config/api";
export const WeatherService = {
  async getMyWeather({ coords }: GeolocationPosition) {
    try {
      return (await api.get("/weather/getbycityname/" + `porto_seguro`)).data;
    } catch (err) {
      return false;
    }
  },

  async getByCityName(city: string) {
    const cityFormatted = city
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(" ", "_");

    try {
      return (await api.get("/weather/getbycityname/" + cityFormatted)).data;
    } catch (err) {
      return false;
    }
  },
};
