import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { HeaderMenu } from './components/HeaderMenu'
import Movies from './pages/movies'
import Movie from './pages/movies/[movie_id]'
import ShoppingList from './pages/shopping-list'
import Forecast from './pages/forecast'
import ForecastClassComponent from './pages/forecast-class-component'
import Login from './pages/login'
import { AuthProvider } from './application/hooks/useAuth'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './application/theme'
import { GlobalStyles } from './global-styles'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthProvider>
        <BrowserRouter>
          <HeaderMenu />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="movies" element={<Movies />}>
              <Route path=":movieId" element={<Movie />} />
            </Route>

            {/* <Route path="movies/:movieId" element={<Movie />} /> */}

            <Route path="shopping-cart" element={<ShoppingList />} />

            <Route path="forecast" element={<Forecast />} />

            <Route
              path="forecast-class-component"
              element={<ForecastClassComponent />}
            />

            <Route path="login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
