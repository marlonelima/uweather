import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";

import {
  Container,
  Content,
  Right,
  Temperature,
  WeatherInfo,
  Info,
  SearchForm,
  SearchInput,
  SearchButton,
  History,
  WeatherDetails,
  FeelsLike,
  ToggleSidebar,
} from "../styles/pages/home";

import { Left } from "../styles/pages/home";
import { BackgroundImage } from "../components/BackgroundImage";

import SearchIcon from "../assets/icons/search.svg";
import ArrowIcon from "../assets/icons/arrow.svg";

import { WeatherService } from "../services/weather.service";
import { dateToShow, round } from "./../utils/formatter";
import { IWeather } from "./../@types/interfaces.d";

export default function Home() {
  const [actualWeather, setActualWeather] = useState({} as IWeather);
  const [searchField, setSearchField] = useState("");
  const [sidebarActive, setSidebarActive] = useState(true);

  useEffect(() => {}, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchField(event.target.value);
  }

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const weatherInfo = await WeatherService.getByCityName(searchField);
    if (weatherInfo) return setActualWeather(weatherInfo);

    return;
  }

  return (
    <Container>
      <BackgroundImage time={actualWeather.location?.localtime} />

      <Content>
        <ToggleSidebar
          active={sidebarActive}
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <Image src={ArrowIcon} alt="Arrow" width={16} height={16} />
        </ToggleSidebar>

        {actualWeather.location && (
          <Left>
            <FeelsLike>
              Sensação térmica {round(actualWeather.current.feelslike_c)}°
            </FeelsLike>
            <WeatherInfo>
              <Temperature>{round(actualWeather.current.temp_c)}°</Temperature>
              <Info>
                <span>
                  <p className="city">{actualWeather.location.name}</p>
                  <p>{dateToShow(actualWeather.location.localtime)}</p>
                </span>
                <div>
                  <Image
                    src={"https:" + actualWeather.current.condition.icon}
                    alt="Weathr Icon"
                    layout="fill"
                  />
                </div>
              </Info>
            </WeatherInfo>
          </Left>
        )}

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
                  {actualWeather.current && actualWeather.current.humidity}%
                </span>
              </li>
              <li>
                <span>Ventos</span>
                <span>
                  {actualWeather.current &&
                    round(actualWeather.current.wind_kph)}
                  km/h
                </span>
              </li>
              <li>
                <span>Pressão atmosférica</span>
                <span>
                  {actualWeather.current &&
                    round(actualWeather.current.pressure_mb)}
                  mb
                </span>
              </li>
            </ul>
          </WeatherDetails>
        </Right>
      </Content>
    </Container>
  );
}
