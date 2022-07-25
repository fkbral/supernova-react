import { useState } from 'react'
import { TodoListSlow } from '../TodoListSlow'

export const TodoListWithInput = () => {
  const [itemInput, setItemInput] = useState('')

  return (
    <section>
      <input
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}
        placeholder="texto do item"
      />

      <TodoListSlow itemInput={itemInput}  />
    </section>
  )
}
