export type CityForecast = {
  temperature: string
  wind: string
  description: string
  forecast: DayForecast[]
}

type DayForecast = {
  day: string
  temperature: string
  wind: string
}
