import styled from 'styled-components'
import { darken } from 'polished'

interface ISidebar {
  active: boolean
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1920px;
  background: black;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  z-index: 5;
  display: inline-flex;

  @media screen and (max-width: 700px) {
    display: block;
  }
`

export const Left = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 60px;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: 65%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

export const Right = styled.div<ISidebar>`
  width: 40%;
  transition: 1s;
  max-width: 615px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  padding-left: 90px;
  position: absolute;
  right: ${({ active }) => (active ? 0 : '-40vw')};

  @media screen and (max-width: 1000px) {
    width: 35%;
    padding-left: 30px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    background: #2e2e2e;
    max-width: 100%;
  }
`

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

// search form

export const SearchForm = styled.form`
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
`

export const SearchInput = styled.input`
  color: #fff;
  margin-top: 80px;
  margin-right: 20px;
  flex: 1;
  height: 40px;

  border-bottom: 1px solid #bababa;

  outline: none;
  ::placeholder {
    color: #bababa;
  }

  @media screen and (max-width: 1000px) {
    width: 60%;
  }
`

export const SearchButton = styled.button`
  width: 150px;
  height: 120px;
  background: #e06004;
  color: #fff;
  transition: 0.3s;
  position: relative;

  :hover {
    cursor: pointer;
    background: ${darken(0.1, '#e06004')};
  }

  @media screen and (max-width: 1000px) {
    width: 50px;
    height: 50px;

    img {
      width: 50%;
      height: 50%;
    }
  }
`

export const History = styled.div`
  width: calc(100% - 100px);
  margin-top: 30px;

  border-bottom: 1px solid #d4d4d4;

  ul {
    display: block;
  }

  ul li {
    color: #bababa;
  }

  ul li:not(:last-child) {
    margin-bottom: 30px;
  }

  ul li:last-child {
    margin-bottom: 70px;
  }

  @media screen and (max-width: 1000px) {
    width: calc(100% - 7%);
  }
`

export const WeatherDetails = styled.div`
  width: calc(100% - 100px);
  margin-top: 30px;

  p {
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;
  }

  ul {
    display: block;
    width: 100%;
    margin-top: 30px;
  }

  ul li {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    color: #d6d6d6;
  }

  ul li:not(:last-child) {
    margin-bottom: 30px;
  }

  ul li:last-child {
    margin-bottom: 70px;
  }

  @media screen and (max-width: 1000px) {
    width: calc(100% - 7%);
  }
`

export const ToggleSidebar = styled.button<ISidebar>`
  width: 30px;
  height: 30px;
  transition: 1s;
  background: orange;
  position: absolute;
  top: 0;
  right: ${({ active }) => (active ? '40%' : '0')};
  cursor: pointer;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    transition: 1s;
    transform: rotateY(${({ active }) => (active ? '180deg' : 0)});
  }
`
