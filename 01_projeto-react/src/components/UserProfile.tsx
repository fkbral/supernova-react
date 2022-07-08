import { FC } from "react"

type UserProfileProps = {
  username: string
}

export const UserProfile: FC<UserProfileProps> = ({username}) => {

  return (
    <h1>
      Olá, {username}
    </h1>
  )
}