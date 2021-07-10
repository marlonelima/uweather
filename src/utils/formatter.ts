export function round(value: number) {
  return Math.round(value);
}

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jun",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export function epochToDate(epoch: string) {
  //const date = new Date(epoch * 1000);

  const date = new Date(epoch);

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes} - ${day}, ${month}, ${year} `;
}

export function stringToDate(dateString: string) {
  //const date = new Date(epoch * 1000);

  const date = new Date(dateString);
  return date.getHours();
}
