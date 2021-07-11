import { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image'

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

import { WeatherService } from '../services/weather.service'
import { round } from './../utils/formatter'
import { INewWeather } from './../@types/interfaces.d'
import { PositionService } from '../services/position.service'
import { WeatherDisplay } from '../components/WeatherDisplay'

export default function Home() {
  const [actualWeather, setActualWeather] = useState({} as INewWeather)
  const [searchField, setSearchField] = useState('')
  const [sidebarActive, setSidebarActive] = useState(true)

  useEffect(() => {
    getMyWeather()
  }, [])

  async function getMyWeather() {
    const { city } = await PositionService.getMyCity()

    if (!city) return

    const myWeather = await WeatherService.getByCityName(city)

    if (!myWeather) return

    return setActualWeather(myWeather)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchField(event.target.value)
  }

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    const weatherInfo = await WeatherService.getByCityName(searchField)
    if (weatherInfo) return setActualWeather(weatherInfo)

    return
  }

  return (
    <Container>
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
              <Image src={SearchIcon} alt="Search" />
            </SearchButton>
          </SearchForm>

          <History>
            <ul>
              <li>Birmighan</li>
              <li>Manchester</li>
              <li>New York</li>
              <li>California</li>
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
