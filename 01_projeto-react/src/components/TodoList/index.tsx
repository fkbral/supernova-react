import { useState } from 'react'
import { TodoItem } from '../../application/types/TodoItem'
import { TodoItemComponent } from '../TodoItem'
import { v4 as uuid } from 'uuid'

export const TodoList = () => {
  const [items, setItems] = useState<TodoItem[]>([])

  function handleAddItemToList(index: number) {
    setItems(previousState => [
      ...previousState,
      { id: uuid(), name: `item ${index}` },
    ])
  }

  return (
    <section>
      <h1>Lista de Afazeres</h1>

      <button onClick={() => handleAddItemToList(items.length + 1)}>
        Adicionar Item à Lista
      </button>

      <ul>
        {items.map(item => (
          <TodoItemComponent key={item.id} item={item} />
        ))}
      </ul>
    </section>
  )
}
