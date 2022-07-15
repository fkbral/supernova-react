import React, { RefObject } from 'react'
import { CityForecast } from '../../application/types/CityForecast'
import { Button } from '../../components/Button'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { SearchIcon } from '../../utils/icons'

type ForecastClassComponentState = {
  cityName: string
  isLoading: boolean
  cityForecast: CityForecast | null
  cityNameInputValue: string
  cityNameToSearch: string
}

class ForecastClassComponent extends React.Component {
  public cityNameInputRef: RefObject<HTMLInputElement> | null = null

  constructor(props: any) {
    super(props)

    this.state = {
      cityName: 'Brasilia',
      isLoading: false,
      cityForecast: null,
      cityNameInputValue: '',
      cityNameToSearch: 'Brasilia',
    } as ForecastClassComponentState

    this.cityNameInputRef = React.createRef()
  }

  handleSearchCityWeather(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    this.setState(previousState => ({
      ...previousState,
      cityName: this.cityNameInputRef?.current?.value,
    }))
  }

  async getWeatherData() {
    try {
      this.setState(previousState => ({ ...previousState, isLoading: true }))

      const response = await fetch(
        `https://goweather.herokuapp.com/weather/${this.state.cityName}`
      )

      const cityForecastResponse: CityForecast = await response.json()

      this.setState(previousState => ({
        ...previousState,
        cityForecast: cityForecastResponse,
      }))
    } catch (error) {
      console.error(error)
    } finally {
      this.setState(previousState => ({ ...previousState, isLoading: false }))
    }
  }

  // é basicamente um useEffect com array de dependências vazio
  // useEffect(() => {}, [])
  componentDidMount() {
    this.getWeatherData()
  }

  componentDidUpdate(
    _previousProps,
    previousState: ForecastClassComponentState
  ) {
    if (previousState.cityName !== this.state.cityName) {
      this.getWeatherData()
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.handleSearchCityWeather}>
          <label htmlFor="">Nome da cidade</label>
          <input
            type="text"
            ref={this.cityNameInputRef}
            // value={this.state.cityNameInputValue}
            // onChange={e =>
            //   this.setState(previousState => ({
            //     ...previousState,
            //     cityNameInputValue: e.target.value,
            //   }))
            // }
          />
          <Button IconRight={SearchIcon}>pesquisar</Button>
        </form>

        {this.state.isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <h1>{this.state.cityName}</h1>
            {this.state.cityForecast && (
              <>
                <h2>{this.state.cityForecast.description}</h2>
                <p>
                  Temperatura atual:{' '}
                  <span>{this.state.cityForecast.temperature}</span>
                </p>
              </>
            )}
          </>
        )}
      </>
    )
  }
}

export default ForecastClassComponent
