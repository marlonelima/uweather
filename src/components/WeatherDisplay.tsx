import Image from 'next/image'

import {
  FeelsLike,
  Info,
  Temperature,
  WeatherInfo
} from '../styles/components/weatherdisplay'

import { dateToShow, round } from '../utils/formatter'
import { IWeather } from '../@types/interfaces'

interface IProps {
  weather: IWeather
}

export const WeatherDisplay = ({ weather }: IProps) => {
  return (
    <>
      <FeelsLike>
        Sensação térmica {round(weather.current.feelslike_c)}°
      </FeelsLike>
      <WeatherInfo>
        <Temperature>{round(weather.current.temp_c)}°</Temperature>
        <Info>
          <span>
            <p className="city">{weather.location.name}</p>
            <p>{dateToShow(weather.location.localtime)}</p>
          </span>
          <div>
            <Image
              src={'https:' + weather.current.condition.icon}
              alt="Weathr Icon"
              layout="fill"
            />
          </div>
        </Info>
      </WeatherInfo>
    </>
  )
}
