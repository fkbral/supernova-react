import { useEffect, useState } from 'react'
import { CityForecast } from '../../application/types/CityForecast'

const Forecast = () => {
  const cityName = 'Brasilia'
  const [cityForecast, setCityForecast] = useState({} as CityForecast)

  useEffect(() => {
    async function getWeatherData() {
      const response = await fetch(
        `https://goweather.herokuapp.com/weather/${cityName}`
      )

      const cityForecastResponse: CityForecast = await response.json()

      setCityForecast(cityForecastResponse)
    }

    getWeatherData()
  }, [])

  return (
    <>
      <h1>{cityName}</h1>
      {cityForecast.temperature && (
        <>
          <h2>{cityForecast.description}</h2>
          <p>
            Temperatura atual: <span>{cityForecast.temperature}</span>
          </p>
        </>
      )}
    </>
  )
}

export default Forecast
