import axios from 'axios'

export const PositionService = {
  async getMyCity() {
    try {
      return (await axios.get('https://ipwhois.app/json/')).data
    } catch (err) {
      return
    }
  }
}
