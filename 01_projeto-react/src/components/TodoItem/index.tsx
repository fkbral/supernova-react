import { memo } from 'react'
import { TodoItem } from '../../application/types/TodoItem'

type TodoItemProps = {
  item: TodoItem
}

const TodoItemBase = ({ item: { name } }: TodoItemProps) => {
  return (
    <li>
      <p>{name}</p>
    </li>
  )
}

export const TodoItemComponent = memo(TodoItemBase)
