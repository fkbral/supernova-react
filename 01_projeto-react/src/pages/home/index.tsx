import { Link } from 'react-router-dom'
import { useAuth } from '../../application/hooks/useAuth'
import { AttendanceList } from '../../components/AttendanceList'
import { Button } from '../../components/Button'
import { UserProfile } from '../../components/UserProfile'
import { UserIcon, BikeIcon, SignOutIcon } from '../../utils/icons'

export function Home() {
  const { userProfile, signOut } = useAuth()

  return (
    <div>
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

        <li>
          <Link to="/icon-favorites-picker">ícones favoritados</Link>
        </li>

        <li>
          <Link to="/modal-example">Exemplo de Modal</Link>
        </li>

        <li>
          <Link to="/todo-list">Todo List</Link>
        </li>

        <li>
          <Link to="/todo-list-with-input">Todo List com input e processamento lento</Link>
        </li>
      </ul>

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
