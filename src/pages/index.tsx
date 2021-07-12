import { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import axios from 'axios'

import {
  Container,
  Content,
  Right,
  SearchForm,
  SearchInput,
  SearchButton,
  History,
  WeatherDetails,
  ToggleSidebar
} from '../styles/pages/home'

import { Left } from '../styles/pages/home'
import { BackgroundImage } from '../components/BackgroundImage'

import SearchIcon from '../assets/icons/search.svg'
import ArrowIcon from '../assets/icons/arrow.svg'
import LoadingSpinner from '../assets/spinner.gif'

import { WeatherService } from '../services/weather.service'
import { round } from './../utils/formatter'
import { INewWeather } from './../@types/interfaces.d'
import { PositionService } from '../services/position.service'
import { WeatherDisplay } from '../components/WeatherDisplay'

export async function getStaticProps() {
  const response = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        appid: process.env.WEATHER_API_KEY,
        q: 'São Paulo, São Paulo',
        lang: 'pt',
        units: 'metric'
      }
    }
  )

  return {
    props: { weather: response.data },
    revalidate: 120
  }
}

interface IProps {
  weather: INewWeather
}

export default function Home({ weather }: IProps) {
  const [actualWeather, setActualWeather] = useState(weather)
  const [searchField, setSearchField] = useState('')
  const [sidebarActive, setSidebarActive] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getMyWeather()
  }, [])

  async function getMyWeather() {
    const { city } = await PositionService.getMyCity()
    if (!city) return

    const myWeather = await WeatherService.getByCityName(city)
    if (!myWeather) return

    return setActualWeather(myWeather), setIsLoading(false)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchField(event.target.value)
  }

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault(), setIsLoading(true)
    const weatherInfo = await WeatherService.getByCityName(searchField)
    if (!weatherInfo) return

    return setActualWeather(weatherInfo), setIsLoading(false)
  }

  async function handlePresetClick(city: string) {
    setIsLoading(true)
    const myWeather = await WeatherService.getByCityName(city)
    if (!myWeather) return

    return setActualWeather(myWeather), setIsLoading(false)
  }

  return (
    <Container>
      <Head>
        <title>UWeather</title>
      </Head>
      <BackgroundImage time={actualWeather.timezone} />

      <Content>
        <ToggleSidebar
          active={sidebarActive}
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <Image src={ArrowIcon} alt="Arrow" width={16} height={16} />
        </ToggleSidebar>

        <Left>
          {actualWeather.main && <WeatherDisplay weather={actualWeather} />}
        </Left>

        <Right active={sidebarActive}>
          <SearchForm onSubmit={handleSubmit}>
            <SearchInput
              onChange={handleInputChange}
              type="text"
              placeholder="Another location"
            />
            <SearchButton>
              <Image
                src={isLoading ? LoadingSpinner : SearchIcon}
                alt="Search"
                layout="intrinsic"
              />
            </SearchButton>
          </SearchForm>

          <History>
            <ul>
              <li>
                <button onClick={() => handlePresetClick('Tóquio, Japão')}>
                  Tóquio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePresetClick('Manchester, Inglattera')}
                >
                  Manchester
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePresetClick('Los Angeles, Califórnia')}
                >
                  Los Angeles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePresetClick('São Petersburgo, Rússia')}
                >
                  São Petersburgo
                </button>
              </li>
            </ul>
          </History>

          <WeatherDetails>
            <p>Detalhes do clima</p>
            <ul>
              <li>
                <span>Umidade do ar</span>
                <span>
                  {actualWeather.main && actualWeather.main.humidity}%
                </span>
              </li>
              <li>
                <span>Ventos</span>
                <span>
                  {actualWeather.main && round(actualWeather.wind.speed)}
                  km/h
                </span>
              </li>
              <li>
                <span>Pressão atmosférica</span>
                <span>
                  {actualWeather.main && round(actualWeather.main.pressure)}
                  mb
                </span>
              </li>
            </ul>
          </WeatherDetails>
        </Right>
      </Content>
    </Container>
  )
}
