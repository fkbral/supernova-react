import { useEffect, useRef } from 'react'
import { useAuth } from '../../application/hooks/useAuth'
import { Button } from '../../components/Button'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { IconInput } from '../../components/IconInput'
import { LockIcon, UserIcon } from '../../utils/icons'

const Login = () => {
  const { signIn, userProfile } = useAuth()
  const navigate = useNavigate()

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
      <IconInput
        labelText="Seu email"
        InputIcon={UserIcon}
        placeholder="fulano@gmail.com"
        type="text"
        ref={userEmailRef}
      />

      {/* <input
        placeholder="fulano@gmail.com"
        type="text"
        ref={userEmailRef}
      /> */}

      <IconInput
        labelText="Sua senha"
        InputIcon={LockIcon}
        placeholder="minhasenhasecreta123@"
        ref={userPasswordRef}
      />

      <Button type="submit">Entrar no sistema</Button>
    </S.LoginForm>
  )
}

export default Login
