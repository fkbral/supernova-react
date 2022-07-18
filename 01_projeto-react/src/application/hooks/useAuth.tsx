import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { userProfileMocks } from '../../__tests__/mocks/userProfileMocks'
import { UserProfile } from '../types/UserProfile'

type AuthContextProps = {
  userProfile: UserProfile | null
  signIn: (email: string, password: string) => void
  signOut: () => void
  // token: JWTToken
}

const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  function signIn(email: string, password: string) {
    const user = userProfileMocks.find(findUser => findUser.email === email)

    if (user) {
      setUserProfile(user)
    }
  }

  // const signOut = useCallback(() => {
  //   setUserProfile(null)
  // }, [setUserProfile])

  function signOut() {
    setUserProfile(null)
  }

  const soma = (numero1: number, numero2: number) => numero1 + numero2
  const num1 = 10
  const num2 = 20
  const somaMemoized = useMemo(() => soma(num1, num2), [num1, num2])

  const authContextValue = useMemo(
    function () {
      return {
        userProfile,
        signIn,
        signOut,
      }
    },
    [userProfile, signIn, signOut]
  )

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("auth provider must be used within it's provider")
  }

  return context
}
