export interface IWeather {
  location: {
    name: string;
    region: string;
    country: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    pressure_mb: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
  };
}
