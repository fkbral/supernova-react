import { vi, beforeAll, afterAll, afterEach, describe, it } from 'vitest'
import { render } from '@testing-library/react'
import Forecast from '../../pages/forecast'
import { CityForecast } from '../../application/types/CityForecast'

import { setupServer } from 'msw/node'
import { rest } from 'msw'

const forecastMock: CityForecast = {
  temperature: '+26 °C',
  wind: '7 km/h',
  description: 'Ensolarado',
  forecast: [
    {
      day: '1',
      temperature: '+26 °C',
      wind: '9 km/h',
    },
    {
      day: '2',
      temperature: '+31 °C',
      wind: '3 km/h',
    },
    {
      day: '3',
      temperature: '26 °C',
      wind: '24 km/h',
    },
  ],
}

// no jest
// global.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(forecastMock),
//   })
// )

const handlers = [
  rest.get(
    `https://goweather.herokuapp.com/weather/*`,
    (request, response, context) => {
      return response(context.status(200), context.json(forecastMock))
    }
  ),
]

const server = setupServer(...handlers)

describe('Forecast component', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())
  it("should be able to render a city's weather", async () => {
    const { findByText } = render(<Forecast />)

    expect(await findByText(/Ensolarado/im)).toBeInTheDocument()
  })
})
