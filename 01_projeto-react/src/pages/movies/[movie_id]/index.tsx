import { useParams } from 'react-router-dom'
import { moviesMock } from '../../../application/mocks'

const Movie = () => {
  const params = useParams()
  console.log(params.movieId)

  const movies = moviesMock
  const movie = movies.find(movie => movie.id === params.movieId)

  return (
    <>
      <h1>
        {movie?.title} - {movie?.year}
      </h1>

      {movie?.runtimeInMinutes && (
        <h3>Tempo de duração: {movie?.runtimeInMinutes}m</h3>
      )}
      <p>{movie?.description}</p>
    </>
  )
}

export default Movie
