import { useEffect, useState, useRef } from 'react'
import { CityForecast } from '../../application/types/CityForecast'
import { Button } from '../../components/Button'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { SearchIcon } from '../../utils/icons'

const Forecast = () => {
  // const [cityNameInput, setCityNameInput] = useState('')
  const cityNameInputRef = useRef<null | HTMLInputElement>(null)
  const [cityName, setCityName] = useState('Brasilia')
  const [cityForecast, setCityForecast] = useState({} as CityForecast)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getWeatherData() {
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://goweather.herokuapp.com/weather/${cityName}`
        )

        const cityForecastResponse: CityForecast = await response.json()

        setCityForecast(cityForecastResponse)
      } finally {
        setIsLoading(false)
      }
    }

    getWeatherData()
  }, [cityName])

  // useEffect(() => {
  //   async function getUserLocation() {}

  //   getUserLocation()
  // }, [neighboorhood, streetName, cityName])

  function handleSearchCityWeather(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setCityName(cityNameInputRef.current?.value as string)
    // setCityName(cityNameInput)
  }

  return (
    <>
      <form onSubmit={handleSearchCityWeather}>
        <label htmlFor="">Nome da cidade</label>
        <input
          type="text"
          ref={cityNameInputRef}
          // value={cityNameInput}
          // onChange={e => setCityNameInput(e.target.value)}
        />
        <Button IconRight={SearchIcon}>pesquisar</Button>
      </form>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
      )}
    </>
  )
}

export default Forecast
