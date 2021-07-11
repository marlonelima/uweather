import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// prettier-ignore
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { location } = req.query

  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          appid: process.env.WEATHER_API_KEY,
          q: location,
          lang: 'pt',
          units: 'metric'
        }
      }
    )

    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: true })
  }
}
