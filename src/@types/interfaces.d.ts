export interface IWeather {
  location: {
    name: string
    region: string
    country: string
    localtime_epoch: number
    localtime: string
  }
  current: {
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
      text: string
      icon: string
    }
    wind_kph: number
    pressure_mb: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
  }
}

export interface INewWeather {
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  timezone: number
  name: string
}
