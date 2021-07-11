import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// prettier-ignore
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city } = req.query;

  try {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json",
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: city,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (err) {
    res.status(400).json({ error: true });
  }
}
