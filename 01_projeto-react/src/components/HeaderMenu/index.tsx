import { Link } from 'react-router-dom'
import { useAuth } from '../../application/hooks/useAuth'
import { SignOutIcon } from '../../utils/icons'

export const HeaderMenu = () => {
  const { userProfile, signOut } = useAuth()

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>

        <li>
          <Link to="/movies">filmes</Link>
        </li>

        <li>
          <Link to="/shopping-cart">Lista de compras</Link>
        </li>

        <li>
          <Link to="/forecast">Previsão do tempo para uma cidade</Link>
        </li>

        <li>
          <Link to="/forecast-class-component">
            Previsão do tempo para uma cidade usando componente de classe
          </Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        {userProfile && (
          <>
            <h1>Bem-vindo {userProfile.name}</h1>

            <button onClick={signOut}>
              <SignOutIcon />
            </button>
          </>
        )}
      </ul>
    </nav>
  )
}
