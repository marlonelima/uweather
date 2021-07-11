import axios from 'axios'

export const WeatherService = {
  async getByCityName(location: string) {
    try {
      const response = await axios.get(
        '/api/weather/getbylocation/' + location,
        {}
      )

      return response.data
    } catch (err) {
      return false
    }
  }
}
