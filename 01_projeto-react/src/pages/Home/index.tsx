import { AttendanceList } from '../../components/AttendanceList'
import { Button } from '../../components/Button'
import { UserProfile } from '../../components/UserProfile'
import { UserIcon, BikeIcon } from '../../utils/icons'

export function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <h2>{'Hello Supernova!'.toUpperCase()}</h2>

      <UserProfile username="Renata" />

      <Button IconLeft={UserIcon}>entrar</Button>
      <Button>conheça nosso time</Button>
      <Button IconRight={BikeIcon}>alugue uma bike</Button>

      <Button type="submit">enviar</Button>

      <AttendanceList />

      {/* <button className="btn">qualquer coisa</button> */}
    </div>
  )
}

export default Home
