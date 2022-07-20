import { useEffect, useRef } from 'react'
import { useAuth } from '../../application/hooks/useAuth'
import { Button } from '../../components/Button'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { signIn, userProfile } = useAuth()
  const navigate = useNavigate()

  const customTheme = {
    fontFamily: {},
    colors: {
      'primary-color': 'steelblue',
      'secondary-color': 'white',
    },
  }

  const userEmailRef = useRef<HTMLInputElement>(null)
  const userPasswordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!userProfile) {
      return
    }

    navigate('/')
  }, [userProfile])

  function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!userEmailRef.current || !userPasswordRef.current) {
      return
    }

    signIn(userEmailRef.current.value, userPasswordRef.current.value)
  }

  return (
    <S.LoginForm onSubmit={handleSignIn}>
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
