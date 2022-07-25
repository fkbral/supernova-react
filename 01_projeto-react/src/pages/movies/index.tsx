import { Link, Outlet } from 'react-router-dom'
import { moviesMock } from '../../application/mocks'

type Movie = {
  id: string
  title: string
  year: number
  runtimeInMinutes?: number
  genres?: string[]
  description?: string
}

const Movies = () => {
  const movies = moviesMock

  return (
    <>
      <Outlet />

      <h1>Filmes</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>
              <strong>{movie.title}</strong> - <span>{movie.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Movies
