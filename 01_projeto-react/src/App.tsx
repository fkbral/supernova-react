import { AttendanceList } from './components/AttendanceList'
import { Button } from './components/Button'
import { UserProfile } from './components/UserProfile'
import { BikeIcon, UserIcon } from './utils/icons'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { HeaderMenu } from './components/HeaderMenu'
import Movies from './pages/Movies'

export function App() {
  return (
    <BrowserRouter>
      <HeaderMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
