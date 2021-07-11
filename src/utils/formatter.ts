import { days, months } from "./daysandmonths";

export function round(value: number) {
  return Math.round(value);
}

export function dateToShow(dateString: string) {
  const date = new Date(dateString);

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes} - ${day}, ${month}, ${year} `;
}

export function getHour(dateString: string) {
  const date = new Date(dateString);

  return date.getHours();
}
