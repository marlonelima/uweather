export function formatToLocationTime(timezone: number) {
  var now = new Date()
  var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000)

  if (Math.sign(timezone) === 1) {
    return new Date(utc.getTime() + Math.abs(timezone) * 1000)
  }

  return new Date(utc.getTime() - Math.abs(timezone) * 1000)
}
