import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const WeatherAPI = axios.create({ baseURL: "http://api.weatherapi.com/v1" });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { location: myCoordinates } = req.query;
  try {
    const response = await WeatherAPI.get("/current.json", {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: myCoordinates,
      },
    });

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err.response);
    res.status(400).json({ error: true });
  }
}
