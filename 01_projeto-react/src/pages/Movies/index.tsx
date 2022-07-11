type Movie = {
  id: string
  title: string
  year: number
}

const Movies = () => {
  const movies: Movie[] = [
    {
      id: 'c67abf26-41ae-48f6-bc5b-a84f92d1fdb0',
      title: 'Toy Story',
      year: 1995,
    },
    {
      id: '426e8fd6-f2a6-4536-b916-b99f9c28ddd8',
      title: 'Prenda-me se for capaz',
      year: 2002,
    },
    {
      id: 'b84e1596-ae02-4e21-8550-72edd3af088f',
      title: 'Ilha do Medo',
      year: 2010,
    },
    {
      id: '9bc9fe7f-8b1f-448b-b87b-400077ad0f99',
      title: 'Amnésia',
      year: 2000,
    },
    {
      id: '8de21f1f-876e-44a0-bbe2-d209a9f3b53b',
      title: 'Garota Exemplar',
      year: 2014,
    },
    {
      id: '18e3ecd8-7f4e-40cd-9f33-f2af6477579c',
      title: 'Buscando...',
      year: 2018,
    },
    {
      id: '03b02b12-54b3-4f7f-a9f7-a438481e0ce0',
      title: 'Interestelar',
      year: 2014,
    },
    {
      id: '28cb0078-531b-4d32-a609-fa7a69cb28e6',
      title: 'Em Ritmo de Fuga',
      year: 2017,
    },
    {
      id: '28cb0078-531b-4d32-a609-fa7a69cb28e6',
      title: 'O Preço do Amanhã',
      year: 2011,
    },
    {
      id: 'd130a03c-6278-427c-b2ea-142dc4d45d31',
      title: 'Um Lugar Silencioso',
      year: 2018,
    },
  ]

  return (
    <>
      <h1>Filmes</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> - <span>{movie.year}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Movies
