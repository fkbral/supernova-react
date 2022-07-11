import { Student } from '../../types/Student'
import './styles.css'

export const AttendanceList = () => {
  const students: Student[] = [
    {
      id: 'c406efb6-1fa7-4e6e-89ac-754fe4fd4489',
      name: 'Maria',
    },
    {
      id: '350e9fe2-2738-4f48-9235-da87eafe6759',
      name: 'Joana',
    },
    {
      id: '255d3534-495c-40a9-9f21-8bd9efdca193',
      name: 'Roberto',
    },
  ]

  const todayDateString = new Date().toLocaleString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  const tomorrowDateTimeStamp = Date.now() + 1000 * 60 * 60 * 24 // miliseconds * seconds * minutes * hours (adds one day)
  const tomorrowDate = new Date(tomorrowDateTimeStamp)

  return (
    <section>
      <h2>Presenças de hoje ({todayDateString})</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <p>{student.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
