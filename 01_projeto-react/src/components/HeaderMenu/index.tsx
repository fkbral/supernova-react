import { Link } from 'react-router-dom'

export const HeaderMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/movies">filmes</Link>
        </li>
      </ul>
    </nav>
  )
}
