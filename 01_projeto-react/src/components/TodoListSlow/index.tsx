import { useCallback, useDeferredValue, useMemo, useState } from 'react'
import { TodoItem } from '../../application/types/TodoItem'
import { TodoItemComponent } from '../TodoItem'
import { v4 as uuid, v4 } from 'uuid'

type TodoListSlowProps = {
  itemInput: string
}

export const TodoListSlow = ({itemInput}: TodoListSlowProps) => {
  const [items, setItems] = useState<TodoItem[]>([])
  const defferedInput = useDeferredValue(itemInput)

  function handleAddItemToList(index: number) {
    setItems(previousState => [
      ...previousState,
      { id: uuid(), name: `item ${index}` },
    ])
  }

  const handleRemoveItemFromList = useCallback(
    (id: string) => {
      setItems(previousItems => {
        const itemsUpdated = previousItems.filter(item => item.id !== id)
        return itemsUpdated
      })
    },
    [setItems]
  )

  useMemo(() => {
    setItems([])

    Array.from({ length: 5000 }, () =>
      setItems(previousItems => [
        ...previousItems,
        { name: itemInput, id: v4() },
      ])
    )
  }, [defferedInput])

  return (
    <section>
      <h1>Lista de Afazeres</h1>

      <ul>
        {items.map(item => (
          <TodoItemComponent
            key={item.id}
            item={item}
            handleRemoveItem={() => handleRemoveItemFromList(item.id)}
          />
        ))}
      </ul>
    </section>
  )
}
