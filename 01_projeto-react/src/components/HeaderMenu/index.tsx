import { Link } from 'react-router-dom'
import { useAuth } from '../../application/hooks/useAuth'
import { SignOutIcon } from '../../utils/icons'
import * as S from './styles'

export const HeaderMenu = () => {
  const { userProfile, signOut } = useAuth()

  return (
    <S.HeaderMenuContainerNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {userProfile && (
          <S.UserProfileLI>
            <h3>Bem-vindo {userProfile.name}</h3>

            <button onClick={signOut}>
              <SignOutIcon />
            </button>
          </S.UserProfileLI>
        )}
      </ul>
    </S.HeaderMenuContainerNav>
  )
}
