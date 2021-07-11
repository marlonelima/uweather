import { days, months } from './daysandmonths'
import { formatToLocationTime } from './time'
export function round(value: number) {
  return Math.round(value)
}

export function dateToShow(dateString: number) {
  const date = formatToLocationTime(dateString)

  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  let hours = date.getHours()
  let minutes = date.getMinutes()

  return `${padStart(hours)}:${padStart(minutes)} - ${day}, ${month}, ${year} `
}

export function getHour(dateString: number) {
  const date = new Date(dateString * 1000)
  return date.getUTCHours()
}

export function normalizeCity(city: string) {
  return city
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(' ', '_')
}

function padStart(number: number) {
  return number.toString().padStart(2, '0')
}
