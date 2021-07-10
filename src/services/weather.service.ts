import { api } from "./../config/api";
export const WeatherService = {
  async getMyWeather({ coords }: GeolocationPosition) {
    try {
      return (
        await api.get(
          "/getmyweather/" + `${coords.latitude},${coords.longitude}`
        )
      ).data;
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
      return (await api.get("/bycityname/" + cityFormatted)).data;
    } catch (err) {
      return false;
    }
  },
};
