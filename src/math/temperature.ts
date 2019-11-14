export function celciusFromFarenheit(degree: number): number {
  return (degree - 32) * (5 / 9)
}
export function farenheightFromCelcius(degree: number): number {
  return (degree + 32) * (9 / 5)
}

export function kelvinFromCelcius(degree: number): number {
  return degree + 273.15
}
export function celciusFromKelvin(degree: number): number {
  return degree - 273.15
}

export function kelvinFromFarenheit(degree: number): number {
  return kelvinFromCelcius(celciusFromFarenheit(degree))
}
export function farenheitFromKelvin(degree: number): number {
  return farenheightFromCelcius(celciusFromKelvin(degree))
}
