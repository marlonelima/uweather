import axios from 'axios'

export const WeatherService = {
  async getByCityName(city: string) {
    try {
      return (await axios.get('/api/weather/getbycityname/' + city)).data
    } catch (err) {
      return false
    }
  }
}
