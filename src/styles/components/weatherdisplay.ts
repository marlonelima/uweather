import styled from 'styled-components'

export const FeelsLike = styled.p`
  color: #fff;
  font-size: 1.1rem;
`

export const WeatherInfo = styled.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;

  p {
    align-self: flex-end;
  }
`

export const Temperature = styled.p`
  font-size: 8rem;
  font-weight: 600;
  letter-spacing: -7px;
  color: #fff;

  @media screen and (max-width: 1000px) {
    font-size: 5rem;
  }
`

export const Info = styled.div`
  color: #fff;
  margin-left: 25px;
  display: inline-flex;

  .city {
    font-size: 3rem;
    font-weight: 600;
  }

  img {
    width: 64px;
    margin-top: 5px;
    height: 64px;
  }

  div {
    position: relative;
    height: 72px;
    width: 72px;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 2rem;
    }
  }
`
