import { memo } from 'react'
import { TodoItem } from '../../application/types/TodoItem'

type TodoItemProps = {
  item: TodoItem
  handleRemoveItem: () => void
}

const TodoItemBase = ({ item: { name }, handleRemoveItem }: TodoItemProps) => {
  return (
    <li>
      <span>{name}</span>
      <button onClick={handleRemoveItem}>Remover item</button>
    </li>
  )
}

export const TodoItemComponent = memo(TodoItemBase)
