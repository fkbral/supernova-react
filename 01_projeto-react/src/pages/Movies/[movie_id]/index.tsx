import { useParams } from 'react-router-dom'

const Movie = () => {
  const params = useParams()
  console.log(params.movieId)

  return (
    <>
      <h1>Titulo do Filme - 2000</h1>
      <h2>Descrição</h2>
      <h3>Tempo de duração: 100m</h3>
    </>
  )
}

export default Movie
