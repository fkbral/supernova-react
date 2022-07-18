import { useRef } from 'react'
import { useAuth } from '../../application/hooks/useAuth'
import { Button } from '../../components/Button'
import * as S from './styles'

const Login = () => {
  const { signIn } = useAuth()
  const customTheme = {
    fontFamily: {},
    colors: {
      'primary-color': 'steelblue',
      'secondary-color': 'white',
    },
  }

  const userEmailRef = useRef<HTMLInputElement>(null)
  const userPasswordRef = useRef<HTMLInputElement>(null)

  function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!userEmailRef.current || !userPasswordRef.current) {
      return
    }

    signIn(userEmailRef.current.value, userPasswordRef.current.value)
  }

  return (
    <S.LoginForm customTheme={customTheme} onSubmit={handleSignIn}>
      <label htmlFor="user-email">Seu email</label>
      <input
        placeholder="fulano@gmail.com"
        id="user-email"
        type="text"
        ref={userEmailRef}
      />

      <label htmlFor="user-password">Sua senha</label>
      <input
        placeholder="minhasenhasecreta123@"
        type="password"
        ref={userPasswordRef}
      />

      <Button type="submit">Entrar no sistema</Button>
    </S.LoginForm>
  )
}

export default Login
