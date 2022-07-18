import { createContext, ReactNode, useContext, useState } from 'react'
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

  function signOut() {
    setUserProfile(null)
  }

  return (
    <AuthContext.Provider value={{ userProfile, signIn, signOut }}>
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
