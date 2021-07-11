import { days, months } from './daysandmonths'
import { formatToLocationTime } from './time'

export function round(value: number) {
  return Math.round(value)
}

export function dateToShow(timeshift: number) {
  const date = formatToLocationTime(timeshift)

  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  let hours = date.getHours()
  let minutes = date.getMinutes()

  return `${padStart(hours)}:${padStart(minutes)} - ${day}, ${month}, ${year} `
}

export function getHour(timeshift: number) {
  const date = formatToLocationTime(timeshift)
  console.log(date.getHours())
  return date.getHours()
}

function padStart(number: number) {
  return number.toString().padStart(2, '0')
}
