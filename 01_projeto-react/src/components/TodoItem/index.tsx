import { memo } from 'react'
import { TodoItem } from '../../application/types/TodoItem'

export type TodoItemProps = {
  item: TodoItem
  handleRemoveItem: () =>
    | void
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

const TodoItemBase = ({ item: { name }, handleRemoveItem }: TodoItemProps) => {
  return (
    <li>
      <span>{name}</span>
      <button onClick={handleRemoveItem} data-testid="remove-item-button">
        Remover item
      </button>
    </li>
  )
}

export const TodoItemComponent = memo(TodoItemBase)
