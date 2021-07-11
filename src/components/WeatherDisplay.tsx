import Image from 'next/image'

import {
  FeelsLike,
  Info,
  Temperature,
  WeatherInfo
} from '../styles/components/weatherdisplay'

import { dateToShow, round } from '../utils/formatter'
import { INewWeather, IWeather } from '../@types/interfaces'

interface IProps {
  weather: INewWeather
}

export const WeatherDisplay = ({ weather }: IProps) => {
  return (
    <>
      <FeelsLike>Sensação térmica {round(weather.main.feels_like)}°</FeelsLike>
      <WeatherInfo>
        <Temperature>{round(weather.main.temp)}°</Temperature>
        <Info>
          <span>
            <p className="city">{weather.name}</p>
            <p>{dateToShow(weather.timezone)}</p>
          </span>
          <div>
            {/* <Image
              alt="Weathr Icon"
              src={'https:' + weather.current.condition.icon}
              layout="fill"
            /> */}
          </div>
        </Info>
      </WeatherInfo>
    </>
  )
}
