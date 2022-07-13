import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { HeaderMenu } from './components/HeaderMenu'
import Movies from './pages/movies'
import Movie from './pages/movies/[movie_id]'
import ShoppingList from './pages/shopping-list'

export function App() {
  return (
    <BrowserRouter>
      <HeaderMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          {/* <Route
            index
            element={
              <main>
                <h1>404</h1>
              </main>
            }
          /> */}
          <Route path=":movieId" element={<Movie />} />
        </Route>
        <Route path="shopping-cart" element={<ShoppingList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
