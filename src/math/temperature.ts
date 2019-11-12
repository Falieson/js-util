export function celciusFromFarenheit(degree: number) {
  return (degree - 32) * (5 / 9)
}
export function farenheightFromCelcius(degree: number) {
  return (degree + 32) * (9 / 5)
}

export function kelvinFromCelcius(degree: number) {
  return degree + 273.15
}
export function celciusFromKelvin(degree: number) {
  return degree - 273.15
}

export function kelvinFromFarenheit(degree: number) {
  return kelvinFromCelcius(celciusFromFarenheit(degree))
}
export function farenheitFromKelvin(degree: number) {
  return farenheightFromCelcius(celciusFromKelvin(degree))
}
